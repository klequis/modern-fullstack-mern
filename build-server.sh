#!/bin/bash

REPODIR=~/minimal-express-server
DESTDIR=~/app


if [ -d "$DESTDIR" ]; then
  rm -rf $DESTDIR
fi

npm run build
mv $REPODIR/dist/* ../app
# mv /home/klequis/dev/modern-fullstack-subproj/minimal-express-server/dist/* ../../app/
