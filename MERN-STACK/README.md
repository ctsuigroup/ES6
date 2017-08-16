# MERN -STACK
MongoDB, Express, React/Redux, Node

## clone or download 
```terminal
$ git clone https://github.com/ctsuigroup/JavaScript-Latest-UI-Frameworks.git
```

# Mongo DB Set up(make it run on your machine)
```terminal
$ Start Mongo DB connection server -> C:\Program Files\MongoDB\Server\3.4\bin>mongod -dbpath="G:\Training\mongodb\dbSetup" 
$ Start Mongo Shell -> C:\Program Files\MongoDB\Server\3.4\bin>mongo
$ create a database with name <mydb>, then use DATABASE statement would be as follows −
use mydb
switched to db mydb
```

# Usage(make it run on your machine)
```terminal
$ cd client
$ npm i
$ npm run dev
```

### Server-side usage(PORT: 8000)
(I am sure you need to add a JWT_SECRET in .env to connect to MongoDB -> make it run -> check your terminal for instructions
)
```terminal
$ cd server
$ npm i
$ npm run dev
```

# Dependencies(tech-stack)
Client-side | Server-side
--- | ---
axios: ^0.15.3 | bcrypt-nodejs: ^0.0.3
babel-preset-stage-1: ^6.1.18|body-parser: ^1.15.2
lodash: ^3.10.1 | cors: ^2.8.1
react: ^0.14.3 | dotenv: ^2.0.0
react-dom: ^0.14.3 | express: ^4.14.0
react-redux: ^4.0.0 | jwt-simple: ^0.5.1
react-router: ^2.0.1 | mongoose: ^4.7.4
redux: ^3.0.4 | morgan: ^1.7.0
redux-form: ^6.4.1 |
redux-thunk: ^2.1.0 |

# Work Flow Diagram of MERN -Application
![Navigation of Application overview](http://i.imgur.com/e4Pzg8y.png)

# Screenshots of this project

User Home page
![User visit public and Home page](http://i.imgur.com/59fHrqi.png)

User can sign in or sign up
![User can sign in or sign up](http://i.imgur.com/iZoNpis.png)

After signing in user can go to secret route and make request to token-protected API endpoint
![After signing in user can go to secret route](http://i.imgur.com/FzLB51u.png)

## BUGs or comments
vinodnlee@gmail.com

## Author
UI-Stack Experts

### License
Open source Contribution