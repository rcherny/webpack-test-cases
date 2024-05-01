const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const {copyPlugin} = require('./helpers/copyPlugin');
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

const ROOT = "wp-exp-css-on-demand";

module.exports = {
  mode: "production",
  context: path.join(__dirname, `./${ROOT}`),

  output: {
    path: path.join(__dirname, `${ROOT}/dist/`),
    publicPath: `/${ROOT}/dist/`,
    clean: {
      keep: /log/,
    },
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
    module: true, // breaks imports
    chunkFormat: "module" // breaks imports
  },

  experiments: {
    outputModule: true, // breaks imports
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
  ],

  module: {},
};
