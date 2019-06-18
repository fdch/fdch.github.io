#!/bin/bash

for i in ./tables/*.txt
do
	n=`basename $i .txt`
	echo "var $n=[" > $n.js
	sed 's/$/,/p' $n.txt >> $n.js
	echo "]" >> $n.js
done