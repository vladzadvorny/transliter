var webpack = require('webpack');
var path = require('path');

var PROD = process.env.NODE_ENV === 'production';

/*
module.exports = {
  entry: './index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: PROD ? 'transliter.min.js' : 'transliter.js',
    library: 'transliter'
  },
  plugins: PROD
    ? [
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        })
      ]
    : []
};
*/

module.exports = {
  entry: {
    transliter: './lib/browser.js',
    'transliter.min': './lib/browser.js'
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    library: 'transliter'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      sourceMap: true,
      compress: {
        warnings: false
      }
    })
  ]
};
