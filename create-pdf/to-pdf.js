const markdownpdf = require('markdown-pdf')
const path = require('path')
const fse = require('fs-extra')

const srcDir = '../manuscript'
const outDir = 'out'

const filterAndAddPath = (files) => {
  return new Promise((resolve, reject) => {
    try {
      const mdFiles = files
        .filter(f => path.extname(f) === '.md')
        .map(f => `${srcDir}/${f}`)
      resolve(mdFiles)
    }
    catch (e) {
      reject(e)
    }
  })
}

const main4 = async ()  => {
  const allFiles = await fse.readdir(srcDir)
  const mdFiles = await filterAndAddPath(allFiles)
  const bookPath = 'book.pdf'
  markdownpdf()
    .concat.from(mdFiles)
    .to(bookPath, function() {
      console.log('Created', bookPath)
    })
}

main4()

