const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    index: './src/app/index.js',
  },
  output: {
    libraryTarget: 'umd',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/'),
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
    },
  },
  devServer: {
    contentBase: './dist/',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?/i,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {},
      },
      {
        test: /\.js?/i,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [
                '@babel/transform-react-jsx',
                { pragma: 'h', pragmaFrag: 'Fragment' },
              ],
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin([
      { from: './src/templates/**', to: '', flatten: true },
      { from: './src/styles/**', to: '', flatten: true },
    ]),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};
