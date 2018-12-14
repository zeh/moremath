import MoreMath from "./../../dist/MoreMath.umd";
import {
	clamp,
	clampAuto,
	getHighestPowerOfTwo,
	isPowerOfTwo,
	map,
	rangeMod,
	getUniqueNumber,
} from "./../../dist/MoreMath.umd";

describe("MoreMath (ES6)", () => {
	it("is a class", function() {
		expect(MoreMath).not.toBe("function");
	});

	it("should have function export equivalents", function() {
		expect(MoreMath.clamp).toEqual(clamp);
		expect(MoreMath.clampAuto).toEqual(clampAuto);
		expect(MoreMath.getHighestPowerOfTwo).toEqual(getHighestPowerOfTwo);
		expect(MoreMath.getUniqueNumber).toEqual(getUniqueNumber);
		expect(MoreMath.isPowerOfTwo).toEqual(isPowerOfTwo);
		expect(MoreMath.map).toEqual(map);
		expect(MoreMath.rangeMod).toEqual(rangeMod);
	});

	it("should clamp a value", function() {
		expect(clamp(0, 0, 1)).toEqual(0);
		expect(clamp(-1, 0, 1)).toEqual(0);
		expect(clamp(0.5, 0, 1)).toEqual(0.5);
		expect(clamp(1, 0, 1)).toEqual(1);
		expect(clamp(2, 0, 1)).toEqual(1);
		expect(clamp(20, 0, 10)).toEqual(10);
		expect(clamp(3, 4, 10)).toEqual(4);

		expect(MoreMath.clampAuto(-1, 0, 1)).toEqual(0);
		expect(MoreMath.clampAuto(0, 0, 1)).toEqual(0);
		expect(MoreMath.clampAuto(0.5, 0, 1)).toEqual(0.5);
		expect(MoreMath.clampAuto(1, 0, 1)).toEqual(1);
		expect(MoreMath.clampAuto(2, 0, 1)).toEqual(1);
		expect(MoreMath.clampAuto(-1, 1, 0)).toEqual(0);
		expect(MoreMath.clampAuto(0, 1, 0)).toEqual(0);
		expect(MoreMath.clampAuto(0.5, 1, 0)).toEqual(0.5);
		expect(MoreMath.clampAuto(1, 1, 0)).toEqual(1);
		expect(MoreMath.clampAuto(2, 1, 0)).toEqual(1);
	});

	it("should map a value between ranges", function() {
		// Normal mappings
		expect(map(0, 0, 10, 50, 100)).toEqual(50);
		expect(map(5, 0, 10, 50, 100)).toEqual(75);
		expect(map(10, 0, 10, 50, 100)).toEqual(100);

		// Extrapolated mappings
		expect(map(20, 0, 10, 50, 100)).toEqual(150);
		expect(map(-10, 0, 10, 50, 100)).toEqual(0);

		// Clamped mappings
		expect(map(-10, 0, 10, 50, 100, true)).toEqual(50);
		expect(map(20, 0, 10, 50, 100, true)).toEqual(100);

		// Mapping with reverse ranges
		expect(map(0, 0, 10, 100, 50)).toEqual(100);
		expect(map(0, 10, 0, 100, 50)).toEqual(50);
		expect(map(0, 10, 0, 50, 100)).toEqual(100);
	});

	it("should use modulo for an arbitrary range", function() {
		expect(rangeMod(14, 0, 10)).toEqual(4);
		expect(rangeMod(360, 0, 360)).toEqual(0);
		expect(rangeMod(360, -180, 180)).toEqual(0);
		expect(rangeMod(21, 0, 10)).toEqual(1);
		expect(rangeMod(-98, 0, 100)).toEqual(2);
	});

	it("should check and calculate powers of two", function() {
		expect(isPowerOfTwo(-1)).toEqual(false);
		expect(isPowerOfTwo(0)).toEqual(false);
		expect(isPowerOfTwo(1)).toEqual(true);
		expect(isPowerOfTwo(2)).toEqual(true);
		expect(isPowerOfTwo(4)).toEqual(true);
		expect(isPowerOfTwo(64)).toEqual(true);
		expect(isPowerOfTwo(524288)).toEqual(true);
		expect(isPowerOfTwo(3)).toEqual(false);
		expect(isPowerOfTwo(94172)).toEqual(false);
		expect(isPowerOfTwo(524283)).toEqual(false);
		expect(getHighestPowerOfTwo(3)).toEqual(4);
		expect(getHighestPowerOfTwo(1025)).toEqual(2048);
		expect(getHighestPowerOfTwo(524287)).toEqual(524288);
		expect(getHighestPowerOfTwo(524288)).toEqual(524288);
		expect(getHighestPowerOfTwo(524289)).toEqual(1048576);
	});

	it("should create unique numbers", function() {
		expect(getUniqueNumber()).toEqual(1);
		expect(getUniqueNumber()).toEqual(2);
	});
});
