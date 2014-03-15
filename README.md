# What is this Application?

This is my play project (called: **_iTunes Media Search_**) where i am planning to experiment and present my ideas on how we should do Angular development following some of the best practices i have learned in last 1yr. It will start easy and build\progress towards awesomeness. This iTunes Search implementation is inspired from @devgirl (Holly Schinsky) at [github](https://github.com/hollyschinsky/MediaExplorer).

![screenshot](https://raw.github.com/skusunam/angular-itunes-search/gh-pages/itunes-search.png)

### This implementation demonstrate following things

1. Can be used as quick "**_template_** \ **_seed_**" project for any new Angular Project.
2. It uses [**iTunes Search API**](https://www.apple.com/itunes/affiliates/resources/documentation/itunes-store-web-service-search-api.html) as REST endpoint.
3. It uses [**Twitter Bootstrap 3.1.1**](http://getbootstrap.com/) as UI Responsive Theme.
4. It uses latest [**Angular 1.2.14**](http://code.angularjs.org/1.2.14/docs/api) as of today (_March-3rd, 2014_)
5. Demonstrates how to use **filter** and **orderBy** features of Angular

# Technology Stack

* Angular latest (As of today March-14th, 2014 it is **1.2.14**)
* Bootstrap **3.1.1**
* Grunt
  * jshint
  * watch
  * connect
  * karma
* Bower

## Installation

    git clone git@github.com:skusunam / angular-itunes-search.git
    cd angular-itunes-search
    npm install

## Running

    # Serve static files using your own web server or run
    grunt
    # Go to this URL in your favorite browser
    http://localhost:9001/app/
    

# Things i am planning write code for:

1. Original sample project organized based on "Type" (controller, services etc) w/ Unit Tests
2. Project sample using RequireJS w/ Unit tests
3. Project sample using Yeoman workflow
4. Project sample using Lineman workflow
5. Replace 'ngRout' with 'ui-router' (https://github.com/angular-ui/ui-router) and compare differences
6. What are the adavantages in using 'restangular' (https://github.com/mgonto/restangular) instead of default '$resource'?
7. Implement Authentication i.e. 'Login' using Facebook \ Twitter \ Linked-in \ Google+ (all or few of them).
8. How do you protect an angular Route?
9. Write an interceptor (Request and Response) and show how to use them?
10. Display spinner when there is an http request in progress
11. Replace table display with 'ngGrid' (http://angular-ui.github.io/ng-grid/)
12. Replace table display with 'ngTable' (https://github.com/esvit/ng-table)
13. Implement i18n using 'angular-translate' (https://github.com/angular-translate/angular-translate)
14. Show an example of using 'bindonce' (https://github.com/Pasvaz/bindonce)


# Simple things which i want to Blog:

1) Why should \ shouldn't use '$resource' with respect to '$http'?
