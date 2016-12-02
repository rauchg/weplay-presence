FROM node:7

# Create app directory
RUN mkdir -p /usr/src/app/presence
WORKDIR /usr/src/app/presence

COPY . .

# Install app dependencies
RUN npm install

# Setup environment
ENV WEPLAY_REDIS_URI "redis:$REDIS_PORT_6379_TCP_PORT"


# Run
CMD [ "node", "index.js" ]