 
// 配置karma.conf.js
// webpack的配置直接使用webpack暴露的配置
let webpackConfig = require('@vue/cli-service/webpack.config.js')

module.exports = function(config) {
  config.set({
 
    basePath: '',
 
    frameworks: ['mocha'],
 
    files: [
      'test/*.test.js'
    ],
 
    exclude: [
    ],
    
    // 测试文件添加中间件处理
    preprocessors: {
      'test/*.test.js': ['webpack']
    },
 
    webpack: webpackConfig,
 
    reporters: ['progress'],
 
    port: 9876,
 
    colors: true,
 
    logLevel: config.LOG_INFO,
 
    autoWatch: true,
 
    // browsers: ['Chrome'],
		browsers: ['ChromeHeadless'],
 
    singleRun: false,
 
    concurrency: Infinity
  })
}