const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = (env) => {
  const isDevelopment = env.development;
  const isProduction = env.production;

  return {
    entry: {
      index: "./src/index.tsx",
      background: "./src/background/background.ts",
      contentScript: "./src/content/contentScript.ts"
    },
    mode: isDevelopment ? 'development' : 'production',  // Set the mode dynamically
    devtool: isDevelopment ? "cheap-module-source-map" : false,  // Devtools for development only
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: ["babel-loader", "ts-loader"],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            "style-loader", 
            "css-loader", 
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [tailwindcss, autoprefixer],
                },
              },
            }
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: path.resolve("manifest.json"), to: "" },
          { from: path.resolve("src/assets/icon.png"), to: "" },
        ],
      }),
      new HtmlWebpackPlugin({
        title: "ReactJs BoilerPlate",
        filename: "index.html",
        chunks: ['index']
      })
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
    },
  };
};
