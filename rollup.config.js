import typescript from "rollup-plugin-typescript";
import pkg from "./package.json";

export default {
	input: "src/MoreMath.ts",
	output: [
		{ name: "moremath", sourcemap: false, file: pkg.module, format: "es" },
		{
			name: "MoreMath",
			sourcemap: false,
			file: pkg.main,
			format: "umd",
			footer: "module.exports.default = module.exports; // Terrible injection just so it works regardless of how it's required\n"
		}
	],
	plugins: [
		typescript({
			typescript: require("typescript")
		})
	]
};
