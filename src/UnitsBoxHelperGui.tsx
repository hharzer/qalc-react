import React from 'react';
import ReactDOM from 'react-dom';

const dir = "./gnu-units-2.12/";
enum Type {
	Deleted, Normal, Heading
}
interface Box {
	start: number; end: number; type: Type; headingLevel?: number;
}

//[["unifySelection",241,252],["unifySelection",527,535],["unifySelection",539,547],["markSelection",394,396,0],["markSelection",0,80,0],["markSelection",81,114,0],["markSelection",116,124,0],["splitSelection",669,675],["unifySelection",669,672],["markSelection",673,675,2],["unifySelection",673,675],["markSelection",723,728,1],["unifySelection",723,728],["unifySelection",742,757],["markSelection",742,757,1],["unifySelection",785,792],["markSelection",823,844,0],["unifySelection",903,917],["unifySelection",918,932],["unifySelection",954,968],["unifySelection",972,983],["splitSelection",993,995],["unifySelection",993,994],["markSelection",995,995,2],["unifySelection",1067,1069],["splitSelection",1099,1103],["unifySelection",1101,1103],["unifySelection",1099,1100],["splitSelection",1111,1114],["unifySelection",1111,1113],["markSelection",1114,1114,0],["splitSelection",1121,1122],["markSelection",1122,1122,0],["unifySelection",1130,1136],["unifySelection",1220,1229],["splitSelection",1231,1241],["unifySelection",1231,1232],["unifySelection",1233,1241],["unifySelection",1245,1247],["unifySelection",1259,1261],["unifySelection",1276,1279],["unifySelection",1288,1291],["splitSelection",1288,1291],["unifySelection",1288,1290],["markSelection",1291,1291,2],["unifySelection",1295,1297],["splitSelection",1299,1301],["markSelection",1313,1319,1],["unifySelection",1313,1319],["unifySelection",1394,1429],["splitSelection",1480,1490],["markSelection",1481,1482,1],["unifySelection",1481,1482],["markSelection",1483,1484,1],["unifySelection",1483,1484],["markSelection",1485,1490,1],["unifySelection",1485,1490],["markSelection",1491,1494,1],["unifySelection",1491,1494],["markSelection",1495,1498,1],["unifySelection",1495,1498],["markSelection",1499,1503,1],["unifySelection",1499,1503],["markSelection",1504,1508,1],["unifySelection",1504,1508],["markSelection",1509,1524,1],["unifySelection",1509,1524],["markSelection",1529,1545,0],["unifySelection",1619,1632],["splitSelection",1642,1645],["unifySelection",1643,1650],["unifySelection",1642,1650],["unifySelection",1671,1681],["markSelection",1683,1689,0],["unifySelection",1735,1758],["unifySelection",1941,1947],["splitSelection",1941,1947],["unifySelection",1941,1946],["markSelection",1947,1947,2],["unifySelection",1947,1958],["splitSelection",2034,2039],["unifySelection",2034,2038],["markSelection",2039,2039,2],["unifySelection",2048,2065],["unifySelection",2078,2079],["splitSelection",2164,2168],["unifySelection",2164,2165],["unifySelection",2166,2168],["markSelection",2166,2168,2],["unifySelection",2390,2391],["unifySelection",2438,2439],["unifySelection",2438,2440],["unifySelection",2441,2442],["splitSelection",2448,2460],["unifySelection",2458,2460],["markSelection",2458,2460,2],["unifySelection",2448,2457],["unifySelection",2570,2578],["splitSelection",2711,2713],["unifySelection",2711,2712],["markSelection",2713,2713,2],["unifySelection",2816,2819],["unifySelection",2801,2804],["splitSelection",2927,2929],["unifySelection",2927,2928],["markSelection",2929,2929,2],["unifySelection",3038,3044],["unifySelection",3093,3094],["unifySelection",3325,3335],["unifySelection",3337,3347],["unifySelection",3349,3359],["unifySelection",3487,3491],["unifySelection",3590,3602],["unifySelection",3709,3710],["unifySelection",3785,3788],["unifySelection",3868,3870],["unifySelection",3928,3935],["splitSelection",3909,3911],["unifySelection",3942,3945],["unifySelection",4019,4024],["unifySelection",4606,4607],["unifySelection",4606,4609],["unifySelection",4603,4604],["unifySelection",4611,4613],["unifySelection",4753,4778],["splitSelection",4917,4928],["unifySelection",4917,4925],["unifySelection",4926,4928],["markSelection",4926,4928,2],["unifySelection",4949,4955],["unifySelection",5191,5197],["unifySelection",5247,5252],["unifySelection",5388,5391],["unifySelection",5417,5420],["unifySelection",5496,5501],["unifySelection",5531,5535],["unifySelection",5539,5541],["unifySelection",5556,5572],["unifySelection",5576,5582],["unifySelection",5635,5637],["splitSelection",5877,5879],["markSelection",5878,5879,0],["splitSelection",5881,5883],["markSelection",5882,5883,0],["splitSelection",5889,5890],["markSelection",5890,5890,0],["splitSelection",5797,5798],["markSelection",5798,5798,0],["unifySelection",219,220],["setHeadingDepth",125,132,1],["setHeadingDepth",133,136,2],["setHeadingDepth",202,207,1],["setHeadingDepth",274,277,1],["setHeadingDepth",274,277,2],["setHeadingDepth",274,277,0],["setHeadingDepth",274,277,0],["setHeadingDepth",274,277,1],["setHeadingDepth",274,277,1],["setHeadingDepth",274,277,2],["setHeadingDepth",366,367,3],["setHeadingDepth",314,320,3],["setHeadingDepth",366,367,4],["setHeadingDepth",434,439,1],["setHeadingDepth",442,445,2],["setHeadingDepth",623,627,3],["setHeadingDepth",633,636,2],["setHeadingDepth",673,675,2],["setHeadingDepth",758,769,3],["setHeadingDepth",796,807,3],["setHeadingDepth",845,848,1],["setHeadingDepth",849,850,2],["setHeadingDepth",1057,1060,1],["setHeadingDepth",1148,1149,2],["setHeadingDepth",1302,1307,2],["setHeadingDepth",1302,1307,3],["setHeadingDepth",1330,1369,2],["setHeadingDepth",1176,1185,3],["setHeadingDepth",1248,1251,2],["setHeadingDepth",1291,1291,3],["setHeadingDepth",1302,1307,4],["setHeadingDepth",1330,1369,3],["setHeadingDepth",1373,1374,4],["splitSelection",1384,1387],["markSelection",1386,1386,1],["setHeadingDepth",1385,1385,5],["setHeadingDepth",1394,1429,4],["setHeadingDepth",1390,1391,4],["splitSelection",1509,1524],["unifySelection",1510,1522],["markSelection",1510,1522,2],["setHeadingDepth",1547,1570,3],["setHeadingDepth",1547,1570,2],["setHeadingDepth",1691,1692,3],["setHeadingDepth",125,132,1],["setHeadingDepth",1718,1724,3],["setHeadingDepth",1718,1724,2],["setHeadingDepth",1778,1785,3],["setHeadingDepth",1827,1831,2],["setHeadingDepth",1832,1833,3],["setHeadingDepth",1860,1863,1],["setHeadingDepth",1864,1865,2],["setHeadingDepth",1914,1915,3],["setHeadingDepth",2202,2205,2],["setHeadingDepth",2218,2221,1],["unifySelection",1864,1888],["setHeadingDepth",1864,1888,2],["setHeadingDepth",1947,1958,2],["setHeadingDepth",2025,2026,3],["setHeadingDepth",2039,2039,2],["setHeadingDepth",2172,2179,3],["setHeadingDepth",2222,2231,2],["setHeadingDepth",2310,2316,3],["setHeadingDepth",2380,2381,2],["setHeadingDepth",2427,2430,1],["setHeadingDepth",2461,2462,2],["setHeadingDepth",2492,2494,3],["setHeadingDepth",2508,2509,2],["setHeadingDepth",2618,2679,2],["setHeadingDepth",2618,2679,3],["markSelection",2680,2702,1],["unifySelection",2680,2702],["unifySelection",2580,2582],["unifySelection",2583,2585],["setHeadingDepth",2709,2710,3],["setHeadingDepth",2709,2710,4],["setHeadingDepth",2718,2729,3],["markSelection",2709,2712,1],["unifySelection",2709,2712],["markSelection",2713,2717,1],["unifySelection",2713,2717],["unifySelection",2718,2735],["markSelection",2718,2735,1],["setHeadingDepth",2703,2708,3],["setHeadingDepth",2703,2708,4],["markSelection",2736,2746,1],["unifySelection",2736,2746],["markSelection",2747,2751,1],["unifySelection",2747,2751],["markSelection",2752,2757,1],["unifySelection",2752,2757],["setHeadingDepth",2752,2757,3],["setHeadingDepth",2752,2757,3],["setHeadingDepth",2752,2757,2],["setHeadingDepth",2752,2757,0],["setHeadingDepth",2787,2792,3],["setHeadingDepth",2796,2799,1],["setHeadingDepth",2889,2890,2],["unifySelection",2929,2983],["markSelection",2929,2983,1],["markSelection",2988,3010,1],["unifySelection",2988,3010],["splitSelection",2988,3010],["unifySelection",2989,3008],["setHeadingDepth",3061,3067,3],["setHeadingDepth",3071,3072,2],["unifySelection",3086,3088],["markSelection",3113,3118,1],["unifySelection",3113,3118],["splitSelection",3100,3109],["unifySelection",3101,3103],["unifySelection",3104,3109],["unifySelection",3104,3111],["markSelection",3104,3111,1],["setHeadingDepth",3120,3124,3],["setHeadingDepth",3142,3149,3],["setHeadingDepth",3142,3149,2],["setHeadingDepth",3162,3165,3],["setHeadingDepth",3191,3192,1],["setHeadingDepth",3773,3779,1],["setHeadingDepth",3806,3809,2],["setHeadingDepth",3898,3901,1],["setHeadingDepth",3936,3940,2],["setHeadingDepth",3947,3948,1],["setHeadingDepth",3958,3959,2],["setHeadingDepth",3980,3987,1],["markSelection",4041,4054,1],["unifySelection",4041,4054],["markSelection",4037,4040,1],["unifySelection",4037,4040],["markSelection",4055,4057,1],["unifySelection",4055,4057],["markSelection",4058,4060,1],["unifySelection",4058,4060],["markSelection",4058,4062,1],["unifySelection",4058,4062],["markSelection",4066,4069,1],["unifySelection",4066,4069],["splitSelection",4064,4065],["markSelection",4065,4065,0],["setHeadingDepth",4070,4072,2],["markSelection",4076,4081,1],["unifySelection",4076,4081],["markSelection",4070,4075,1],["unifySelection",4070,4075],["markSelection",4082,4090,1],["unifySelection",4082,4090],["markSelection",4091,4094,1],["unifySelection",4091,4094],["markSelection",4095,4104,1],["unifySelection",4095,4104],["markSelection",4105,4108,1],["unifySelection",4105,4108],["markSelection",4109,4117,1],["unifySelection",4109,4117],["markSelection",4118,4130,1],["unifySelection",4118,4130],["markSelection",4131,4137,1],["unifySelection",4131,4137],["markSelection",4138,4144,1],["markSelection",4138,4144,0],["setHeadingDepth",4193,4208,2],["setHeadingDepth",4253,4254,3],["setHeadingDepth",4294,4300,1],["markSelection",4343,4378,1],["unifySelection",4343,4378],["unifySelection",4379,4422],["markSelection",4379,4422,1],["markSelection",4423,4466,1],["unifySelection",4423,4466],["markSelection",4469,4522,1],["unifySelection",4469,4522],["setHeadingDepth",4526,4529,2],["markSelection",4526,4549,1],["unifySelection",4526,4549],["markSelection",4550,4574,1],["unifySelection",4550,4574],["splitSelection",4550,4574],["unifySelection",4551,4570],["unifySelection",4571,4596],["setHeadingDepth",4614,4615,2],["setHeadingDepth",4619,4622,1],["setHeadingDepth",4623,4634,2],["markSelection",4623,4637,1],["unifySelection",4623,4637],["markSelection",4638,4672,1],["unifySelection",4638,4672],["markSelection",4673,4679,1],["unifySelection",4673,4679],["markSelection",4680,4683,1],["unifySelection",4680,4683],["setHeadingDepth",4684,4687,1],["setHeadingDepth",4731,4734,1],["setHeadingDepth",4908,4915,1],["markSelection",4908,4925,1],["unifySelection",4908,4925],["setHeadingDepth",4908,4925,0],["splitSelection",4908,4925],["markSelection",4910,4925,1],["unifySelection",4910,4925],["setHeadingDepth",4909,4909,1],["setHeadingDepth",4909,4909,1],["markSelection",4909,4909,2],["setHeadingDepth",4956,4957,2],["setHeadingDepth",4984,5001,1],["setHeadingDepth",5002,5004,2],["setHeadingDepth",5033,5034,1],["setHeadingDepth",5033,5034,3],["markSelection",5053,5054,0],["setHeadingDepth",5058,5059,2],["setHeadingDepth",5060,5062,3],["setHeadingDepth",5099,5100,2],["unifySelection",5099,5103],["setHeadingDepth",5099,5103,2],["unifySelection",5117,5122],["setHeadingDepth",5145,5148,1],["setHeadingDepth",5218,5219,2],["setHeadingDepth",5402,5406,1],["setHeadingDepth",5407,5411,2],["setHeadingDepth",5430,5431,3],["setHeadingDepth",5523,5524,2],["setHeadingDepth",5573,5574,3],["setHeadingDepth",5600,5604,2],["setHeadingDepth",5677,5680,1],["setHeadingDepth",5668,5671,1]]
function binarySearchIndex<T>(array: T[], accessor: (ele:T) => number, search: number, exact = true, min = 0, max = array.length - 1): number {
	if(min === max)
		if(exact && accessor(array[min]) !== search) throw Error("can't find element" + search);
		else return min;
	const mid = ((min + max) / 2) |0;
	if(accessor(array[mid]) < search)
		return binarySearchIndex(array, accessor, search, exact, mid + 1, max);
	else
		return binarySearchIndex(array, accessor, search, exact, min, mid);
}
class HelperGui extends React.Component<{ lines: string[] }, { boxes: Box[], selectionStart: number, selectionEnd: number }> {
	pres: Map<Node, number> = new Map();
	executed: any[][] = [
	];
	constructor(props: { lines: string[] }) {
		super(props);
		this.state = { boxes: autoparseText(props.lines), selectionStart: -1, selectionEnd: -1 };
		document.addEventListener("selectionchange", e => this.getSelection(document.getSelection()), false);
		document.addEventListener("keyup", e => this.commandKey(e, String.fromCharCode(e.keyCode)));
	}
	categoryTreeOf(line: number) {
		const boxI = binarySearchIndex(this.state.boxes, x => x.start, line, false);
		const catTree = [''] as string[];
		for(let i = 0; i <= boxI; i++) {
			const box = this.state.boxes[i];
			const level = box.headingLevel || catTree.length - 1;
			if(box.type == Type.Heading && level <= catTree.length) {
				catTree.splice(level);
				catTree.push(this.props.lines.slice(box.start, box.end + 1).join("\n"));
			}
		}
		catTree.shift();
		return catTree;
	}
	commandKey(e: KeyboardEvent, key: string) {
		if(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) return;
		const sel = [this.state.selectionStart, this.state.selectionEnd];
		if(sel[0] == -1 || sel[1] == -1) {
			console.log("no selection");
			return;
		}
		if(key == 'T') {
			console.log(this.categoryTreeOf(sel[0]).map(x => x.replace(/#/g, "").replace(/\s+/g, " ")));
			return;
		}
		const cmds:{[name:string]: any[]} = {
			'J':["unifySelection", ...sel], 
			'S':["splitSelection", ...sel],
			'D':["markSelection", ...sel, Type.Deleted],
			'H':["markSelection", ...sel, Type.Heading],
			'N':["markSelection", ...sel, Type.Normal],
		};
		let cmd = cmds[key];
		if(/[0-9]/.test(key)) cmd = ["setHeadingDepth", ...sel, +key]; 
		else if(!cmds[key]) {
			console.log("unknown command: "+key);
			return;
		}
		this.execute(cmd);
	}
	setHeadingDepth(a: number, b: number, headingLevel: number) {
		this.setState(s => {
			const boxes = s.boxes.slice();
			const [startI, endI] = this.findBounds(boxes, a, b);
			for(let i = startI; i <= endI; i++) boxes[i] = Object.assign({}, boxes[i], {headingLevel});
			return {boxes}; 
		});
	}
	execute(cmd: any[]) {
		console.log("run: ", ...cmd);
		this.executed.push(cmd);
		(this as any)[cmd[0]].apply(this, cmd.slice(1));
		localStorage.setItem("executed", JSON.stringify(this.executed));
	}
	findBounds(boxes: Box[], l: number, r: number): [number, number] {
		return [binarySearchIndex(boxes, x => x.start, l), binarySearchIndex(boxes, x => x.end, r)];
	}
	markSelection(a: number, b: number, type: Type) {
		this.setState(s => {
			const boxes = s.boxes.slice();
			const [startI, endI] = this.findBounds(boxes, a, b);
			for(let i = startI; i <= endI; i++) boxes[i] = Object.assign({}, boxes[i], {type});
			return {boxes}; 
		});
	}
	unifySelection(a: number, b: number) {
		this.setState(s => {
			const boxes = s.boxes.slice();
			const [startI, endI] = this.findBounds(boxes, a,b);
			const type = boxes[startI].type;
			boxes.splice(startI, endI - startI + 1, {start: a, end: b, type});
			return {boxes, selectionStart: -1, selectionEnd: -1};
		})
		
	}
	splitSelection(a: number, b: number) {
		this.setState(s => {
			const boxes = s.boxes.slice();
			const [startI, endI] = this.findBounds(boxes, a,b);
			const newBs = [] as Box[];
			const type = boxes[startI].type;
			for(let i = a; i <= b; i++) {
				newBs.push({start:i, end: i, type});
			}
			boxes.splice(startI, endI - startI + 1, ...newBs);
			return {boxes, selectionStart: -1, selectionEnd: -1};
		});
	}
	getSelection(s: Selection) {
		const [boxes, lines] = [this.state.boxes, this.props.lines];
		let boxStartI = this.pres.get(s.anchorNode) || this.pres.get(s.anchorNode.parentElement);
		let boxEndI = this.pres.get(s.focusNode) || this.pres.get(s.focusNode.parentNode);
		if(boxStartI === undefined || boxEndI === undefined) {
			boxStartI = -1;
			boxEndI = -1;
		}
		if(boxEndI < boxStartI) [boxStartI, boxEndI] = [boxEndI, boxStartI];
		const [a, b] = [this.state.boxes[boxStartI].start, this.state.boxes[boxEndI].end];
		if(a == this.state.selectionStart && b == this.state.selectionEnd) {
			return;
		}
		else this.setState({selectionStart: a, selectionEnd: b} as any);
	}
	render() {
		const [boxes, lines] = [this.state.boxes, this.props.lines];
		let currentIndent = 0;
		return (
			<div className="container">
				{boxes.map((box,i) => {
					if(box.headingLevel) currentIndent = box.headingLevel;
					const thisIndent = currentIndent + (box.type == Type.Heading ? 0 : 1);
					return <pre style={Object.assign({}, typeStyles[box.type], {marginLeft:(thisIndent*100+1)+"px"})} className={box.start >= this.state.selectionStart && box.end <= this.state.selectionEnd ? "alert alert-info": ""}
							key={box.start+","+box.end} ref={e => this.pres.set(e, i)}>
						{lines.slice(box.start, box.end + 1).join("\n")}
					</pre>
				}
				)}
			</div>
		)
	}
	componentDidMount() {
		JSON.parse(localStorage.getItem("executed") || "[]").forEach((cmd:any[]) => this.execute(cmd));
		this.componentDidUpdate();
	}
	componentDidUpdate() {
		let i = 0;
		for(const box of this.state.boxes) {
			if(box.start !== i) console.error("inconsistency: end=", i, "!=", box.start,"=start");
			if(box.end < box.start) console.error("inconsistency box < 0", box);
			i = box.end + 1;
		}
	}
}

const styles = {
	box: {
		borderBottom:"1px solid black",
		borderRadius:"0px",
		padding:"2px",
		margin:0
	},
};
const typeStyles = {
	[Type.Deleted]: Object.assign({}, styles.box, {
		color: "lightgray"
	}),
	[Type.Normal]: Object.assign({}, styles.box, {
		
	}),
	[Type.Heading]: Object.assign({}, styles.box, {
		fontWeight: "bold",
		fontSize: "120%"
	})
};
function splitOnce(x: RegExp, str: string, trim = false): [string, string] {
	const i = str.search(x);
	if(i < 0) return [str, ""];
	const [a,b] = [str.substr(0, i), str.substr(i)];
	if(trim) return [a.trim(), b.trim()];
	else return [a, b];
}
function autoparseText(lines: string[]) {
	const boxes: Box[] = [];
	let boxStart = 0;
	let currentAliases: string[] = [];
	let lastHadBackslash = false;
	for (let i = 0; i < lines.length; i++) {
		let [line, comment] = splitOnce(/#/, lines[i], true);
		let [variable, value] = splitOnce(/\s/, line, true);
		
		if(lastHadBackslash) {
			lastHadBackslash = line.endsWith("\\");
			continue;
		}
		lastHadBackslash = line.endsWith("\\");
		if (line.length > 0) {
			if(!line.startsWith("!")) {
				//console.log(currentAliases, value);
				if(currentAliases.indexOf(value) >= 0) {
					currentAliases.push(variable);
					continue;
				}
			}
			
		} else if(comment.length > 0) continue;
		// end box
		if(i > 0) boxes.push({start: boxStart, end: i - 1, type: currentAliases.length > 0 ? Type.Normal : i - 1 - boxStart == 0 ? Type.Deleted : Type.Heading });
		boxStart = i;
		currentAliases = [variable, value].filter(x => x.length > 0);
	}
	if(boxStart < lines.length) boxes.push({start: boxStart, end: lines.length - 1, type: Type.Deleted});
	return boxes;
}
fetch(dir + "/definitions.units").then(x => x.text()).then(str => {
	const lines = str.split("\n");
	lines.unshift(""); // pretend it's one indexed
	(window as any).guiInst = ReactDOM.render(<HelperGui lines={lines} />, document.getElementById("root")) as any;
})
