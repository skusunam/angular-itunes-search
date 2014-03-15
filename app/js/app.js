'use strict';

// From Angular 1.2.x some of the modules (ngRoute, ngResource) are optional and 
// needs to be included manually
//
// BLOG: What does 'ngResource' do explain in blog post? 
var iTunesApp = angular.module('iTunesApp', ['ngRoute', 'ngResource']);

iTunesApp.config(['$routeProvider',
    function($routeProvider) {
        // BLOG: How to protect a Route?
        $routeProvider.when('/', {
            templateUrl: 'partials/media-list.html',
            controller: 'MediaListController'
        });
    }
]);