const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.shared.js')
const outputPath = path.resolve(__dirname, 'public/assets')

module.exports = merge(common, {
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 3001,
    compress: true,
    disableHostCheck: true,
    contentBase: outputPath,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
})
