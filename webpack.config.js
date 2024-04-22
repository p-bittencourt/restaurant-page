const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/imgs/[name][ext][query]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "Restaurant Page",
      favicon: "./src/assets/imgs/food-and-restaurant.png",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              outputPath: "assets/fonts/",
            },
          },
        ],
      },
    ],
  },
};
