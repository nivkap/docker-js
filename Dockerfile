
#### FOR JAVASCRIPT
#### docker run niv-js:1.0.0
FROM node:alpine
COPY . /mission
WORKDIR /mission
CMD node JSapp.js

