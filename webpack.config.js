const path = require('path');

module.exports = {
    entry: './src/index.js',
    externals: {
        'react': ['https://unpkg.com/react@17/umd/react.production.min.js', 'React'],
        'react-dom': ['https://unpkg.com/react-dom@17/umd/react-dom.production.min.js', 'ReactDOM']
    },
    externalsType: 'script',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 8080
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
};
