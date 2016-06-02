var webpack = require('webpack');  
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


// Environment Variables Plugin
var envVarPlugin = new webpack.DefinePlugin({
  'process.env':{
    'NODE_ENV': JSON.stringify('production')
  }
});

module.exports = {  
    entry: {
        main: "./app/src/entry.js"
    },
    output: {
        path: __dirname + "/app/build",
        filename: 'bundle.js'
    },
    resolve: {
        root: [
            path.resolve('./app/src/js/components')
        ],
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel?presets[]=es2015&presets[]=react'], exclude: /node_modules/ },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass!postcss!')}
        ],
    },
    postcss: function() {
      return [autoprefixer];
    },
    sassLoader: {
        includePaths: [path.resolve('./app/src/stylesheets')]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("main.css"),
        envVarPlugin
    ]
};

