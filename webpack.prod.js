const path = require('path');
const merge = require('webpack-merge')
const common = require('./webpack.shared.js')
const outputPath = path.resolve(__dirname, 'assets')

module.exports = merge(common, {
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
})
