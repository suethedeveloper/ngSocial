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
