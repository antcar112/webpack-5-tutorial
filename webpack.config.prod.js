const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  // entry: {
  //   'hello-world': './src/hello-world.js',
  //   kiwi: './src/kiwi.js',
  // },
  output: {
    filename: 'bundle.[contenthash].js',
    // filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/static/',
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 3000,
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
    new MiniCssExtractPlugin({ filename: 'styles.[contenthash].css' }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/page-template.hbs',
      title: 'Hello world',
      description: 'Hello world',
      minify: true,
    }),
    // new HtmlWebpackPlugin({
    //   filename: 'hello-world.html',
    //   chunks: ['hello-world'],
    //   template: './src/page-template.hbs',
    //   title: 'Hello world',
    //   description: 'Hello world',
    //   minify: true,
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'kiwi.html',
    //   chunks: ['kiwi'],
    //   template: './src/page-template.hbs',
    //   title: 'Kiwi',
    //   description: 'Kiwi image',
    //   minify: true,
    // }),
  ],
}
