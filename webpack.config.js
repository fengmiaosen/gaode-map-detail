const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: '/^node_modules$/',
            loader: 'babel-loader'
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }, {
            test: /\.css$/,
            exclude: /^node_modules$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.(png|jpg|gif|svg|ttf|eot|woff)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]'
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            vue: 'vue/dist/vue.js' //webpack打包时，需要设置别名
        }
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin()
    ]
};
