const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

const ROOT = "wp-mini-remove-demand";
// this includes lazy loaded, on demand chunks
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
    outputModule: true, // not doing much
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
