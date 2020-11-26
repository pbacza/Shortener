# Shortener

The project allow for shortening links in to easy to share form. The frontend allows for browsing through already shortened links and add new ones.


## How to run project

Firts checkout the project
```
git clone https://github.com/pbacza/shortener.git
```

Go to the project directory:
```
cd ./shortener
```
And run it with command:
```
docker-compose up --build
```

It will make sure that new version of images for the frontend and the backend are build and will start all the services.  
The front end will be available at `http://localhost:8080`


## How to run tests

### Backend

In the backend project there are available unit and integration tests.
Before running tests make sure that you are in the backend location `cd ./backend`

`npm run test:u` - will run all unit tests

`npm run test:d` - will run integrated tests with docker. The database will be always created for the tests to there is no need for creating it or cleaning up.

### Frontend

For running unit test on frontend first  `cd ./frontend`

`npm run test:unit` - run all unit tests  


## Improvements

If I would spend more time on developing the project I would add following improvements

1. Logging in the backend. Currently there is no way to track what was executed and what errors were produced since application doesn't have logger.
2. Better error handling now the errors (which my be caused e.g. by problems with connection to other services) when thrown what be caught and mitigated if possible.
3. Add more tests. Due to limited time not all code is covered with tests.
4. Better input validation. Now the not valid urls can be passed for shortening
