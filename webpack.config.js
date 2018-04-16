const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    plugins: [
        new CleanWebpackPlugin(['dist']), // clears dist folder before each build
        new HtmlWebpackPlugin({ // creates dist html file from template in src & minifies it
            template: './src/index.html',
            minify: {
                collapseWhitespace: true
            }
        })
    ],
    output: {
        filename: './app.bundle.js', // .js output file name in dist folder
        path: path.resolve(__dirname, 'dist') // names folder dist for output
    }
};