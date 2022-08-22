#!/bin/sh

SERVER="10.30.80.47"
PRJ_NAME="ImageCompressionWeb"

ENTRY_PATH=`readlink -f $0`
PRJ_DIR=`dirname $ENTRY_PATH`

echo "1"

#sync
rsync --delete -aurv --exclude 'node_modules' --exclude '.git' "$PRJ_DIR/" /zserver/$PRJ_NAME/

echo "2"
sh /zserver/$PRJ_NAME/runservice

