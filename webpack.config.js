const path = require('path');

module.exports = {
  entry: {
    scroll: './scripts/scroll.ts',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: '[name].bundle.js', // This will output scroll.bundle.js and animate.bundle.js
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
};
