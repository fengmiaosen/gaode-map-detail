const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const vueConfig = require('./build/vue-loader.config.js');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/app.js'),
        // 将vue核心库抽取出来
        vendor: ['vue', 'axios']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            vue: 'vue/dist/vue.js' //webpack打包时，需要设置别名
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: '/^node_modules$/',
            loader: 'babel-loader'
        }, {
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'postcss-loader',
                options: {}
            }, {
                loader: 'sass-loader'
            }]
        }, {
            test: /\.css$/,
            exclude: /^node_modules$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'postcss-loader',
                options: {}
            }]
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: vueConfig
        }, {
            test: /\.(png|jpg|gif|svg|ttf|eot|woff)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]'
            }
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor' // Specify the common bundle's name.
        }),
        // new HtmlWebpackPlugin({
        //     filename: 'dist/index.html',
        //     template: 'src/index.template.html'
        // })
    ],
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
    // Use ExtractTextPlugin to extract CSS into a single file
    // so it's applied on initial render.
    // vueConfig is already included in the config via LoaderOptionsPlugin
    // here we overwrite the loader config for <style lang="stylus">
    // so they are extracted.
    vueConfig.loaders = {
        // css: ExtractTextPlugin.extract({
        //     loader: 'css-loader'
        // })
    };

    module.exports.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),

        // new ExtractTextPlugin("style.[hash].css")
    ]);
}
