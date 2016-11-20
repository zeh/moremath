/**
 * @author Zeh Fernando
 */

// Vars
let _uniqueInt = 1;

/**
 * Maps a value from a range, determined by old minimum and maximum values, to a new range,
 * determined by new minimum and maximum values. These minimum and maximum values are
 * referential; the new value is not clamped by them.
 *
 * @param value	The value to be re-mapped.
 * @param oldMin	The previous minimum value.
 * @param oldMax	The previous maximum value.
 * @param newMin	The new minimum value.
 * @param newMax	The new maximum value.
 * @return			The new value, mapped to the new range.
 */
function map(value:number, oldMin:number, oldMax:number, newMin:number = 0, newMax:number = 1, shouldClamp:Boolean = false):number {
	if (oldMin === oldMax) return newMin;
	let p = ((value - oldMin) / (oldMax - oldMin) * (newMax - newMin)) + newMin;
	if (shouldClamp) p = newMin < newMax ? clamp(p, newMin, newMax) : clamp(p, newMax, newMin);
	return p;
}

/**
 * Clamps a number to a range, by restricting it to a minimum and maximum values: if the passed
 * value is lower than the minimum value, it's replaced by the minimum; if it's higher than the
 * maximum value, it's replaced by the maximum; if neither, it's unchanged.
 *
 * @param value	The value to be clamped.
 * @param min		Minimum value allowed.
 * @param max		Maximum value allowed.
 * @return			The newly clamped value.
 */
function clamp(value:number, min:number = 0, max:number = 1):number {
	return value < min ? min : value > max ? max : value;
}

/**
 * Clamps a number to a range, by restricting it to a range of values: if the passed
 * value is lower than the minimum value, it's replaced by the minimum; if it's higher than the
 * maximum value, it's replaced by the maximum; if neither, it's unchanged.
 *
 * This function is similar to clamp(), but it switches the range values if necessary, without
 * assuming the first value is the lower value.
 *
 * @param value	The value to be clamped.
 * @param clamp1	One end of the allowed range.
 * @param clamp2	Other end of the allowed range.
 * @return			The newly clamped value.
 */
function clampAuto(value:number, clamp1:number = 0, clamp2:number = 1):number {
	if (clamp2 < clamp1) {
		const v:number = clamp2;
		clamp2 = clamp1;
		clamp1 = v;
	}
	return value < clamp1 ? clamp1 : value > clamp2 ? clamp2 : value;
}

/**
 * Returns a power of two value that is higher than the passed value.
 *
 * @param value		The minimum value desired.
 * @return			A power of two value that is equal to or higher than the input value.
 */
function getHighestPowerOfTwo(value:number):number {
	let c:number = 1;
	while (c < value) c <<= 1;
	return c;
}

/**
 * Returns a unique number for this session. This is simply a global integer sequence, starting at 1.
 *
 * @return		A unique integer for the session.
 */
function getUniqueNumber():number {
	return _uniqueInt++;
}

/**
 * Returns whether a number is a power of two (2, 4, 8, 16, etc).
 *
 * @param value		A number to be tested.
 * @return			Whether the input number is a power of two.
 */
function isPowerOfTwo(value:number):Boolean {
	return value > 0 && (value & (value - 1)) === 0;
}

/**
 * Restricts a value to a range, by restricting it to a minimum and maximum values but folding the
 * value to the range instead of simply clamping to the minimum and maximum. It works like a
 * more powerful Modulo function because it allows arbitrary ranges.
 *
 * @param value		The value to be clamped.
 * @param min		Minimum value allowed.
 * @param max		Maximum value allowed. Never reached; the minimum would be used instead.
 * @return			The new value, mapped to the range.
 *
 * @example Some examples:
 * 	console.log(rangeMod(14, 0, 10));
 * 	// Result: 4
 *
 * 	console.log(rangeMod(360, 0, 360));
 * 	// Result: 0
 *
 * 	console.log(rangeMod(360, -180, 180));
 * 	// Result: 0
 *
 * 	console.log(rangeMod(21, 0, 10));
 * 	// Result: 1
 *
 * 	console.log(rangeMod(-98, 0, 100));
 * 	// Result: 2
 */
function rangeMod(value:number, min:number, pseudoMax:number):number {
	let range:number = pseudoMax - min;
	value = (value - min) % range;
	if (value < 0) value = range - (-value % range);
	value += min;
	return value;
}

const defs = {
	clamp,
	clampAuto,
	getHighestPowerOfTwo,
	getUniqueNumber,
	isPowerOfTwo,
	map,
	rangeMod,
};

export {
	defs as default,
	clamp,
	clampAuto,
	getHighestPowerOfTwo,
	getUniqueNumber,
	isPowerOfTwo,
	map,
	rangeMod,
};

// export default class MathUtils {
//     static DEG2RAD: number;
//     static RAD2DEG: number;



