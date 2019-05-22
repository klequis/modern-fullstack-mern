const markdownpdf = require('markdown-pdf')
const path = require('path')
const fse = require('fs-extra')

const srcDir = '../manuscript'

const filterAndAddPath = (files) => {
  try {
    const mdFiles = files
      .filter(f => path.extname(f) === '.md')
      .map(f => `${srcDir}/${f}`)
    return mdFiles
  }
  catch (e) {
    console.log('filterAndAddPath', e)
    
  }
}

const main4 = async ()  => {
  const allFiles = await fse.readdir(srcDir)
  const mdFiles = filterAndAddPath(allFiles)
  const bookPath = 'book.pdf'
  markdownpdf()
    .concat.from(mdFiles)
    .to(bookPath, function() {
      console.log('Created', bookPath)
    })
}

main4()
