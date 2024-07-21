const path = require('path');

module.exports = {
  entry: {
    scroll: './scripts/scroll.ts',
    animate: './scripts/animate.ts',
    confettiEmail: './scripts/confettiEmail.ts',
    autoType: './scripts/autoType.ts',
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
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
};
