> Older text for this is in file zz.03.08.create-test-express-server.md

# Creating Test Express Server
Next we will deploy the minimal-express-server to test the machine build as well as the additional steps of setting-up PM2 & Nginx as a reverse proxy server.


# Building it
Since the server is using some JavaScript features that are not unsupported by node we need to compile the code to an early version of JavaScript which will be [es5]().



## Making the build script
- considered a bash script but ...
- need to add package rimraf & fs-extra


# deploy it
- log into server as doadmin
```console
git clone https://github.com/klequis/minimal-express-server.git app
```
# build it

Write a bash script [some doc](https://www.linux.com/learn/writing-simple-bash-script)

```console

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
