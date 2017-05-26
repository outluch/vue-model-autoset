var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015'],
        }
      }
    ]
  }
};
