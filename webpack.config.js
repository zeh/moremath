const webpack = require('webpack')
const path = require('path')

const APP_PATH = path.resolve(__dirname, 'src/MoreMath.ts')
const BUILD_PATH = path.resolve(__dirname, 'dist')
const PRODUCTION = process.env.NODE_ENV === 'production';

const basePlugins = [
];

const devPlugins = [
	new webpack.NoErrorsPlugin(),
];

const prodPlugins = [
	new webpack.optimize.OccurenceOrderPlugin(),
	new webpack.optimize.DedupePlugin(),
	new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false,
			sequences: false,
			dead_code: true,
			conditionals: true,
			booleans: true,
			unused: true,
			if_return: false,
			join_vars: false,
			evaluate: true,
			properties: true,
		},
		beautify: true,
		comments: false,
		sourceMap: false,
	}),
];

module.exports = {
	entry: APP_PATH,
	output: {
		path: BUILD_PATH,
		library: 'MoreMath',
		libraryTarget: 'umd',
		filename: 'MoreMath.js',
		umdNamedDefine: true
	},

	devtool: 'source-map',

	resolve: {
		root: path.resolve('./src'),
		extensions: [ '', '.js', '.ts', '.jsx', '.tsx' ]
	},

	module: {
		preLoaders: [
			{ test: /\.tsx?$/, loader: "tslint" }
		],
		loaders: [
			{ test: /\.tsx?$/, loader: 'babel!ts-loader' }
		]
	},

	tslint: {
		emitErrors: true,
		failOnHint: true
	},

	plugins: basePlugins
		.concat(PRODUCTION ? prodPlugins : [])
		.concat(!PRODUCTION ? devPlugins : [])
}
