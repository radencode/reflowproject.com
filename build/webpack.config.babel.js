import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';
import WebpackProgressBarPlugin from 'progress-bar-webpack-plugin';

export default {
	entry: {
		app: ['babel-polyfill', resolve(__dirname, '../', 'src', 'app.jsx')],
		vendor: ['react'],
	},
	output: {
		filename: 'src/js/[name].bundle.[hash].js',
		path: resolve(__dirname, '../', 'app'),
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'env', 'stage-2'],
					plugins: ['react-html-attrs', 'transform-decorators-legacy'],
				},
			},
			{
				test: /\.css?$/,
				loader: 'style-loader!css-loader',
			},
			{
				test: /\.sass?$/,
				loader: 'style-loader!css-loader!sass-loader',
			},
			{
				test: /\.(jpe?g|png|gif)$/,
				loader: 'url-loader',
				options: {
					name: './src/images/[name]-[hash].[ext]',
					limit: 100000,
				},
			},
			{
				test: /\.(woff|otf|woff2|ttf|eot|svg)$/,
				loader: 'url-loader',
				options: {
					name: './src/fonts/[name]-[hash].[ext]',
					limit: 100000,
				},
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.sass', '.jpg', '.otf'],
		modules: [resolve(__dirname, '../', 'src'), resolve(__dirname, '../', 'node_modules')],
	},
	plugins: [
		new WebpackProgressBarPlugin(),
		new HtmlWebpackPlugin({
			template: resolve(__dirname, '../', 'public', 'index.html'),
			filename: 'index.html',
		}),
	],
};
