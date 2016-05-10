# Parse-Server in Docker


![](https://img.shields.io/github/license/mashape/apistatus.svg)

![](https://img.shields.io/docker/stars/dockerepo/parse-server.svg) 

![](https://img.shields.io/docker/pulls/dockerepo/parse-server.svg)

![](https://img.shields.io/badge/parse--server-2.2.8-blue.svg)


### Demo: 

docker-compose.yml
```
server:
  image: dockerepo/parse-server
  restart: always 
  environment: 
    - MONGO_DB_NAME=parsedb
    - APP_ID=<appId>
    - MASTER_KEY=<masterKey>
  ports: 
    - "9001:1337"
  links: 
    - db:mongo
dashboard:
  image: dockerepo/parse-dashboard
  restart: always
  environment: 
    - PARSE_PUBLIC_ADDR=<host-ip>
    - PARSE_PUBLIC_PORT=9001
    - APP_ID=<appId>
    - MASTER_KEY=<masterKey>
  ports: 
    - "9000:4040" 
db:
  image: mongo
```