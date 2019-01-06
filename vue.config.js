// vue.config.js
module.exports = {
    runtimeCompiler: true,
    pages: {
      // 目录页
      index: {
        entry: './src/main.js',
        template: './public/index.html',
        filename: 'index.html'
      }
      
    },
    baseUrl:"./",
    devServer: {
      port:1024
    },
    chainWebpack: (config) => {
    
        
    },
    configureWebpack: {
      // externals:{
      //   "vue":"Vue",
      //   "element-ui":"ElementUI",
       
        
      // },
      output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].js',
      },
      plugins: [
        // new UglifyJSPlugin(),
        
      ]
    },
    pluginOptions: {
     
    }
  }
  