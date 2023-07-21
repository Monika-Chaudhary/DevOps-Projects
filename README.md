# DevOps-Projects1
Deploy webapp using Jenkins on Tomcat Server

Tools Installation:
  1. Java - version 11
  2. Git
  3. Maven
  4. Tomcat Server -
      i. Create tomcat user to run Tomcat server on system as not advisible to run on root
        sudo useradd -r -m -U -d /opt/tomcat -s /bin/false tomcat
      ii. Download Tomcat package
            wget -c https://downloads.apache.org/tomcat/tomcat-9/v9.0.76/bin/apache-tomcat-9.0.76.tar.gz
      iii. Install on Linux
            a. Untar the archive
                 sudo tar xf apache-tomcat-9.0.76.tar.gz -C /opt/tomcat
            b. To make updation of Tomcat easy, make a symbolic link that will point to Installation directory of Tomcat
                  sudo ln -s /opt/tomcat/apache-tomcat-9.0.76 /opt/tomcat/updated
            c. To give correct directory ownership
                   If not as root user : sudo su -
                      Change directory ownership : sudo chown -R tomcat: /opt/tomcat/*
            d. Make all scripts executable of bin
                  sudo sh -c 'chmod +x /opt/tomcat/updated/bin/*.sh'
      iv. Configure Tomcat Service
            Create systemd unit file to Tomcat as a service
              sudo nano /etc/systemd/system/tomcat.service
[Unit]
Description=Apache Tomcat Web Application Container
After=network.target

[Service]
Type=forking

Environment="JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64/bin/java" 
Environment="CATALINA_PID=/opt/tomcat/updated/temp/tomcat.pid"
Environment="CATALINA_HOME=/opt/tomcat/updated/"
Environment="CATALINA_BASE=/opt/tomcat/updated/"
Environment="CATALINA_OPTS=-Xms512M -Xmx1024M -server -XX:+UseParallelGC"
Environment="JAVA_OPTS=-Djava.awt.headless=true -Djava.security.egd=file:/dev/./urandom"
sudo ufw allow 8080/tcp

ExecStart=/opt/tomcat/updated/bin/startup.sh
ExecStop=/opt/tomcat/updated/bin/shutdown.sh

User=tomcat
Group=tomcat
UMask=0007
RestartSec=10
Restart=always

[Install]
WantedBy=multi-user.target

      v. As tomcat runs on 8080 port by default but if any other service run on same port then
          Edit file //opt/tomcat/updated/conf/server.xml to change port no. which is free 
            Connector port="8081" protocol="HTTP/1.1" connectionTimeout="20000" redirectPort="8443" maxParameterCount="1000"/>

      vi. Reload daemon to update system about new file
            sudo systemctl daemon-reload
      vii. Start Tomcat service on system
            sudo systemctl start tomcat
      viii. Check status of Tomcat
            sudo systemctl status tomcat
      ix. To enable Tomcat service to run on startup
              sudo systemctl enable tomcat
      x. Allow firewall to be able to communicate outside local network
              sudo ufw allow 8080/tcp
      xi. Verify Installation
            http://<YourIPAddress>:8081
      xii. Edit : /opt/tomcat/updated/conf/tomcat-users.xml
            <user username="uname" password="pwd" roles="manager-gui,manager-script,manager-status"/>
  5. Jenkins
        Install 'deploy to container' plugin


              
              
