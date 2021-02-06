const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  // entry: {
  //   'hello-world': './src/hello-world.js',
  //   kiwi: './src/kiwi.js',
  // },
  output: {
    filename: 'bundle.js',
    // filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    index: 'index.html',
    // index: 'hello-world.html',
    port: 3000,
    writeToDisk: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ['handlebars-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/page-template.hbs',
      title: 'Hello world',
      description: 'Hello world',
    }),
    // new HtmlWebpackPlugin({
    //   filename: 'hello-world.html',
    //   chunks: ['hello-world'],
    //   template: './src/page-template.hbs',
    //   title: 'Hello world',
    //   description: 'Hello world',
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'kiwi.html',
    //   chunks: ['kiwi'],
    //   template: './src/page-template.hbs',
    //   title: 'Kiwi',
    //   description: 'Kiwi image',
    // }),
  ],
}
