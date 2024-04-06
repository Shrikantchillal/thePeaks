/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|tsx|ts)$/, 
                exclude: /node_modules/, 
                resolve: {
                    extensions: ['.ts', '.tsx', '.js', '.json'],
                }, 
                use: ['ts-loader']
            },
            {test: /\.(css|scss|sass)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            {test: /\.(jpe?g|gif|png|svg)$/, use: ['file-loader']},
        ]
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}