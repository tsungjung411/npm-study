'use strict';
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
	entry: './src/index.ts',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
    module: {
        rules: [
		  {
			test: /\.(png|jpe?g|gif)$/i,
			use: [
			  {
			    loader: 'file-loader',
			  },
			],
		  },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    }
};
