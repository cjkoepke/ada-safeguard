const path = require('path');

module.exports = {
    devtool: "inline-source-map",

    entry: {
        content: './src/app/content.ts',
        popup: './src/ui/popup.tsx',
    },

    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: '[name].js'
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },

    watchOptions: {
        ignored: /node_modules/,
    }
};
