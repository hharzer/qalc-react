import { RPNToken, AToken } from "./parser";
import Scope from "./scope";
import { TaggedString } from "../output";
import * as Tree from "./Tree";
import * as parser from "./parser";
import globalScope from "./globalScope";
import {
	evaluationHasSideeffect,
	stripCommentsTrim,
	evaluate,
	define,
} from "./evaluator";

function unitConvertedTaggedString(node: Tree.Node, scope: Scope) {
	if (node instanceof Tree.FunctionCallNode && node.fnname === "to") {
		const unit = evaluate(node.operands[1], scope);
		const numericValue = evaluate(node.operands[0], scope).value.div(
			unit.value,
		);
		return TaggedString.t`${numericValue.toString()} ${unit.toTaggedString()}`;
	} else return evaluate(node, scope).value.toTaggedString();
}

export async function qalculationHasSideeffect(
	input: string,
): Promise<boolean> {
	try {
		const tree = Tree.rpnToTree(
			parser.toRPN(parser.preprocess(parser.tokenize(input))),
		);
		return evaluationHasSideeffect(tree, globalScope);
	} catch (e) {
		// can't parse -> cant execute -> no sideeffects
		return false;
	}
}
export async function qalculate(
	input: string,
	debug = false,
): Promise<TaggedString> {
	const scope = globalScope;
	if (debug) return qalculateDebug(input);
	const evaled = evaluate(
		Tree.rpnToTree(
			parser.toRPN(
				parser.preprocess(parser.tokenize(stripCommentsTrim(input))),
			),
		),
		scope,
	);
	if (evaled && evaled.value.id) return define(evaled, scope);
	return TaggedString.t`${evaled.toTaggedString()} = ${unitConvertedTaggedString(
		evaled,
		scope,
	)}`;
}
export async function qalculateDebug(input: string): Promise<TaggedString> {
	const scope = globalScope;
	if (input.trim().length === 0) return new TaggedString();
	input = stripCommentsTrim(input);
	let error = "";
	let tokens: AToken[] | null = null;
	try {
		tokens = [...parser.tokenize(input)];
	} catch (e) {
		console.error(e);
		error += e + "\n";
	}
	const pre = (e: Error) => (e.stack || e) + "\n";
	let preproc: AToken[] | null = null;
	if (tokens)
		try {
			preproc = [...parser.preprocess(tokens)];
		} catch (e) {
			console.error(e);
			error += pre(e);
		}
	let rpn: RPNToken[] | null = null;
	if (preproc)
		try {
			rpn = [...parser.toRPN(preproc)];
		} catch (e) {
			error += pre(e);
		}
	let parsed: Tree.Node | null = null;
	if (rpn)
		try {
			parsed = Tree.rpnToTree(rpn);
		} catch (e) {
			error += pre(e);
		}
	let evaled: Tree.EvaluatedNode | null = null;
	if (parsed)
		try {
			evaled = evaluate(parsed!, scope);
		} catch (e) {
			error += pre(e);
		}

	if (evaled && evaled.value.id) return define(evaled, scope);
	return TaggedString.t`
res = ${
		evaled
			? TaggedString.t`${evaled.toTaggedString()} = ${unitConvertedTaggedString(
					evaled,
					scope,
				)}`
			: "err"
	}
tokens = ${
		tokens ? tokens.map(t => parser.tokenToDebugString(t)).join(" ") : "err"
	}
preproc = ${
		preproc
			? preproc.map(t => parser.tokenToDebugString(t)).join(" ")
			: "err"
	}
rpn = ${rpn ? rpn.map(t => parser.tokenToDebugString(t)).join(" ") : "err"}
parsed = ${parsed ? parsed.toDebugString() : "err"}
${error ? "error = " + error : ""}`;
}

export { parseEvaluate } from "./evaluator";