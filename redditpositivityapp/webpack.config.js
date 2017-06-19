var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
	context: __dirname,
	entry: ['./assets/js/index.js', './assets/ThemeFile/themeStyle.css'],
	output: {
		path: path.resolve('./assets/bundles/'),
		filename: '[name]-[hash].js',
	},

	plugins: [
		new BundleTracker({filename: './webpack-stats.json'}),
		new webpack.ProvidePlugin({
			$:'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		})
	],

	module: {
		loaders: [
			{ 
			  test: /\.jsx?$/, 
			  exclude: /node_modules/,
			  loader: 'babel-loader',
			  query: {
				presets: ['react']
			  }
			},

			{
		       test: /\.css$/,
		       loaders: [
		         'style-loader',
		         'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss?sourceMap&sourceComments',
		       ],
		    },
		]
	},

	postcss: () => {
	    return [
	      /* eslint-disable global-require */
	      require('postcss-cssnext')({
	        features: {
	          customProperties: {
	            variables: reactToolboxVariables,
	          },
	        },
	      }),
	      require('postcss-modules-values'),
	      /* eslint-enable global-require */
	    ];
	},

	resolve: {
		extensions: ['', '.jsx', '.js', '.json', '.scss', '.css'],
	    moduleDirectories: [
	      'node_modules',
	      path.resolve(__dirname, './node_modules'),
		],

		alias: {
		    // @see https://github.com/styled-components/styled-components/issues/115
		    'styled-components$': 'styled-components/lib/index.js',
		},
	}
}