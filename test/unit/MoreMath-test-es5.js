var MoreMath = require("./../../dist/MoreMath.umd");

var clamp = require("./../../dist/MoreMath.umd").default.clamp;
var clampAuto = require("./../../dist/MoreMath.umd").default.clampAuto;
var getHighestPowerOfTwo = require("./../../dist/MoreMath.umd").default.getHighestPowerOfTwo;
var isPowerOfTwo = require("./../../dist/MoreMath.umd").default.isPowerOfTwo;
var map = require("./../../dist/MoreMath.umd").default.map;
var rangeMod = require("./../../dist/MoreMath.umd").default.rangeMod;

describe("MoreMath (ES5)", () => {
	it("is a class", function() {
		expect(MoreMath).not.toBe("function");
	});

	it("should have function export equivalents", function() {
		expect(MoreMath.clamp).toEqual(clamp);
		expect(MoreMath.clampAuto).toEqual(clampAuto);
		expect(MoreMath.getHighestPowerOfTwo).toEqual(getHighestPowerOfTwo);
		expect(MoreMath.isPowerOfTwo).toEqual(isPowerOfTwo);
		expect(MoreMath.map).toEqual(map);
		expect(MoreMath.rangeMod).toEqual(rangeMod);
	});

	it("should clamp a value", function() {
		expect(clamp(0, 0, 1)).toEqual(0);
	});
});
