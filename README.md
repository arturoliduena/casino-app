# casino-app
nodeJs API and react App

## About the project
This project utlizes both react and node js to create a application which lists of countries.

React is used to render the front end (app) and renders on port 3000.
Node js / express is used to create the back end (server) which.

axios request to call from the app to the server.

## Set up
To set up the project you need to install all the node modules in both of the projects and the main project. 

clone this project
```sh
git clone https://github.com/arturoliduena/casino-app.git
```
install node_modules
```sh
$ cd casino-app
$ yarn install

$ cd app
$ yarn install

$ cd ../middleware-api
$ yarn install
```

## Running the projects
we can run each project by itself or both at the same time using concurrently.

### Start the both project
To start the server and the app you need to call these commands
```sh
$ cd casino-app
$ yarn start
```

### Start the server
To start the server you need to call these commands
```sh
$ cd middleware-api
$ yarn start
```
This server should now be running on port 8080. <br />
Runs the node-api in the development mode.<br />
The page will reload if you make edits.<br />

### Start the App
To start the app you need to call 
```sh
$ cd app
$ npm start
```
This will start the react application on port 3000.
 
Runs the react-app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
