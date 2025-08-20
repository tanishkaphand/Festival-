# Festival App (Angular + Spring Boot + PostgreSQL)

This repository contains:
- `festival-ui/`: Angular frontend that mirrors the original UI and calls the REST API.
- `festival-api/`: Spring Boot REST API using PostgreSQL database `festi`.

## Prerequisites
- Node.js 18+ and npm
- Java 21+
- Maven 3.9+
- PostgreSQL 14+ (with a running local server)

## Database setup
Create database `festi` if it doesn't exist.

```bash
psql -U postgres -h localhost -c "CREATE DATABASE festi;"
```

Copy `festival-api/src/main/resources/application.properties.example` to `festival-api/src/main/resources/application.properties` and update your credentials.

## Run backend (port 8082)
```bash
mvn -q -f festival-api/pom.xml spring-boot:run
```
The API will be available at `http://localhost:8082/api/festivals`.

## Run frontend (port 4200)
```bash
npm install --prefix festival-ui
npm start --prefix festival-ui
```
Open `http://localhost:4200`.

## Deploy / Build
- Backend JAR: `mvn -f festival-api/pom.xml clean package`
- Frontend build: `npm run build --prefix festival-ui`

## Notes
- The frontend API base URL is configured in `festival-ui/src/environments/`.
- `schema.sql` auto-creates the `festival` table on backend startup.
- `.gitignore` excludes `application.properties`; use the provided example file.
