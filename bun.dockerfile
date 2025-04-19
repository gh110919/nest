FROM node:latest

WORKDIR /home/WORKDIR
COPY . .

RUN npm i -g npm@latest
RUN npm i -g bun@latest
RUN npm i -g nodemon@latest

RUN npm i 

EXPOSE 3000

CMD ["nodemon"]