# Todos App


## Requirements

Make sure you have the following dependencies installed on your machine:

- `docker`
- `docker-compose`
- `nvm`
- `node` and `npm` with `LTS` version

## Starting everything

Start mongo:
```sh
docker-compose up -d

```

Start the server:
```sh
cd server
npm install
npm run start
```

It will serve on `localhost:8080`, watch for changes and restart the server.

Start the client:
```sh
cd client
npm install
npm run start
```

It will serve on `localhost:8000`, watch for changes and restart the dev server for the front-end.
