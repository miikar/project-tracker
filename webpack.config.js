const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'app');

const config = {
	entry: [
		APP_DIR + '/index.js'
	],
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
}

module.exports = config;