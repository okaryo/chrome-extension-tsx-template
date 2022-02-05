const path = require("path");

module.exports = {
  entry: {
    index: path.join(__dirname, "../src/index.tsx"),
  },
  output: {
    path: path.join(__dirname, "../dist/js"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?/,
        use: "ts-loader"
      },
      {
        test: /\.css/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};
