(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['ShowService', '$timeout'];
    function SearchController(ShowService, $timeout) {
        var vm = this;

        vm.title = 'Hello from search controller!!';
        vm.results = false;
        vm.searching = false;


        vm.query = function (query) {
            vm.searching = true;
            ShowService.search(query)
                .then(function (response) {
                    vm.results = response;
                    $timeout(function(){
                        vm.searching = false;
                    },500)
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

        // vm.query('Game of trones')

        
    }
})();