const { resolve } = require('path');
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'styles': resolve('src/assets/styles'),
        'js': resolve('./src/assets/js'),
        'components': resolve('./src/components'),
        'data': resolve('./src/assets/data'),
        'utils': resolve('./src/utils'),
        'models': resolve('./src/models'),
      }
    },
  }
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: "x"
  //     }
  //   }
  // }
}
