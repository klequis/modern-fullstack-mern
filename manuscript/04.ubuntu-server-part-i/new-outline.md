# Outline

## Create Node app Locally

## Generate SSH Keys

## Create a droplet

__04.02-create-a-droplet.md__

## Initial Server Setup

- Log in as root
- Create new/normal user
- Grant new/normal user Administrative Privileges
- Setup Firewall
- Enable external access for new/normal user

## Setup Domain

## Install Nginx

- Install Nginx
- Adjust Firewall
  - Check Web  Server  
- Nginx Commands
  - TODO: Find a link to reference
- Setup Server Block
  - TODO: go straight to node configuration?

## Secure Nginx with Let's Encrypt
- Install Certbot
- Confirm configuration
  - TODO: looks good idea but why do it now?
- Allow HTTPS Through Firewall
  - TODO: seems to allow htts through as well
- Get SSL Certificate
- Verify Auto-Renewal

## Setup Node Application

- Install Node
- Install Our Node App
- Install & configure PM2
- Setup Nginx as Reverse Proxy

## Additional hardening
- https://geekflare.com/nginx-webserver-security-hardening-guide/
