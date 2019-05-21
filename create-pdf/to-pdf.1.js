const markdownpdf = require('markdown-pdf')
const path = require('path')
const PDFMerge = require('pdf-merge')
const fse = require('fs-extra')

const srcDir = '../manuscript'
const outDir = 'out'

// const createPdf = async (file) => {
//   try {
//     const outFileName = `${path.basename(file, '.md')}.pdf`
//     await fse.createReadStream(`${srcDir}/${file}`)
//       .pipe(markdownpdf())
//       .pipe(await fse.createWriteStream(`${outDir}/${outFileName}`))
//     console.log('makePDF')
//   }
//   catch (e) {
//     console.log(e)
    
//   }
// }

const createPdf = async file => {
  console.log('createPdf');
  
  try {
    const outFileName = `${path.basename(file, '.md')}.pdf`
    const stream = await fse.createReadStream(`${srcDir}/${file}`)
    console.log('stream');
    const pdf = await markdownpdf()
    console.log('pdf');
    
    const written = await fse.createWriteStream(`${outDir}/${outFileName}`)
    console.log('written')
    
  } catch (e) {
    console.log(e)
  }
}


// const makePdfFiles = new Promise((resolve, reject) => {
//   try {
//     files.forEach(file => {
//       if (path.extname(file) === '.md') {
//         createPdf(file)
//       }
//     })
//     resolve(true)
//   } catch (e) {
//     console.log('makePdfFiles ERROR', e)
//     reject(false)
//   }
// })

const makePdfFiles = (files) => {
  return new Promise((resolve, reject) => {
    try {
      files.forEach(file => {
        if (path.extname(file) === '.md') {
          createPdf(file)
        }
      })
      resolve(true)
    }
    catch (e) {
      reject(false)
      console.log('makePdfFiles ERROR', e)
      
    }
  })
}

const mergeFiles = async (files) => {
  try {
    await PDFMerge(files, {output: `${__dirname}/3.pdf`})
  }
  catch (e) {
    console.log(e)
    
  }
}

const addPathToPdfFiles = (files) => {
  return files.map(file => {
    return `${outDir}/${file}`
  })
}

const main = async () => {
  try {
    const exists = await fse.pathExists(outDir)
    if (exists) {
      await fse.remove(outDir)
    }
    await fse.ensureDir(outDir)
    const mdFiles = await fse.readdir(srcDir)
    const filesMade = await makePdfFiles(mdFiles)
    console.log('filesMade', filesMade)
    
    const pdfFiles = await fse.readdir(outDir)
    const pdfFilesWithPath = addPathToPdfFiles(pdfFiles)
    console.log('start merge');
    
    mergeFiles(pdfFilesWithPath)
    // setTimeout(() => {
    //   mergeFiles(pdfFilesWithPath)
    // }, 1000)
  } catch (e) {
    console.log(e)
  }
}

main()