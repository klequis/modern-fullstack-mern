const markdownpdf = require('markdown-pdf')
const path = require('path')
const fse = require('fs-extra')
const dir = require('node-dir')

const srcDir = '../manuscript'

const filterAndAddPath = (files) => {
  try {
    const mdFiles = files
      .filter(f => {
        const exclude = f.includes('.exclude.')
        return path.extname(f) === '.md' && !exclude
      }).sort()
      // .map(f => `${srcDir}/${f}`)
    return mdFiles
  }
  catch (e) {
    console.log('filterAndAddPath', e)
    
  }
}

const main4 = async ()  => {
  const allFiles = await fse.readdir(srcDir)

  const mdFiles = filterAndAddPath(allFiles)
  console.log('mdFiles', mdFiles)
  const bookPath = 'book.pdf'
  markdownpdf()
    .concat.from(mdFiles)
    .to(bookPath, function() {
      console.log('Created', bookPath)
    })
}

// main4()

const newWay = async () => {
  const allFiles = await dir.promiseFiles(srcDir)
  const mdFiles = filterAndAddPath(allFiles)
  console.log(mdFiles);
  const bookPath = 'book.pdf'
  markdownpdf()
    .concat.from(mdFiles)
    .to(bookPath, function() {
      console.log('Created', bookPath)
    })
}

newWay()
