On same tutorial but step 4

https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-18-04

The server is currently only running on local host.

> TODO: The way the server block was setup in the previous step probably isn't necessary. Likely can setup this way first.
> Also have to wonder of ../klequis-todo.tk/html is necessary

**After this step the server is available from the command line**

# Install Nginx
```js
$ sudo apt update
$ sudo apt install nginx
```
# Allow Access Through Firewall
```js
$ sudo ufw app list
$ sudo ufw allow 'Nginx HTTP'
$ sudo ufw status
```

> TODO: Question: Although 'Nginx HTTP' was enabled above. I think it should be 'Nginx HTTPS' to allow https traffice only.

# Check Status
```js
systemctl status nginx
```
Then in the browser
```js
http://your-server-ip-address
```
Should see 'Welcome to nginx'

Todo: Link to Nginx commands


# Setup a Server Block
```js
sudo mkdir -p /var/www/api.klequis-todo.tk/html
sudo chown -R $USER:$USER /var/www/api.klequis-todo.tk/html
```
You may also need to adjust the permissions with
```js
$ sudo chmod -R 755 /var/www/api.klequis-todo.tk
```

Create a HTML page to test
```js
$ nano /var/www/api.klequis-todo.tk/html/index.html
```

Make the contents
```html
<html>
    <head>
        <title>api.klequis-todo.tk</title>
    </head>
    <body>
        <h1>api.klequis-todo.tk is working!</h1>
    </body>
</html>
```

Create the Server Block
```js
$ cd /etc/nginx/sites-available
$ sudo nano api.klequis-todo.tk
```
Make the contents
```js
server {
        listen 80;
        listen [::]:80;

        root /var/www/api.klequis-todo.tk/html;
        index index.html index.htm index.nginx-debian.html;

        server_name api.klequis-todo.tk www.api.klequis-todo.tk;

        location / {
                try_files $uri $uri/ =404;
        }
}
```
To enable the server block, create a link to it from /sites-enabled
```js
sudo ln -s /etc/nginx/sites-available/api.klequis-todo.tk /etc/nginx/sites-enabled
```

Increase the hash_bucket_size
```js
$ sudo nano /etc/nginx/nginx.conf
```
Uncomment the line (or add it if it isn't there)
```console

...
http {
  ...
  server_names_hash_bucket_size 64;
  ...
}
...

```
Check configuration for errors
```js
$ sudo nginx -t
```
Restart Nginx
```js
$ sudo systemctl restart nginx
```
Now visit the site from a browser


> WARN: If visiting the site from the browser doesn't work at all, try restarting the server.

> WARN: It is possible that when visiting your site via ipaddress you will continue to get directed to the default page even though you did everything correctly. Try clearing your browsers cache. If that doesn't work then delete the default site:

```console
$ sudo rm /etc/nginx/sites-enabled/default
$ sudo rm /etc/nginx/sites-available/default
$ sudo systemctl restart nginx
```
