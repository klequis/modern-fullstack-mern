const markdownpdf = require('markdown-pdf')
const path = require('path')
const PDFMerge = require('pdf-merge')
const fse = require('fs-extra')

const srcDir = '../manuscript'
const outDir = 'out'

const main = () => {
  
    fse.pathExists(outDir)
    .then(() => {
      fse.remove(outDir).then(() => {
        fse.ensureDir(outDir)
      }).then(() => {
        return fse.readdir(srcDir)
      }).then((srcDirFiles) => {
        console.log('source directory file count = ', srcDirFiles.length)
        return srcDirFiles.filter(f => path.extname(f) === '.md')
      }).then((mdFiles) => {
        console.log('number of md files', mdFiles.length);
        return mdFiles.map(file => {

          const outFileName = `${path.basename(file, '.md')}.pdf`
          fse.createReadStream(`${srcDir}/${file}`)
            .pipe(markdownpdf())
            .pipe(fse.createWriteStream(`${outDir}/${outFileName}`))
          return `${outDir}/${outFileName}`
        })
      }).then(outFiles => {
        console.log('number of pdf files created =', outFiles.length)
        // PDFMerge(outFiles, { output: `${__dirname}/3.pdf`  })
        setTimeout(() => {
          PDFMerge(outFiles, { output: `${__dirname}/3.pdf` })
        }, 1000)
      })
    })
}

main()