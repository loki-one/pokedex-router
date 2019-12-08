# Note: The project is created following the steps in the book The Majesty of Vue.js 2. Deployment steps are added by me.

# pokedex-router https://pokemon-router-busy-oribi.cfapps.io/

> A Vue.js with Vue Router project demonstrating routing, transition, style bindings and basic Vue core functionalities.
> Built using vue-cli 2.9.1, vue router, express and deployed on Pivotal cloudfoundry web services.

## Build Setup

``` bash
# install dependencies
npm install

# serve at localhost:5000
node server.js

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## :newspaper: Deployment

The App is deployed on pivotal cloudfondry.
Steps to achieve:

* `npm run build` to create the build for production
* Install express.js and save to dependencies `npm install express --save`.
* Create server.js file
* Check if app is running by using `node server.js`
* If yes create Procfile which will contain command to start the app, necessary for deploying on pivotal cloudfoundry webservices

### Push the App to cloudfoundry

* Login to your cloudfoundry account
* Run the command `cf push <<app-name>> -b https://github.com/cloudfoundry/nodejs-buildpack --random-route -m 128M`
* Random url is created where your app will be hosted.
