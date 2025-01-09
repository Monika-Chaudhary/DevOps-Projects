# NGINX

NGINX is a webserver which serves the web files(html, css, js, etc) to clients(browser or to users)

Features of NGINX:
1. Reverse Proxy- direct client requests to apropriate back-end server

2. Load Balancing- manage and distributes the traffic load

3. Caching- Stores data for future requests

4. URL redirection- route request like error.html page if page not found

5. Architecture of Nginx based on Master-Slave so can run mutiple child process

Install NGINX:
1. Create ec2 instance
    i. Select/Create key pair
   ii. Create SG and make sure check-on allow HTTP and HTTPS traffic from Internet

2. Update packages
   > sudo  apt-get update

3. Install nginx
   > sudo apt-get

4. Check status
   > systemctl status nginx

5. Default page of nginx we can see by putting http://localhost:80 or http://127.0.0.1:80 over browser

6. Default html page for nginx
   > cd /var/www/html

7. Default location for nginx
   > cd /etc/nginx
        #nginx.conf - nginx configuration file(don't modify)
        # sites-enabled and sites-available - if want to deploy/config website
               #sites-enabled -> if we put website conf then it will deploy because it's include in default nginx.conf file
               #sites-available ->  if we put website conf then it will not deploy
_________________________________

Deploy a website:-
1. Clone source code
   > git clone git@github.com:LondheShubham153/django-notes-app.git
2. Build docker project
   > docker build -t notes-app .
3. 
