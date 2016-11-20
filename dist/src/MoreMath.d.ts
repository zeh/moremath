/**
 * @author Zeh Fernando
 */
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
declare function map(value: number, oldMin: number, oldMax: number, newMin?: number, newMax?: number, shouldClamp?: Boolean): number;
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
declare function clamp(value: number, min?: number, max?: number): number;
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
declare function clampAuto(value: number, clamp1?: number, clamp2?: number): number;
/**
 * Returns a power of two value that is higher than the passed value.
 *
 * @param value		The minimum value desired.
 * @return			A power of two value that is equal to or higher than the input value.
 */
declare function getHighestPowerOfTwo(value: number): number;
/**
 * Returns whether a number is a power of two (2, 4, 8, 16, etc).
 *
 * @param value		A number to be tested.
 * @return			Whether the input number is a power of two.
 */
declare function isPowerOfTwo(value: number): Boolean;
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
declare function rangeMod(value: number, min: number, pseudoMax: number): number;
declare const defs: {
    clamp: (value: number, min?: number, max?: number) => number;
    clampAuto: (value: number, clamp1?: number, clamp2?: number) => number;
    getHighestPowerOfTwo: (value: number) => number;
    isPowerOfTwo: (value: number) => Boolean;
    map: (value: number, oldMin: number, oldMax: number, newMin?: number, newMax?: number, shouldClamp?: Boolean) => number;
    rangeMod: (value: number, min: number, pseudoMax: number) => number;
};
export { defs as default, clamp, clampAuto, getHighestPowerOfTwo, isPowerOfTwo, map, rangeMod };
