const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let mode = "development"
if(process.env.NODE_ENV === "production"){
    mode = "production"
}
console.log(mode, 'meeeeeeeeee')

module.exports = {
    mode: mode,
    devtool: "source-map",
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
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        static: "./dist",
        hot: true
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

