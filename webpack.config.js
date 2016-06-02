var webpack = require('webpack');  
var path = require('path');

module.exports = {  
    entry: {
        main: "./app/src/entry.js"
    },
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    resolve: {
        root: [
            path.resolve('./app/src/js/components')
        ],
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react'], exclude: /node_modules/ },
            { test: /\.scss$/, loaders: ["style", "css", "sass"] }
        ]
    },
    sassLoader: {
        includePaths: [path.resolve('./app/src/stylesheets')]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]
};