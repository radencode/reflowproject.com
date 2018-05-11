import merge from 'webpack-merge';
import config from './webpack.config.babel.js';

export default merge(config, {
	devServer: {
		contentBase: './dev-server',
		compress: true,
		inline: true,
		port: 3000,
		stats: {
			chunkModules: false,
		},
		historyApiFallback: true,
	},
});