import Decimal from 'decimal.js';

// maps from dimension id to exponent
// e.g.  m/s^2 has dimension map {m => 1, s => -2}
class DimensionMap extends Map<DimensionId, number> {
	private static unicodePow = '⁰¹²³⁴⁵⁶⁷⁸⁹';
	static toUnicodePow(x: number) {
		if(x === 1) return "";
		return x.toString().split("").map(x => DimensionMap.unicodePow[+x]).join("");
	}
	toString() {
		//return [...this].map(([id, exp]) => `${Dimension.get(id).name}^${exp}`).join(" ");
		const {pos, neg} = this.splitPosNeg();
		let str = pos.map(([id, exp]) => Dimension.get(id).name+DimensionMap.toUnicodePow(exp)).join(" ");
		if(neg.length > 0) {
			str += " / "+neg.map(([id, exp]) => Dimension.get(id).name+DimensionMap.toUnicodePow(-exp)).join(" ");
		}
		return str;
	}
	splitPosNeg() {
		return {
			pos:[...this].filter(([id, exp]) => exp > 0),
			neg:[...this].filter(([id, exp]) => exp < 0)
		};
	}
	static join(...list: { dimensions: DimensionMap, factor: number }[]) {
		const map: DimensionMap = new DimensionMap();
		for (const {dimensions, factor} of list) {
			for (const [dimension, exponent] of dimensions) {
				const newFactor = (map.get(dimension) || 0) + exponent * factor;
				if (newFactor === 0) map.delete(dimension);
				else map.set(dimension, newFactor);
			}
		}
		return map;
	}
	assertEmpty(str = "") {
		if (this.size > 0) throw Error(str + " must be dimensionless");
	}
	toMismatchString() {
		const {pos:tooMuch, neg:notEnough} = this.splitPosNeg();
		if(tooMuch.length === 0) return "missing "+new DimensionMap(notEnough);
		if(notEnough.length === 0) return "don't want "+new DimensionMap(tooMuch);
		return `have ${new DimensionMap(tooMuch)}, want ${new DimensionMap(notEnough)}`;
	}
}

type NumberSource = {fn: string, args: UnitNumber[]};

export class UnitNumber {
	readonly value: decimal.Decimal;
	readonly dimensions: DimensionMap;
	readonly id: string;
	readonly source: NumberSource;
	constructor(value: decimal.Decimal | number | string, dimensions: DimensionMap = new DimensionMap(), source: NumberSource = undefined, id: string = undefined) {
		this.value = Decimal(value);
		this.dimensions = dimensions;
		this.id = id;
		this.source = source;
	}
	mul(other: UnitNumber) {
		return new UnitNumber(this.value.times(other.value), DimensionMap.join(
			{ dimensions: this.dimensions, factor: 1 },
			{ dimensions: other.dimensions, factor: 1 }
		), {fn:"·", args:[this, other]});
	}
	div(other: UnitNumber) {
		return new UnitNumber(this.value.div(other.value), DimensionMap.join(
			{ dimensions: this.dimensions, factor: 1 },
			{ dimensions: other.dimensions, factor: -1 }
		), {fn:"/", args:[this, other]});
	}
	plus(other: UnitNumber, factor = 1) {
		const dimensionDifference = this.div(other).dimensions;
		if (dimensionDifference.size > 0) throw Error("Dimensions don't match: " + dimensionDifference.toMismatchString());
		return new UnitNumber(this.value.plus(other.value.times(factor)), this.dimensions, {fn:factor==1?"+":"-", args:[this, other]});
	}
	minus(other: UnitNumber) {
		return this.plus(other, -1);
	}
	withIdentifier(id: string) {
		return new UnitNumber(this.value, this.dimensions, this.source, id);
	}
	toString(depth = 0): string {
		if(!this.source || depth == 0) {
			if (this.id !== undefined) return this.id;
			else return `${this.value}${this.dimensions.size > 0 ? " ":""}${this.dimensions}`;
		}
		return `${this} = ${this.source.args.map(a => "("+a.toString(depth - 1)+")").join(" "+this.source.fn+" ")}`; 
	}
	pow(factor: number | decimal.Decimal | UnitNumber): UnitNumber {
		if (typeof factor === 'number' || factor instanceof Decimal)
			return new UnitNumber(this.value.pow(factor), DimensionMap.join({ dimensions: this.dimensions, factor: typeof factor === 'number' ? factor : factor.toNumber() }), {fn:"^", args:[this, new UnitNumber(factor)]});
		else if (factor.dimensions.size > 0) throw Error("power must be dimensionless");
		else return this.pow(factor.value);
	}
	convertTo(unit: UnitNumber): UnitNumber {
		const d = this.div(unit);
		if (d.dimensions.size > 0) throw Error("Dimensions don't match: " + d.dimensions.toMismatchString());
		d.source.fn = 'to';
		return d;
	}
	static createBaseUnit(dimensionName: string) {
		const dimension = new Dimension(dimensionName);
		const map = new DimensionMap(); map.set(dimension.id, 1);
		return new UnitNumber(1, map, undefined, dimensionName);
	}
}

// <hack href="https://github.com/Microsoft/TypeScript/issues/202">
module AsDimensionId { export const enum Brand { } }
interface AsDimensionId { '': AsDimensionId.Brand; }
type DimensionId = number & AsDimensionId;
// </hack>

class Dimension {
	private static dimensions = new Map<DimensionId, Dimension>();
	static get(id: DimensionId) { return Dimension.dimensions.get(id); }
	readonly id: DimensionId;
	readonly name: string;
	constructor(name: string) {
		this.id = Dimension.dimensions.size as DimensionId;
		this.name = name;
		Dimension.dimensions.set(this.id, this);
	}
}