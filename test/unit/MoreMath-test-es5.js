var expect = require('chai').expect;
var MoreMath = require("./../../dist/MoreMath").default;

var clamp = require("./../../dist/MoreMath").default.clamp;
var clampAuto = require("./../../dist/MoreMath").default.clampAuto;
var getHighestPowerOfTwo = require("./../../dist/MoreMath").default.getHighestPowerOfTwo;
var isPowerOfTwo = require("./../../dist/MoreMath").default.isPowerOfTwo;
var map = require("./../../dist/MoreMath").default.map;
var rangeMod = require("./../../dist/MoreMath").default.rangeMod;

describe("MoreMath (ES5)", () => {
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
	});
});
