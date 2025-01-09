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
