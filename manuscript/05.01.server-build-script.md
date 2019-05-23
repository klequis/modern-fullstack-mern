# Making a Build Script

In this section we will using a NodeJS script to create a build script for the server. This script will work for both the current minimal install as well as future increments (?with some modification/additions). (or: as more features are added to the Express server the script will be modified to accommodate them.)

> TODO: all about the script

```js
/*
  - use fs-extra it has a convenient 'move' method whcih native Node 'fs' does not.
  - use rimraf to delete a non-empty directory which can be done with Node but not as easily.
*/



const cp = require('child_process')
cp.execSync('npm i -D fs-extra rimraf', {stdio:[0,1,2]})


const path = require('path')
const fs = require('fs-extra')
const rimraf = require('rimraf')
const execSync = require('child_process').execSync

// final path for app
const appPath = path.normalize(`${__dirname}/../app`)

// remove ../app it it already exists
if (fs.existsSync(appPath)) {
  rimraf.sync(appPath, {}, function () { console.log("done"); });
}

// npm i for repo
// for `stdio` see: https://nodejs.org/api/child_process.html#child_process_options_stdio
execSync('npm i', {stdio:[0,1,2]})

// build app
execSync('npm run build', {stdio:[0,1,2]})

// move dist files to ../app
fs.move(`${__dirname}/dist`, appPath)

function l(msg, value) {
  if (value === undefined) {
    console.log(msg)    
  } else {
    console.log(msg, value)
  }
}
```
