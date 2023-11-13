# Cartwheel Labs

## How to start

### Run Container

```
lima nerdctl run --name myPostgresDb -p 5432:5432 -e POSTGRES_USER=postgresUser -e POSTGRES_PASSWORD=postgresPW -e POSTGRES_DB=postgresDB -d postgres
```

### Client 

```npm i (or npm i --force)``` <br>
```npm start```

### Server

```npm i``` <br>
```npm start```