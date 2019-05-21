const fs = require("fs")
const pify = require("pify")

const fsp = pify(fs)

export const fileExists = async fullFileName => {
  try {
    await fsp.stat(fullFileName)
    return true
  } catch (e) {
    return false
  }
}

export const renameFile = async (oldName, newName) => {
  try {
    const d = await fsp.rename(oldName, newName)
    // console.log('data', d)
    return true
  } catch (e) {
    throw e
  }
}

export const dirExists = async dirPath => {
  try {
    await pify(fs.stat)(dirPath)
    return true
  } catch {
    return false
  }
}

export const makeDir = async dirName => {
  try {
    const data = await fsp.mkdir(dirName)
    console.log("makeDir", data)
  } catch (e) {
    console.log("makeDir.ERROR", e)
  }
}

export const readFile = async fullFileName => {
  return await fsp.readFile(fullFileName)
}
