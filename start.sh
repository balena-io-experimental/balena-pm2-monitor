#!/bin/bash
# Link pm2 to keymetrics API and name instance resin DEVICE ID
pm2 link $PUBLIC_KEY $SECRET_KEY $RESIN_DEVICE_UUID
# Start pm2 process to run server.js forever
pm2 start /app/server.js
# Spit out some logs
pm2 logs