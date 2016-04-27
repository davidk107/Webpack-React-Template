var webpack = require('webpack');  
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var path = require('path');

// Entry points
var entryPoints = require("./configs/entry.config.js");
var devServerEntry = "webpack/hot/dev-server";
for (var key in entryPoints) {
    newEntry = [entryPoints[key], devServerEntry];
    entryPoints[key] = newEntry;
}

module.exports = {  
    entry: entryPoints,
    output: {
        path: __dirname + "/build",
        filename: '[name]Bundle.js'
    },
    resolve: {
        root: [
            path.resolve('./app/src')
        ],
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react'], exclude: /node_modules/ },
            { test: /\.scss$/, loaders: ["style", "css", "sass"] }
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new CommonsChunkPlugin("commons.chunk.js")
    ]
};