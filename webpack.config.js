const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Optional: Cleans 'dist' before each build
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Loads CSS into JS
      },
      {
        test: /\.scss$/, // For SCSS (optional)
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'template.html', // Generates 'dist/template.html'
      template: 'src/template.html', // Uses 'src/template.html' as a template
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 8080,
    open: ['/template.html'],
    hot: true,
  },
};
