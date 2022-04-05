#!/bin/bash

echo -e "\n\nLaunching mango_kaf...\n\n"

bash reset.sh

tsc _sample.ts && node _sample.js

docker-compose up -d
echo -e "\n\nDocker containers pulled, initializing...\n"
sleep 10

# Make sure the platform is running
echo -e "\n\nRestarting any failed containers.\n"
retries=0
while [[ $retries -lt 10 ]];
do
    for container in $(docker-compose ps | grep -e "Exit" | awk '{print $1}');
    do
        echo $container
        docker-compose restart $container
    done
    sleep 10
    retries=$(( $retries + 1 ))
done
if [[ $(docker-compose ps | grep -e "Exit" | awk '{print $1}') == "" ]];
then
    echo -e "\n\n All containers booted successfully.\n"
else
    echo -e "\n\n FAILED: Containerized Kafka deployment was not successful.\n"
    echo -e "\n Use docker-compose ps and docker-compose logs to check status\n"
fi

# Create the topics dynamically

# Set up KSQL
