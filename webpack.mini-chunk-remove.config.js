const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

const ROOT = "wp-mini-remove";

module.exports = {
  mode: "production",
  context: path.join(__dirname, `./${ROOT}`),
  // devtool: "source-map",
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
    outputModule: true,
  },

  entry: {
    main: "./src/main.js",
    style: "./src/style.css",
  },

  plugins: [
    new RemoveEmptyScriptsPlugin({
      options: {
        verbose: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].chunk.css",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(css)/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
