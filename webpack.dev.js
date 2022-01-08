const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    output: {
        libraryTarget: 'var',
        library: 'Client',
    },
    stats: 'verbose',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            // {
            //     test: /\.scss$/,
            //     use: ['style-loader', 'css-loader', 'sass-loader']
            // },
            {
                test: /\.(png|svg|jpeg|gif)$/i,
                type: 'asset/resource'
                // exclude: ['/node_modules/', require.resolve('./src/client/index.js')], //Refer to SO page that discusses file-loader/HTML WP plugin conflicts
                // use: {
                //     loader: 'url-loader',
                //     options: {
                //         name: '[name].[ext]',
                //         outputPath: 'imgs',
                //         publicPath: 'imgs'
                //     }
                // }
            },
            // {
            //     test: /\.(png|jpeg)$/,
            //     loader: 'url-loader'
            //  },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            }
        ]
    },
    plugins: [
        new PrettierPlugin(),
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
    ]
}