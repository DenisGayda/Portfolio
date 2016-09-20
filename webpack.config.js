var path = require('path');

module.exports = {
	entry: './app/js/index.js',
	output: {
		path: path.resolve('./public/js/'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
};