var Webpack = require('Webpack');
var path = require('path');

var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'app', 'main.js');

var config = {
	devtool: 'eval',
	entry: [
		'Webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		mainPath
	],
	output: {
		path: buildPath,
		filename: 'bundle.js',
		publicPath: '/build/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				},
				exclude: [nodeModulesPath]
			}
		]
	},
	plugins: [new Webpack.HotModuleReplacementPlugin()]
};

module.exports = config;