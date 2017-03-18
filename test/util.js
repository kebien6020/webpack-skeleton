const { transformFileSync } = require('babel-core')

const requireFromBrowser = file => {
  const { code } = transformFileSync('./src/' + file, {
    presets: ['es2017'],
    plugins: ['transform-es2015-modules-commonjs'],
    resolveModuleSource: (source, filename) => {
      if (source.match(/.scss$/i)) return './nothing.js'
      return '../src/' + filename
    }
  })
  let exports = {}
  // const numbered =
  //     code
  //       .split('\n')
  //       .map((line, i) => i + ': ' + line)
  //       .join('\n')
  // console.log(numbered)
  // eslint-disable-next-line no-eval
  exports = eval(code)
  return exports
}

exports.requireFromBrowser = requireFromBrowser
