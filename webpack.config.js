const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const vueConfig = require('./build/vue-loader.config.js');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/app.js'),
        // 将vue等基础依赖库抽取出来
        vendor: ['vue', 'axios']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js?[chunkhash:8]',//给require.ensure用
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            util: path.resolve(__dirname, './src/util'),
            components: path.resolve(__dirname, './src/components'),
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
                options: {

                }
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
        })
    ],
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#cheap-module-eval-source-map'
};

// 本地服务器调试编译配置
if (process.env.NODE_ENV === 'local') {
    module.exports.output = Object.assign({}, module.exports.output, {
        path: path.resolve(__dirname, './local'),
        filename: '[name].js?[chunkhash:8]',
        publicPath: './',
    });
    module.exports.devtool = '#source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"local"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.template.html'
        })
    ]);
}

// 生产环境配置
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

    module.exports.output = Object.assign({}, module.exports.output, {
        filename: '[name].js?[chunkhash:8]',
        publicPath: '/gaode-map-detail/dist/',
    });

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
        new HtmlWebpackPlugin({
            filename: '../index_build.html',
            template: 'src/index.template.html'
        })

    ]);
}
