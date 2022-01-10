# Capstone Travel App Project

## Overview
This is a my course work for the Udacity Nanodegree Front End Course. I'm buidling a travel app. The project includes a simple form where you enter the location you are traveling to and the date you are leaving. On form submission the app displays weather and an image of the location using information obtained from external APIs.
Weatherbit API is used to get the weather forecast.
Geonames API is used to convert the coordinates into desired location. 
Pixabay API is used to display the image of the location.

### Desktop
![alt text](https://github.com/Sidarenka/udacity-capstone-travel-app/blob/main/src/client/media/Result.png)

### Mobile 
![alt text](https://github.com/Sidarenka/udacity-capstone-travel-app/blob/main/src/client/media/MobileResult.png)

## Technologies used 
- HTML
- CSS 
- JavaScript
- The DOM 
- Node & Express 
- HTTP Requests & Routes 
- Webpack 

## Run the project

The npm packages need to be installed by running
- `npm install`

Once the installation is complete, you need to install other dependencies, loaders and plugins: 
- `npm i webpack webpack-cli`
- `npm i --save-dev html-webpack-plugin` -- make sure it's compatible with the latest version of webpack
- `npm i -D @babel/core @babel/preset-env babel-loader`
- `npm i -D clean-webpack-plugin`
- `npm i -D style-loader node-sass css-loader sass-loader`
- `npm i -D mini-css-extract-plugin `
- `npm install dotenv`
- `npm install js-datepicker`
- `npm install prettier`
- `npm install prettier-webpack-plugin`

To run the app on the development server you need to first, build the app by running-
`npm run build-dev`
Then in a different terminal start the express server-
`npm start`
The app will run on `localhost:8080`

## Jest test execution 
The app uses SuperTest assertions library for testing the server.js
Prior to running the test, ensure that supertest is installed by running- 
`npm install supertest --save-dev`
To run the test run-
`npm run test`

