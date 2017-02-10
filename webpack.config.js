var webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'babel-polyfill',
    'webpack-hot-middleware/client',
    './index.jsx'
  ],
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    path: '/',
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?/, loader: 'babel', exclude: /node_modules/
      },
      {
        test: /(\.svg|\.ttf|\.woff|\.eot|\.jpeg|\.png)/, loader: "file-loader", exclude: /node_modules/
      }
    ]
  }
};
