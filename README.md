# PowerFlex

## Getting start

## Setup DB

```bash
$ docker-compose up
```

## Install Dependencies

```bash
$ yarn install
```

## Prepare DB

```bash
$ yarn db:migrate
$ yarn db:seed
```

## Running the app

```bash
# development
$ yarn run start
```

## Access the app

You can call the services by either swagger docs or using the postman collection file located in the project root (`PowerFlex.postman_collection.json` -> file name)

### swagger url

http://localhost:3000/api

Note: You can look at the endpoints in the swagger API or in the postman collection.
