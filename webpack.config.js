const path = require("path");
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        app: './index.js',
    },
    context: path.resolve(__dirname, "static_src"),
    output: {
        path: path.resolve(__dirname, "static", "build"),
        filename: 'app.js',
    },
    devServer: {
        contentBase: path.join(__dirname, "static", "build"),
        port: 8080,
        open: true,
    }
};