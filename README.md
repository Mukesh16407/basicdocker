- How to remove all container 
(Using Command Line)
docker system prune -a

//ask question Are you want to continue  -y

-create new normal Image

docker build -t basic-app

2nd -> create image with container

docker build -t basic-app:v2
docker run --name basic-app-container-v2 -p 5000:5000 basic-app:v2

                Docker Basics

//Check Docker Version

docker --version or docker -v

//Display system width information about Docker

docker info

//Download an image from Docker Hub.

docker pull <image_name>
//list local Docker images.

docker images or docker image ls

//List running container

docker ps or docker container ls

//list all containers (include stop one)

docker ps -a  or docker container ls -a

//create and start a new container from an image

docker run <options> <image_name>


                  Container Life Cycle
//start a stop container

docker start <container_name/id>

//stop a running container gracefully

docker stop <container_name/id>

//forcefully stop a running container

docker kill <container_name/id>

//Restart a container

docker Restart <container_name/id>

//Remove a stop container

docker rm <container_name/id>

                images

//build a Docker Image fro a docker file

docker build -t <image_name> <path_to docker file>

//Remove an Image

docker rml <image_name>

//Remove all unused images

docker image prune

             Docker Compose 
//Start services defined in a Docker Composed file

docker-compose up

//stop and remove services defined in a docker compose file

docker-compose down

//List services in a Compose file and their status

docker-compose ps

//View Logs for a specific services

docker-compose logs <services_name>


//Run a Command in a running service container

docker-compose exec <services_name> <command>


                 Volumes

//Create a named Volume

docker Volume create <Volume_name>

//Mount a volume to container

docker run -v <Volume_name>:<container_path>

//list Volumes

docker volume ls

//Remove a volume

docker volume rm <volume_name>

    

                 Docker Registary and Hub

//log in to a docker Registary

docker login

//push an image to a Registary.
docker push <image_name>

//pull an image from a Registary

docker pull <image_name>


                Networks

//Create a user-defined Networks

docker Network create <network_name>


//list Networks

docker network ls

// connect a container to a Network

docker network connect <network_name> <container_name/id>

//Disconnect a container from network

docker network disconnect <network_name> <container_name/id>


             Logs and Debugging

//view container logs

docker logs <container_name/id>

//start an interactive shell in a running container

docker exec -it <container_name/id>/bin/bash

//Display Real  Time container resource page.

docker start <container_name/id>

         cleanup

//Remove all  stopped containers, unused networks and images

docker system prune

//Remove all stop  containers

docker container prune

// Remove all unused Images

docker image prune

//Remove all unused  volume

docker volume prune





