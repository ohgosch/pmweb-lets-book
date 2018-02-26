let path = require('path')

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [['es2015']]
                }
            },
            {
                test: /\.sass$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    }
}
