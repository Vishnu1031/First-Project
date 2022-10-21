const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  // mode:'production',
  mode:'development',
  entry: {
    main: path.resolve(__dirname, '/src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      
    ],
  },
  devtool: "eval-source-map",
  // devtool: 'inline-source-map',
  // devtool: 'eval-cheap-module-source-map',
  // devtool: 'inline-cheap-module-source-map',

  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
   
  ],
};