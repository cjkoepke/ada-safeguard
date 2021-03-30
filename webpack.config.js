const path = require('path');

module.exports = {
    devtool: "inline-source-map",

    entry: {
        background: './src/app/background.ts',
        content: './src/app/content.ts',
        popup: './src/ui/popup.tsx',
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css"]
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
