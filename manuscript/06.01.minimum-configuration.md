We will start with the minimum needed to have a working and deployable REST API.

# Install Packages
```js
$ npm init -y
$ npm i @babel/runtime body-parser cors express
$ npm i -D @babel/cli @babel/core @babel/node @babel/plugin-transform-runtime @babel/preset-env @babel/node
$ npm i -D @babel/types @types/node @types/body-parser @types/express @types/cors
```

TODO: question: why using babel-node?


> Types are not absolutely necessary, but are helpful when writing code and don't get included in the build so are effectively neutral.

 # Create Server

 The entry point for the server will be server/index.js

```js
$ mkdir server
$ touch server/index.js
```


 > Configuration will be hard-coded for now.



 ```js
 // server/index.js

 import express from 'express'
 import bodyParser from 'body-parser'
 import cors from 'cors'

 const app = express()

 const port = 3030

 app.use(cors())
 app.use(bodyParser.json())


 app.get('/', (req, res) => {
     res.status(200).send({ data: 'hello', error: '' })
 })

 app.listen(port, () => {
     console.log(`Events API is listening on port ${port}`)
 })
 ```

Add `babel.config.js`

```js
$ touch babel.config.js
```

```js
// babel.config.js

module.exports = function (api) {
  api.cache(true);

  const presets = [ "@babel/preset-env" ];
  const plugins = [ "@babel/plugin-transform-runtime" ];

  return {
    presets,
    plugins
  };
}
```

# First Run
At this point you can run the server from the command line using `npx` and `babel-node`.
```js
$ npx babel-node server/index.js
```

The terminical should print
```js
Events API is listening on port 3030
```

Open a browser and type into the address bar
```
localhost:3030
```

In the response you should see
```js
{ data: "hello", error: ""}
```



///////////////////////////////////////////////////
////////////////////////////////////////////////////


Add a "start" script to `package.json` and remove the "test" script for now.

```js
...


...
```
