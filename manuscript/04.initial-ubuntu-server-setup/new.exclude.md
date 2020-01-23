# Securing Nginx with Let's Encrypt

## Ref

- https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-18-04

## Install Certbot

Add repository (Install Certbot)

```js
sudo add-apt-repository ppa:certbot/certbot
```

Install

```js
sudo apt install python-certbot-nginx
```

## Confirm Configuration

- this section inspects the serer block configuration

```js
sudo nano /etc/nginx/sites-available/api.klequis-todo.tk
```


## Allow HTTPS

Add Nginx Full

```js
sudo ufw allow 'Nginx Full'
```

Remove Ngnix HTTP

```js
sudo ufw delete allow 'Nginx HTTP'
```

## Obtain an SSL Certificate (Get SSL Certificate)

NOTE: in my origin article i did not include the second '-d' that has 'www'. Don't see a need for it.

```js
sudo certbot --nginx -d api.klequis-todo.tk -d www.api.klequis-todo.tk
```

Choices are presented. Choose #2 'Redirect'


## Test the Auto-renewal process

```js
sudo certbot renew --dry-run

```

# Install NodeJS 12.x

```js
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Some npm packages need `build-essential` to compile code from source.

```js
sudo apt install build-essential
```

# Install Node/Express App

```
git clone https://github.com/klequis/express-server-part-1.git

cd express-server-part-1/

npm i

npm run build

mv dist ../app

cp package.json ../app

cp package-lock.json ../app

cd ../app

npm i
// do I need npm i --production or something like that?
```

Test the app

```
node server
```

# Install & Configure PM2

# Setup Nginx as Reverse Proxy
- TODO: Why not do this earlier?

```
sudo nano /etc/nginx/sites-available/api.klequis-todo.tk

```

```js
  ...
  location / {
        proxy_pass http://localhost:3030;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
    ...
```

```
sudo nginx -t
sudo systemctl restart nginx
```

# Test in Browser
**Important**
Ok ready to test the Express API from the browser. First, make sure the Express
server is running.

Once the browser test is successful you can delete /etc/nginx/sites-enabled/default so that use the ip address in the browser get a 'not found'.
> TODO: Should this redirect to api.klequis-todo.tk?

# Additional hardening

- https://geekflare.com/nginx-webserver-security-hardening-guide/
- https://www.digitalocean.com/community/questions/best-practices-for-hardening-new-sever-in-2017
- https://www.cyberciti.biz/tips/linux-unix-bsd-nginx-webserver-security.html
- https://www.monitis.com/blog/nginx-best-practices/
- https://www.nginx.com/resources/webinars/nginx-basics-best-practices/
- https://university.nginx.com/instructor-led-training/securing-applications-with-nginx
- https://www.cisecurity.org/cybersecurity-best-practices/
