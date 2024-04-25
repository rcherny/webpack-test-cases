const path = require("path");

module.exports = {
  copyPlugin(CopyPlugin, ROOT) {
    return new CopyPlugin({
      patterns: [
        {
          from: `*.html`,
          context: path.resolve(ROOT, 'src')
        },
      ],
    });
  },
};