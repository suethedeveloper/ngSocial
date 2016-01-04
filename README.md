# ngsocial - Facebook

For a template, `angular-seed` was used - https://github.com/angular/angular-seed/
To handle Angular Facebook, `ngFacebook` was used - https://github.com/GoDisco/ngFacebook

### Using a angular template: Clone angular-seed
Clone the angular-seed repository using [git][git]:

```
git clone https://github.com/angular/angular-seed.git
```
### Using ngFacebook
1. Download the package:
   1. download using npm: `npm install ng-facebook`
   1. download using the [zip file](https://github.com/GoDisco/ngFacebook/archive/master.zip)
   1. download using bower: `bower install ng-facebook`
1. Modify your application to include `ngFacebook` in your application dependencies
1. Configure the ngFacebook module using the configuration steps outlined in the section titled "Configuration" below.
1. Load the [*Facebook SDK for javascript*](https://developers.facebook.com/docs/reference/javascript/), **BUT DO NOT** call `FB.init` or set `window.fbAsyncInit`. These steps are automatically done by the ngFacebook module.

### Install Dependencies
angular-seed has preconfigured `npm` to automatically run `bower`, simply do:

```
npm install
```

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app`.


## Directory Layout 

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
    version/              --> version related components
      version.js                 --> version module declaration and basic "version" value service
      version_test.js            --> "version" value service tests
      version-directive.js       --> custom directive that returns the current app version
      version-directive_test.js  --> version directive tests
      interpolate-filter.js      --> custom interpolation filter
      interpolate-filter_test.js --> interpolate filter tests
  view1/                --> the view1 view template and logic
    view1.html            --> the partial template
    view1.js              --> the controller logic
    view1_test.js         --> tests of the controller
  view2/                --> the view2 view template and logic
    view2.html            --> the partial template
    view2.js              --> the controller logic
    view2_test.js         --> tests of the controller
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```
