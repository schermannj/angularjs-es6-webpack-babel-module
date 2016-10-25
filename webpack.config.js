'use strict';

var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        "angularjs-app": './src/app.js'
    },

    output: {
        path: path.join(__dirname, '../back-end/dist/'),
        filename: '[name].bundle.js'
    },

    devtool: "eval",

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            }, {
                test: /\.scss$/,
                loader: "style!css!autoprefixer!sass"
            }, {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "ng-annotate?add=true!babel?presets[]=es2015"
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        }),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],

    node: {
        fs: "empty"
    }
};