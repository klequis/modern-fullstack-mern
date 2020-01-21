# ZZ Setup Domain

Log into the registrar that manages you DNS and change the name servers to
ns2.digitalocean.com
ns2.digitalocean.com
ns2.digitalocean.com

This change can take up to 48 hours, but in my experience it is one to several hours. Your mileage my vary.

Back in DigitalOcean, make sure you have the currect team selected and then click *Networking* in the left hand navigation.

In the Domains tab, enter the name of your domain (e.g., todo.tk) then click *Add Domain*. This should take you to the page for adding records to the domain. If not, click directly on your new domain. 

Add 3 records. For each, enter a host name and choose your server under *WILL DIRECT TO*. 

| HOSTNAME | WILL DIRECT TO |
| -------- | -------------- |
| * | todo-server |
| @ | todo-server |
| www | todo-server |

* Note that in each case the domain name is added. You do not need to type it in.

> TODO: confirm need to have the '*' record as droneevents.live does not








