#!/bin/sh

Port=3000
PID_Usage_Port=`lsof -t -i:$Port`

if [ -z "$PID_Usage_Port" ]
then
	echo "\$PID_Usage_Port is empty. You can use it now!"
else
	lsof -i:$Port
	while true; do
    		read -p "Do you wanna kill this process? " yn
    		case $yn in
        		[Yy]* ) echo "ok, we will proceed"; break;;
        		[Nn]* ) echo "ok, exiting..."; exit;;
        		* ) 	echo "Please answer yes or no.";;
    		esac
	done	
	kill -9 $PID_Usage_Port
	echo "Port is ready to use"
fi
