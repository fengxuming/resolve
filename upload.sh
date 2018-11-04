#!/bin/bash
scp -r dist root@45.77.3.15:/opt/nginx-1.14.0/html/
ssh root@45.77.3.15 "cd /opt/nginx-1.14.0/html/; sh overwriteResolve.sh"