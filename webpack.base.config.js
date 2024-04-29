const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const {copyPlugin} = require('./helpers/copyPlugin');

const ROOT = "wp-base";

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
    // module: true,
    // chunkFormat: 'module'    
  },

  // experiments: {
  //   outputModule: true
  // },

  entry: {
    main: "./src/main.js",
  },

  plugins: [
    copyPlugin(CopyPlugin, ROOT)
  ],

  module: {},
};
