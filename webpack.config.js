var path = require("path");
var webpack = require('webpack');

module.exports = {
	entry: './js/main.js',

	output: {
		filename: 'bundle.js'
	},

	devtool: 'source-map',

	module: {
		loaders: [
			{
				test: /\.scss$/,
				loaders: ["style", "css?sourceMap", "sass?sourceMap"]
			},
			{
				test: /\.css$/,
				loaders: ["style", "css"]
			},
			{
				test: /\.png$/,
				loader: "url-loader?limit=100000"
			},
			{
				test: /\.jpg$/,
				loader: "file-loader"
			},
			{
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'file-loader'
			}
		]
	},

	resolve: {
		extensions: ['', '.js', '.jsx', '.css'],
		modulesDirectories: [
			'node_modules'
		]
	},

    /*
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery'
		})
	],
    */

    /*
	externals: {
		jquery: 'window.jQuery',
		'_': 'window._'
	},
   */

	watch: true
};


