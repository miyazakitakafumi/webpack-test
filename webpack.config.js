const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },

    devServer: {
        port: '3000',
        hot:true,
        open:true,
        contentBase: path.resolve(__dirname,'dist'),
        publicPath: path.resolve(__dirname,'/assets/'),
    },

    module: {
        rules:[
            // {
            //     test: /\.js(x?)$/,
            //     loader:'babel-loader',
            //     exclude: /node_modules/,
            // },
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: './src/index.html'
        // })
    ],

    // resolve: {
    //     extensions: ['.js','.ts','.tsx']
    // }
}