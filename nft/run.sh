#! /bin/bash

while true
do
	monitor=`ps -ef | grep count.js | grep -v grep | wc -l `
	if [ $monitor -eq 0 ]
	then
		echo "Program is not running, restart count.js"
		node count.js
	else
		echo "Program is running"
	fi
	sleep 10
done
