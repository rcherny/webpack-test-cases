const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ROOT = "wp-mini-css";

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

  entry: {
    main: "./src/main.js",
    style: "./src/style.css",
  },

  plugins: [new MiniCssExtractPlugin()],

  module: {
    rules: [
      {
        test: /\.(css)/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
