const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: "babel-loader"
            // },
            // {
            //     test: /\.scss$/,
            //     use: [
            //         "style-loader",
            //         "scss-loader",
            //         "sass-loader"
            //     ]
            // },
            {
                test: /\.pug$/,
                use: ['pug-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/pug/index.pug',
            inject: false
        })
    ],
    devServer: {
        port: 3000
    },
};
module.exports = config;
