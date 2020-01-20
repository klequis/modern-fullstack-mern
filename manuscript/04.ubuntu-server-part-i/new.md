NOTE TO ME: Had problem getting new page to show instead of default. Seems default responds to the ip address and the new page responds to api.klequis-todo.tk. Therefore, important to setup DNS as early as possible.

# Initial Server Setup

## Ref

- https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-18-04

## login as root

```js
ssh root@your_server_ip
```

## Add new user `doadmin`

```js
adduser doadmin
```
Grant Administrative Privileges

```js
usermod -aG sudo doadmin
```

## Setup Firewall

```js
ufw app list
```

Tell UFW to allow SSH connections

```js
ufw allow OpenSSH
```

Enable the firewall

```js
ufw enable
```

Re-check status

```js
ufw status
```

## Enable access for non-root user

Stay logged in as root until you confirm the new non-root user has access. Doing so will allow you to troubleshoot any problems with the non-root user.

Copy the root user's public SSH key to doadmin's .ssh directory. This command will create the .ssh directory along with a copy of `authorized_keys`.

TODO: it does more, including setting permissions. Explore the command and explain

```js
rsync --archive --chown=doadmin:doadmin ~/.ssh /home/doadmin

```

Login as 'doadmin'.

In new terminal window:

```js
ssh doadmin@your_server_ip
```

You should use 'doadmin' for all remaining tasks.

# Setup Domain

TODO: Pasted from 06.02. Getting full process requires looking at AWS
- api.klequis-todo.tk
- add @ record
- add www record


# Installing Nginx

## Ref
- https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04

```js
sudo apt update
sudo apt install nginx

```
## Adjust the Firewall

```js
sudo ufw app list
sudo ufw allow 'Nginx HTTP'
```

Verify

```js
sudo ufw status
```

## Check Web server

```js
systemctl status nginx
```

View default page in browser

You should now be able to use the servers ip address to see the default nginx page

```js
http://your_server_ip
```

## Set-up Server Block

Create directory for new site

```js
sudo mkdir -p /var/www/api.klequis-todo.tk/html
```
Assign ownership to 'doadmin'.

```js
sudo chown -R $USER:$USER /var/www/api.klequis-todo.tk/html
```

The sites folder should have 755 permission. If not ...

```js
sudo chmod -R 755 /var/www/api.klequis-todo.tk
```

Create a web page to display

```
nano /var/www/api.klequis-todo.tk/html/index.html
```

Make the contents of the page as follows:

```html
<html>
    <head>
        <title>Welcome to api.klequis-todo.tk!</title>
    </head>
    <body>
        <h1>Success!  The api.klequis-todo.tk server block is working!</h1>
    </body>
</html>
```

Create the server block

```js
sudo nano /etc/nginx/sites-available/api.klequis-todo.tk
```

With the contents as

```js
server {
        listen 80;
        listen [::]:80;

        root /var/www/api.klequis-todo.tk/html;
        index index.html index.htm;

        server_name api.klequis-todo.tk www.api.klequis-todo.tk;

        location / {
                try_files $uri $uri/ =404;
        }
}
```

Enable the server block.

```js
sudo ln -s /etc/nginx/sites-available/api.klequis-todo.tk /etc/nginx/sites-enabled/
```

Change the hash bucket size.

```js
sudo nano /etc/nginx/nginx.conf
```

Uncomment the line

```js
server_names_hash_bucket_size 64;
```

Check the configuration.

```js
sudo nginx -t
```

Restart Nginx

```js
sudo systemctl restart nginx
```

# Setup Domain
__

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

# Setup Nginx as Reverse Proxy
- TODO: Why not do this earlier?
