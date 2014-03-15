'use strict';

iTunesApp.controller('MediaListController', ['$scope', 'MediaService',
    function($scope, MediaService) {

        //BLOG: Scope is not a model so do not put properties
        // on it directly
        $scope.searchTerm = "Reds";
        $scope.mediaType = "all";
        $scope.filterTerm = "";
        $scope.sortProp = "artistName";
        $scope.showFlag = false;

        $scope.setSortProp = function(sortProp) {
            $scope.sortProp = sortProp;
        };

        $scope.doSearch = function() {
            var type = $scope.mediaType;
            if ($scope.mediaType === "all") {
                type = "";
            }
            MediaService.get({
                term: $scope.searchTerm,
                entity: type
            }, function(response) {
                $scope.mediaResults = response.results;
            });
        }
        $scope.doSearch();
    }
]);