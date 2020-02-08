const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  entry: {
    index: path.join(__dirname, './webpack/index.tsx')
  },
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.tsx?$/,
        exclude: [
          /node_modules/
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CleanWebpackPlugin,
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css', ".json", ".png", ".jpg"],
    modules: [
      path.resolve(__dirname),
      path.join('node_modules')
    ],
  }
}
