'use strict';

// For any iTunes Search API refer here:
// https://www.apple.com/itunes/affiliates/resources/documentation/itunes-store-web-service-search-api.html
iTunesApp.factory('MediaService', ['$resource',
    function($resource) {
        return $resource('https://itunes.apple.com/:action', {
            action: "search",
            callback: 'JSON_CALLBACK'
        }, {
            get: {
                method: 'JSONP'
            }
        });
    }
]);