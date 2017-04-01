/* File to set up and configure webpack */
/* var webpack = require("webpack"); */

/* Native node package allows you to resolve the path of application */
var path = require("path");

/* Directory from which the app is served */
/* Copy everything to "dist" directory */
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders: [
            {
                test: /\.js?/, /* Tells the loader (Babel) to look at all ES6 javascript files */
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    }
};

module.exports = config;