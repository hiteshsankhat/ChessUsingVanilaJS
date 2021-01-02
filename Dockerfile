FROM node:alpine

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

# FROM node:alpine

# WORKDIR '/app'

# RUN npm install -g serve

# COPY /build /app/build

# EXPOSE 3000

# CMD ["serve", "-s", "build", "-l", "3000"]