
module.exports = {
    outputDir: '../main/resources/static',
    indexPath: '../templates/index.html',
    devServer: {
        proxy: {
            '/data': {
                target: 'http://localhost:8080',
                changeOrigin: true,
//                pathRewrite: {
//                    '^/data': `''
//                }
            }
        }
    }
}