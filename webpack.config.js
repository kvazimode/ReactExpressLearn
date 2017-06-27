module.exports = options => {
    return {
        entry: './app.js',
        output: {
            filename: 'build/bundle.js',
        },
        module: {
            rules: [
                {
                    test: /.js$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                cacheDirectory: true,
                            },
                        },
                    ],
                },
            ],
        },
    }
}