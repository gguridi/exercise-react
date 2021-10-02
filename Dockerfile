# -- Dockerfile -- #
#
# docker build -t react-exercise .
# docker run -dit --name react-instance -p 80:3000 react-exercise
# docker exec -it react-instance /bin/bash

FROM node:12-buster

LABEL Description="React Sudoku" Version="1.0"

EXPOSE 3000

ARG APP_DIR="/opt/exercise-react"

RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

COPY . ${APP_DIR}
RUN npm install

ENTRYPOINT [ "npm", "run", "start" ]
