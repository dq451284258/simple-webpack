const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Webpack = require('webpack')

module.exports = {
  mode: "development",
  entry: {
    main: "./src/main.js",
    snkrsPass: './src/views/snkrsPass/script.js'
  },
  output: {
    filename: "static/js/[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["sass-loader"]
      },
      {
        test: "/\.css$/",
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // 这里可以指定一个 publicPath
              // 默认使用 webpackOptions.output中的publicPath
              publicPath: '../'
            },
          },
          'css-loader',
          // { loader: "style-loader" },
          // { loader: "css-loader" }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      title: "simple",
      template: "./public/index.html",
      excludeChunks: ['snkrsPass']
    }),
    new HtmlWebpackPlugin({
      title: "snkrsPass",
      filename: 'snkrsPass.html',
      template: "./src/views/snkrsPass/index.html",
      chunks: ['snkrsPass']
    }),
    new CleanWebpackPlugin(),
    new Webpack.NamedModulesPlugin(),
    new Webpack.HotModuleReplacementPlugin()
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
    port: 8999,
    proxy: {
      '/api': {
        target: "",
        changeOrigin: true,
        pathRewrite: {
          '^/api/': ''
        }
      }
    }
  }
}