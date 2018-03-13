const webpack = require('webpack')
const dev = require('./webpack.dev.js')
const merge = require('webpack-merge')

module.exports = merge(dev, {
  entry: [
    'webpack-hot-middleware/client',
  ],
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});