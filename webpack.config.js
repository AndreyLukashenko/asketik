const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './src'),

    entry: {
        app: './index.js',
        vendor: ["react", "react-dom"],
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },

    devtool: 'cheap-module-source-map',

    devServer: {
        port: 3000,
        historyApiFallback: true,
        compress: true,
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react'],
            },
        }],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity,
        }),
    ],
}
