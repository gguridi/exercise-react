# -- Dockerfile -- #
#
# docker build -t react-exercise .
# docker run -dit --name react-instance -v `pwd`:/storage/app -p 80:8080 react-exercise
# docker exec -it react-instance /bin/bash

FROM ubuntu:16.04

LABEL Description="React Sudoku" Version="1.0"

# Install generic tools
RUN apt-get update && apt-get install -y \
  sudo \
  vim \
  net-tools \
  curl

# Add node source repository to install the latest version
RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -

# Install basic tools
RUN apt-get update && apt-get install -y \
  nodejs

# Bring the process starter
COPY startup.sh /root/
RUN chmod +x /root/startup.sh

EXPOSE 8080

ENTRYPOINT [ "/root/startup.sh" ]
