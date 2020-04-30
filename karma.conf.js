// 对文件添加webpack的配置, 对配置文件使用babel进行处理
 module.exports = function(config) {
 	config.set({

 		basePath: '',

 		frameworks: ['mocha', 'chai'],

 		files: [
 			'test/*.test.js'
 		],

 		exclude: [
 			'node_modules'
 		],

 		preprocessors: {
 			'test/*.spec.js': ['webpack']
 		},

 		webpack: {
 			// webpack4中新增的mode模式
 			mode: "development",

 			module: {
 				rules: [{
 					test: /\.js?$/,
 					loader: "babel-loader",
 					options: {
 						presets: ["env"]
 					},
 				}, ]
 			}
 		},

 		reporters: ['progress'],

 		port: 9876,

 		colors: true,

 		logLevel: config.LOG_INFO,

 		autoWatch: true,

 		browsers: ['Chrome'],

 		singleRun: false,

 		concurrency: Infinity
 	})
 }
