FROM node:7

# Create app directory
RUN mkdir -p /usr/src/app/presence
WORKDIR /usr/src/app/presence

COPY . .

# Install app dependencies
RUN npm install

# Setup environment
ENV NODE_ENV production
ENV WEPLAY_REDIS_URI "redis:6379"


# Run
CMD [ "node", "index.js" ]