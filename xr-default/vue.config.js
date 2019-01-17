//vue.config.js
/* 仅为常用配置 */
module.exports = {
    /* 1. Type: string    Default: '/' 部署应用包时的基本 URL */
    /* 假设应用原被部署在域名的根路径上，例如 https://www.my-app.com/，现要改为部署在子路径上，例如 https://www.my-app.com/my-app/，就需要用该选项指定这个子路径，例如 '/my-app/' */
    /* 如果开发、生产环境下路径不同，可使用条件式的值改变路径 */
    /* 
        publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/' 
    */
    // publicPath: '/'

    /* 2. Type: string     Default: 'dist' 生产环境构建文件的目录 */
    /* 当运行 vue-cli-service build（npm run build）时生成的生产环境构建文件的目录（注意目标目录在构建前会被清除） */
    // outputDir: 'dist'

    /* 3. Type: string     Default: '' */
    /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 (vue-cli 2.0的时候是static) */
    // assetsDir: ''

    /* 4. Type: string     Default: 'index.html' */
    /* build 后指定生成 index.html 的输出路径(相对于outputDir)，也可以是一个绝对路径；之前是 '../dist/index.html' */
    // indexPath: 'index.html'

    /* 5. Type: boolean    Default: true */
    /* build 后生成的静态资源文件名会包含 hash 以便更好的控制缓存（要求 index 的 HTML 是被 Vue CLI 自动生成的） */
    // filenameHashing: true

    /* 6. Type: Object     Default: undefined    */
    /* 在 multi-page 模式下构建应用，每个“page”应该有一个对应的 JavaScript 入口文件 */
    /* 其值是一个对象，对象的 key 是入口的名字，value 是： */
    /*   1）一个指定了 entry, template, filename, title 和 chunks 的对象 (除了 entry 之外都是可选的)； */
    /*   2）或一个指定其 entry 的字符串 */
    /* pages: {
    
        } */
    /* 详情可见官网 https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE */

    /* 7. Type: boolean | 'error'      Default: true */
    /* 开发环境下通过 eslint-loader 在每次保存时 lint 检查代码 */
    /* 在 @vue/cli-plugin-eslint 被安装之后生效，默认情况下，警告仅仅会被输出到命令行，不会使得编译失败 */
    /* 如果想在生产构建时禁用，可以用如下配置： */
    /* lintOnSave: process.env.NODE_ENV !== 'production' */
    // lintOnSave: true

    /* 8. Type: boolean     Default: true */
    /* 生产环境的 source map，可以将其设置为 false 以加速生产环境构建 */
    // productionSourceMap: true

    /* 9. Type: Object     开发环境配置 */
    devServer: {
        host: 'localhost',
        port: 8089,
        //open: false, /* 项目启动后自动打开浏览器  Default: false */
        proxy: { //同2.0
            '/biPc': {
                target: 'http://10.152.18.5:18084', //设置调用接口域名和端口号别忘了加http
                changeOrigin: true
            }
        }
    }
}