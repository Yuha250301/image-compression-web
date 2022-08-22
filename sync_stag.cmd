#!/bin/sh

SERVER="10.30.80.47"
PRJ_NAME="ImageCompressionWeb"

ENTRY_PATH=`readlink -f $0`
PRJ_DIR=`dirname $ENTRY_PATH`

#sync
echo "1"
rsync --delete -aurv --exclude '.git' "$PRJ_DIR"/ zdeploy@$SERVER:/zserver/java-projects/ZCommMedia/$PRJ_NAME/

#start
echo "2"
ssh zdeploy@$SERVER sh /zserver/java-projects/ZCommMedia/$PRJ_NAME/runservice
