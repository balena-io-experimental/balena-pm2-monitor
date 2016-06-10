FROM resin/raspberrypi-node

RUN npm install pm2 -g --no-optional

COPY . /app

ENV INITSYSTEM on

CMD ["bash", "/app/start.sh"]
