import CleanWebpackPlugin from 'clean-webpack-plugin';
import config from './webpack.config.babel.js';
import merge from 'webpack-merge';
import { resolve } from 'path';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import webpack from 'webpack';

export default merge(config, {
	plugins: [
		new CleanWebpackPlugin(['src'], { root: resolve(__dirname, '../', 'app') }),
		new UglifyJSPlugin(),
		new webpack.HashedModuleIdsPlugin(),
	],
});