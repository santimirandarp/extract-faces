const path = require("path");

module.exports = {
  mode: "development",
  entry: { main: "./main.js" },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
};
