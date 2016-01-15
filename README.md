# Webpack React Template

## Introduction
This is a basic template that uses webpack, ReactJS, and Sass. It features hot loading and has starter code for multi-page applications. 


## Getting started
Clone the repository:

```sh
git clone git@github.com:davidk107/webpack-react-template.git
cd webpack-react-template
npm install
npm start
Browse to http://localhost:8080
```

## Commands
```npm start``` - Runs the express server. Use this while developing as any changes you make will automatically get loaded in. 

```npm run compile``` - Use this to build the app for use in production. The default build directory is located in ```app/build```.  

## Hot Module Replacement
To use hot module replacement while developing, run ```npm start``` if you haven't already. Then navigate to ```http://localhost:8080/webpack-dev-server/#/``` to view your changes get updated live.


## Dependencies
- React 0.14
- React-dom 0.14
- Webpack 1.12
