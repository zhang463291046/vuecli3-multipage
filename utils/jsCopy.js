var fs = require('fs');
const glob = require('glob');
/**
 * JS文件拷贝
 * @param src
 * @param dst
 */
var callbackFile = function (src, dst) {
  fs.readFile(src, 'utf8', function (error, data) {
    if (error) {
      console.log(error);
      return false;
    }
    fs.writeFile(dst, data.toString(), 'utf8', function (error) {
      if (error) {
        console.log(error);
        return false;
      }
      // console.log('JS写入成功');
      fs.unlink(src, function () { // JS删除成功
      })
    })
  })
};
// 复制目录
glob.sync('./dist/js/*.js').forEach((filepath, name) => {
  let fileNameList = filepath.split('.');
  let fileName = fileNameList[1].split('/')[3]; // 多页面页面目录
  let copyName = filepath.split('/')[3];
  let changeDirectory = `./dist/${fileName}/js`; // 多页面JS文件地存放址
  if (!fileName.includes('chunk-vendors')) {
    fs.exists(changeDirectory, function (exists) {
      if (exists) { // 已存在
        // console.log(`${fileName}下JS文件已经存在`)
        callbackFile(filepath, `${changeDirectory}/${copyName}`)
        callbackFile(`${filepath}.map`, `${changeDirectory}/${copyName}.map`)
      } else { // 不存在
        fs.mkdir(changeDirectory, function () {
          callbackFile(filepath, `${changeDirectory}/${copyName}`)
          callbackFile(`${filepath}.map`, `${changeDirectory}/${copyName}.map`)
          // console.log(`${fileName}下JS文件创建成功`)
        });
      }
    });
  }
});