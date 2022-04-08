const path = require('path')

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const plugins = [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
        template: "./src/index.html"
    }),
]
let mode = "development"
if(process.env.NODE_ENV === "production"){
    mode = "production"
}else{
    plugins.push(new ReactRefreshWebpackPlugin())
}


module.exports = {
    mode: mode,
    devtool: "source-map",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: "images/[hash][ext][query]"
    },
    module:{
        rules: [
            {
              test: /\.(s[ac|c])ss$/i,
              use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset',
            },
        ]
    },
    plugins: plugins,
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        static: "./dist",
       // hot: true
    }
}

/*module.exports = function (env, test){
    console.log(env, 'inside function', test)
    return {
        mode: mode,
        devtool: "source-map",
        module:{
            rules: [
                {
                    test: /\.(s[ac|c])ss$/i,
                    use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin()
        ],
        devServer: {
            static: "./dist",
        }
    }
}*/

