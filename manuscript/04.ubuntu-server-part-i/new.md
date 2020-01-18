login

```js
ssh root@your_server_ip
```

Add new user `doadmin`

```js
adduser doadmin
```

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

### Enable access for non-root user

Stay logged in as root until you confirm the new non-root user has access. Doing so will allow you to troubleshoot any problems with the non-root user.

Copy the root user's public SSH key to doadmin's .ssh directory. This command will create the .ssh directory along with a copy of `authorized_keys`.

TODO: it does more, including setting permissions. Explore the command and explain

```js
rsync --archive --chown=doadmin:doadmin ~/.ssh /home/doadmin

```

Login as 'doadmin'.

```js
ssh doadmin@your_server_ip
```

You should use 'doadmin' for all remaining tasks.
