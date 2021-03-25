const currentTask = process.env.npm_lifecycle_event;
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    entry: './assets/main.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        inline: true,
        hot: true
    //    host: '0.0.0.0'
    },
    mode: 'development',
    plugins: [ ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: [ "@babel/preset-env" ]
                  }
            }
    }
    ]
}
}


if (currentTask == 'build') {

    config.mode = 'production'
    config.module.rules[0].use[0] = MiniCssExtractPlugin.loader;
    config.plugins.push(new MiniCssExtractPlugin({filename: 'main.css'}))
  
}


module.exports = config;


        // new HTMLWebpackPlugin({
        //     filename: 'index.html',
        //     template: './app/index.html'}),
        // new HTMLWebpackPlugin({
        //     filename: 'news.html',
        //     template: './app/news.html'}),
        // new HTMLWebpackPlugin({
        //     filename: 'photos.html',
        //     template: './app/photos.html'}),
        // new HTMLWebpackPlugin({
        //         filename: 'video.html',
        //         template: './app/video.html'})


// const HTMLWebpackPlugin = require('html-webpack-plugin');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const {WebpackManifestPlugin} = require('webpack-manifest-plugin');



