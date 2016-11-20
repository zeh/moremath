# MoreMath

*MoreMath* is a library that provides useful Math functions -- functions that either should have been part of the core `Math` package from the start, or that are otherwise commonly needed.

## Install

```shell
npm install moremath
```

MoreMath is written in TypeScript. It can be used both in JavaScript and TypeScript, but in TypeScript projects you get the benefit of code completion by default.

## Usage

MoreMath can be used as a separate package (in which it acts like a *Static Class*) or by importing the specific functions one need.

Import the whole package:

```javascript
// Import everything (JavaScript ES5)
var MoreMath = require("./../../dist/MoreMath").default

// Import everything (JavaScript ES6 and TypeScript)
import MoreMath from "./../../dist/MoreMath";
```

Then use any of its functions:

```javascript
let value = MoreMath.clamp(11, 0, 10); // 10
```

Another way to use it is just importing the functions you want then using them directly.

Import a function:

```javascript
// Import clamp() (JavaScript ES5)
var clamp = require("./../../dist/MoreMath").default.clamp;

// Import clamp() (JavaScript ES6 and TypeScript)
import { clamp } from "./../../dist/MoreMath";
```

Then use it:

```javascript
let value = clamp(11, 0, 10); // 10
```

The advantage of importing only specific functions is that the resulting code is shorter and easier to read, and JavaScript packagers that perform *tree-shaking* can get rid of functions that are not used from inside the MoreMath library. In the above case, for example, `clamp` would be the only exported function included in your final project.


## Full reference


### `map(value:number, oldMin:number, oldMax:number, newMin:number = 0, newMax:number = 1, shouldClamp:Boolean = false):number`

Maps a value from a range, determined by old minimum and maximum values, to a new range, determined by new minimum and maximum values. These minimum and maximum values are referential; the new value is not clamped by them.

Parameters:

* `value`: The value to be re-mapped.
* `oldMin`: The previous minimum value.
* `oldMax`: The previous maximum value.
* `newMin`: The new minimum value.
* `newMax`: The new maximum value.

Returns:

* The new value, mapped to the new range.


### `clamp(value:number, min:number = 0, max:number = 1):number`

Clamps a number to a range, by restricting it to a minimum and maximum values: if the passed value is lower than the minimum value, it's replaced by the minimum; if it's higher than the maximum value, it's replaced by the maximum; if neither, it's unchanged.

Parameters:

* `value`: The value to be clamped.
* `min`: Minimum value allowed.
* `max`: Maximum value allowed.

Returns:

* The newly clamped value.


### `clampAuto(value:number, clamp1:number = 0, clamp2:number = 1):number`

Clamps a number to a range, by restricting it to a range of values: if the passed value is lower than the minimum value, it's replaced by the minimum; if it's higher than the maximum value, it's replaced by the maximum; if neither, it's unchanged.

This function is similar to `clamp()`, but it switches the range values if necessary, without assuming the first value is the  lower value.

Parameters:

* `value`: The value to be clamped.
* `clamp1`: One end of the allowed range.
* `clamp2`: Other end of the allowed range.

Returns:

* The newly clamped value.


### `getHighestPowerOfTwo(value:number):number`

Returns a power of two value that is higher than the passed value.

Parameters:

* `value`: The minimum value desired.

Returns:

* A power of two value that is equal to or higher than the input value.


### `getUniqueNumber():number`

Returns a unique number for this session. This is simply a global integer sequence, starting at 1.

Returns:

* A unique integer for the session.


### `isPowerOfTwo(value:number):Boolean`

Returns whether a number is a power of two (2, 4, 8, 16, etc).

Parameters:

* `value`: A number to be tested.

Returns:

* Whether the input number is a power of two.


### `rangeMod(value:number, min:number, pseudoMax:number):number`

Restricts a value to a range, by restricting it to a minimum and maximum values but folding the value to the range instead of simply clamping to the minimum and maximum. It works like a more powerful Modulo function because it allows arbitrary ranges.

Parameters:

* `value`: The value to be clamped.
* `min`: Minimum value allowed.
* `max`: Pseudo-maximum value allowed. This value is never reached; the minimum would be used instead.

Returns:

* The new value, mapped to the range.

Examples:

```javascript
console.log(rangeMod(14, 0, 10));
// Result: 4
console.log(rangeMod(360, 0, 360));
// Result: 0
console.log(rangeMod(360, -180, 180));
// Result: 0
console.log(rangeMod(21, 0, 10));
// Result: 1
console.log(rangeMod(-98, 0, 100));
// Result: 2
```

## License

[MIT](LICENSE.md).