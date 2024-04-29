const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const {copyPlugin} = require('./helpers/copyPlugin');
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

const ROOT = "wp-exp-css-loader";

module.exports = {
  mode: "production",
  context: path.join(__dirname, `./${ROOT}`),

  output: {
    path: path.join(__dirname, `${ROOT}/dist/`),
    publicPath: `/${ROOT}/dist/`,
    clean: {
      keep: /log|html/,
    },
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
  },

  experiments: {
    css: true,
  },

  entry: {
    main: "./src/main.js",
    style: "./src/style.css",
  },

  plugins: [
    copyPlugin(CopyPlugin, ROOT),
    new RemoveEmptyScriptsPlugin({
      options: {
        verbose: true,
      },
    }),
    new MiniCssExtractPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.(css)/,
        type: 'css/auto',
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
};
