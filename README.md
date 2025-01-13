# NGINX

NGINX is a webserver which serves the web files(html, css, js, etc) to clients(browser or to users)

We set up /etc/nginx/nginx.config file to tell which configuration nginx holding either nginx acts as webserver or as proxy server

# Features of NGINX:
1. Reverse Proxy- direct client requests to apropriate back-end server(Proxy means acting on behalf of another. It's intermediate server that forwrds client request to other servers)
   #there is single entrypoint using Nginx Proxy and reduces attack as centrailized access control, consolidated security and minimized exposure
   #Functionalities of NGINX as Proxy Server
   a. Load Balancing 	b. Caching 	c. Security	d. Compresssion and Segmentation

3. Load Balancing- manage and distributes the traffic load

4. Caching- Stores data for future requests

5. URL redirection- route request like error.html page if page not found

6. Architecture of Nginx based on Master-Slave so can run mutiple child process

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

Deploy a website using nginx:-
1. Clone source code
   > git clone repoSrcCodeURL.git
2. Build docker project
   > docker build -t imageName .
3. Create Container from Image
   > docker run -d -it --name containerName -p hostPort:contPort imageName:tag (eg hostPort - 8000 and contPort - 8000)
4. Check website working or not which run as container locally
   #paste http://127.0.0.1:8000 in browser or run command 'curl -L http://127.0.0.1:8000'
5. Now we want to deploy same application which running as locally as container (means run local application so we can't expose our local app over browser using nginx proxy)
   i. Modify /etc/nginx/sites-enabled/default file as root user by adding proxy line
       server{
           location / {                                #whenever we browser http://ipOfInstanceWhereNginxInstalled:80/ then it will route the request to http://127.0.0.1:8000 using nginx proxy
		        proxy_pass http://127.0.0.1:8000;   
		        try_files $uri $uri/ =404;
	        }
       }
