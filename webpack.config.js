const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

// console.log('NODE_ENV', process.env.NODE_ENV)

const extractSass = new ExtractTextWebpackPlugin({
  filename: '[name].css',
  disable: process.env.NODE_ENV === 'dev',
})

module.exports = {
  entry: {
    dist: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [__dirname, 'node_modules'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'boilerplate',
      template: 'src/index.html',
      inject: true,
    }),
    extractSass,
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true, // gzip
    port: 7000,
  }
}