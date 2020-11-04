const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    externals: {
        'react': ['https://unpkg.com/react@17/umd/react.production.min.js', 'React'],
        'react-dom': ['https://unpkg.com/react-dom@17/umd/react-dom.production.min.js', 'ReactDOM']
    },
    externalsType: 'script',
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        hot: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
