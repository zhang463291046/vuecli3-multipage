const glob = require('glob')
let pages = {}
module.exports.pages = function () {
  glob.sync('./src/pages/*/*.html').forEach(filepath => {
    let fileList = filepath.split('/');
    // 文件夹名
    let fileFolder = fileList[fileList.length - 2];
    // 文件名
    let fileName = fileList[fileList.length - 1].split('.')[0];
    pages[fileName] = {
      entry: `src/pages/${fileFolder}/${fileName}.js`,
      // 模板来源
      template: `src/pages/${fileFolder}/${fileName}.html`,
      // 在 dist/index.html 的输出
      filename: `${fileFolder}/${fileName}.html`,
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', fileName]
    }
  })
  return pages
};