const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src', 'index.js')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devServer: {
    port: 3042,
    historyApiFallback: true,
    overlay: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{ loader: 'babel-loader' }]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '../public', 'index.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
