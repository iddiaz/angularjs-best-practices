(function() {
    'use strict';

    angular
        .module('app.core')
        .directive('showOverview', showOverview);

    showOverview.$inject = [];
    function showOverview() {

        var directive = {
            templateUrl: './components/show/show.tpl.html',
            controller: showController,
            restrict: 'E',
            scope: {
                show:'='
            }
        };
        return directive;
        
    }
    /* @ngInject */
    function showController ($scope, StoreFactory ) {
        
        $scope.trackShow = function(show){
            StoreFactory.addShow(show);
        };

        $scope.unTrackShow = function(id){
            StoreFactory.removeShow(id);
        };

        $scope.hasShow = function(id) {
            return ( StoreFactory.getShow(id) !== false);
        }
        
    }
})();