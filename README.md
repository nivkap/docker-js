# about docker-js repo

This repository contains the image documentation for a docker container I built.

The container has 2 main rolls: 
1. print "JS - My container is online"
2. print the first 50 members of Fibonacci sequence
                                 
In the repository you will find 2 files: Dockerfile and JSapp.js.

# Dockerfile:

![image](https://user-images.githubusercontent.com/84071374/200414629-91c87194-f66b-4fb1-8528-5a467b1e1208.png)

FROM - creates a layer from the node:alpine Docker image.

COPY - adds files from your Docker client’s current directory.

WORKDIR - sets the working directory for the dockerfile.

CMD - specifies what command to run within the container.

 # JSapp.js
 
 This file is a standart JavaScript application that contains the code that responsible for the container's rolls. 
 
 # How to use this container ?
 
 I've uploaded the container's image to dockerhub so you can use it easily.
 
 In order to pull and run this image you'll need a dockerhub account and install docker on your computer.
 
 After doing so, enter *"docker run nivkap/niv-docker-repo:js"* to your terminal and run it.
 
 This command pulls the image from dockerhub and runs it on your computer. 
 
 # result
 
 ![image](https://user-images.githubusercontent.com/84071374/200428647-7c96e24b-0e35-440f-a3e6-3e5dec306137.png)
 
 As we can see, the program works exactly as we wanted and performs both rolls as mentioned above.
