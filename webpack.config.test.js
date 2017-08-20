const nodeExternals = require( 'webpack-node-externals' )
const config = require( './webpack.config' )
const webpack = require( 'webpack' )
const path = require('path')

var testConfig = Object.assign( {}, config, {
	target: 'web',
	externals: [ nodeExternals() ],
	plugins: [
		new webpack.ProvidePlugin( {
			mount: [ 'enzyme', 'mount' ],
			shallow: [ 'enzyme', 'shallow' ],
			expect: [ 'chai', 'expect' ],
			sinon: ['sinon', 'default'],
		} )
	]
} )

if ( process.env.NODE_ENV === 'coverage' ) {
	testConfig.module.loaders.push({
		test: /\.js$/,
		exclude: /\.test\.js$/,
    include: path.resolve('src'),
    loader: 'istanbul-instrumenter-loader',
		query: {
			esModules: true
		}
	})
}

module.exports = testConfig
