
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname,'./src/main.js'),

    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js'
    },

    devServer: {
        open: true,
        port: 3000
    },

    module:{
        rules:[
            {test: /\.css$/, use: ['style-loader','css-loader']},
            {test: /\.(sass|scss)$/, use: ['style-loader','css-loader','sass-loader']},
            {test: /\.(jpg|jpeg|gif|png)$/, use: 'url-loader'},
            {test: /\.(eot|svg|ttf|woff|woff2|otf)/, use : 'file-loader'},
            {test: /\.js$/, use: 'babel-loader', exclude:/node_modules|lib/},
            {test: /\.vue$/, use: 'vue-loader'}
        ]
    },
    devtool: 'eval-source-map',
    plugins:[
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html')
        })
    ]
}