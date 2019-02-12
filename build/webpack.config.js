var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/env"]
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: "source-map"
};
