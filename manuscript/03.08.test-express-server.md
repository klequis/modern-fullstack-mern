# Creating Test Express Server
Next we will create a simple Express server to use for testing our machine build and working with the additional steps of setting-up PM2 & Nginx as a reverse proxy server

```js
$ cd
$ mkdir todo-server
$ cd todo-server
$ npm init -y
```

The response will be as belo. We will discuss changeing these values later.
```js
Wrote to /home/doadmin/todo-server/package.json:

{
  "name": "todo-server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

```js
$ npm i express
$ mkdir server
$ touch server/index.js
$ nano server/index.js
```

Contents of the file
```js
const express = require('express')

const port = 3030
const app = express()

app.get('/', (req, res) => {
  res.send('Response from todo-server')
})

app.listen(port, () => {
  console.log(`Events API server is listening on port ${port}`)
})

```

Run the server
```js
$ node server
```

Output
```js
Events API server is listening on port 3030
```
To test the server, open another terminal on your server and use 'curl' to call it
```js
curl http://localhost:3030
```
In the console you should see
```js
Response from todo-server
```

