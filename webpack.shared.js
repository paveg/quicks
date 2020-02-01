const path = require('path');

module.exports = {
  entry: {
    index: path.join(__dirname, './webpack/index.tsx')
  },
  output: {
    path: path.resolve(__dirname, 'public/assets'),
  },
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.tsx?$/,
        exclude: [
          /node_modules/
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css', ".json", ".png", ".jpg"],
    modules: [
      path.resolve(__dirname),
      path.join('node_modules')
    ],
  }
}
