# pokedex-router https://my-app-lean-dog.cfapps.io/

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

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
