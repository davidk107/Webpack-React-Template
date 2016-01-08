var webpack = require('webpack');  
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

// Optimizing Dependencies
var path = require('path');
var node_modules_dir = path.join(__dirname, 'node_modules');
var react_path = path.join(node_modules_dir, 'react/dist/react.min.js');
var react_dom_path = path.join(node_modules_dir, 'react-dom/dist/react-dom.min.js');

// Entry points
var entryPoints = require("./configs/entry.config.js");

var config = {  
    entry: entryPoints,
    output: {
        path: __dirname + "/app/build",
        filename: '[name]Bundle.js'
    },
    resolve: {
        alias: {
            "react": react_path,
            "react-dom": react_dom_path
        }
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel?presets[]=es2015&presets[]=react'], exclude: /node_modules/ },
            { test: /\.scss$/, loaders: ["style", "css", "sass"] }
        ],
        noParse: [react_path]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new CommonsChunkPlugin("commons.chunk.js")
    ]
};

module.exports = config;