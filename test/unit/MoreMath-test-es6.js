import { expect } from "chai";

import MoreMath from "./../../dist/MoreMath";
import {
	clamp,
	clampAuto,
	getHighestPowerOfTwo,
	isPowerOfTwo,
	map,
	rangeMod
} from "./../../dist/MoreMath";

describe("MoreMath (ES6)", () => {
	it("is a class", function() {
		expect(MoreMath).to.not.a.function;
	});

	it("should have function export equivalents", function() {
		expect(MoreMath.clamp).to.equal(clamp);
		expect(MoreMath.clampAuto).to.equal(clampAuto);
		expect(MoreMath.getHighestPowerOfTwo).to.equal(getHighestPowerOfTwo);
		expect(MoreMath.isPowerOfTwo).to.equal(isPowerOfTwo);
		expect(MoreMath.map).to.equal(map);
		expect(MoreMath.rangeMod).to.equal(rangeMod);
	});

	it("should clamp a value", function() {
		expect(clamp(0, 0, 1)).to.equal(0);
		expect(clamp(-1, 0, 1)).to.equal(0);
		expect(clamp(0.5, 0, 1)).to.equal(0.5);
		expect(clamp(1, 0, 1)).to.equal(1);
		expect(clamp(2, 0, 1)).to.equal(1);
		expect(clamp(20, 0, 10)).to.equal(10);
		expect(clamp(3, 4, 10)).to.equal(4);

		expect(MoreMath.clampAuto(-1, 0, 1)).to.equal(0);
		expect(MoreMath.clampAuto(0, 0, 1)).to.equal(0);
		expect(MoreMath.clampAuto(0.5, 0, 1)).to.equal(0.5);
		expect(MoreMath.clampAuto(1, 0, 1)).to.equal(1);
		expect(MoreMath.clampAuto(2, 0, 1)).to.equal(1);
		expect(MoreMath.clampAuto(-1, 1, 0)).to.equal(0);
		expect(MoreMath.clampAuto(0, 1, 0)).to.equal(0);
		expect(MoreMath.clampAuto(0.5, 1, 0)).to.equal(0.5);
		expect(MoreMath.clampAuto(1, 1, 0)).to.equal(1);
		expect(MoreMath.clampAuto(2, 1, 0)).to.equal(1);
	});

	it("should map a value between ranges", function() {
		// Normal mappings
		expect(map(0, 0, 10, 50, 100)).to.equal(50);
		expect(map(5, 0, 10, 50, 100)).to.equal(75);
		expect(map(10, 0, 10, 50, 100)).to.equal(100);

		// Extrapolated mappings
		expect(map(20, 0, 10, 50, 100)).to.equal(150);
		expect(map(-10, 0, 10, 50, 100)).to.equal(0);

		// Clamped mappings
		expect(map(-10, 0, 10, 50, 100, true)).to.equal(50);
		expect(map(20, 0, 10, 50, 100, true)).to.equal(100);

		// Mapping with reverse ranges
		expect(map(0, 0, 10, 100, 50)).to.equal(100);
		expect(map(0, 10, 0, 100, 50)).to.equal(50);
		expect(map(0, 10, 0, 50, 100)).to.equal(100);
	});

	it("should use modulo for an arbitrary range", function() {
		expect(rangeMod(14, 0, 10)).to.equal(4);
		expect(rangeMod(360, 0, 360)).to.equal(0);
		expect(rangeMod(360, -180, 180)).to.equal(0);
		expect(rangeMod(21, 0, 10)).to.equal(1);
		expect(rangeMod(-98, 0, 100)).to.equal(2);
	});

	it("should check and calculate powers of two", function() {
		expect(isPowerOfTwo(-1)).to.equal(false);
		expect(isPowerOfTwo(0)).to.equal(false);
		expect(isPowerOfTwo(1)).to.equal(true);
		expect(isPowerOfTwo(2)).to.equal(true);
		expect(isPowerOfTwo(4)).to.equal(true);
		expect(isPowerOfTwo(64)).to.equal(true);
		expect(isPowerOfTwo(524288)).to.equal(true);
		expect(isPowerOfTwo(3)).to.equal(false);
		expect(isPowerOfTwo(94172)).to.equal(false);
		expect(isPowerOfTwo(524283)).to.equal(false);
		expect(getHighestPowerOfTwo(3)).to.equal(4);
		expect(getHighestPowerOfTwo(1025)).to.equal(2048);
		expect(getHighestPowerOfTwo(524287)).to.equal(524288);
		expect(getHighestPowerOfTwo(524288)).to.equal(524288);
		expect(getHighestPowerOfTwo(524289)).to.equal(1048576);
	});
});