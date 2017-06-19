(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['ShowService'];
    function SearchController(ShowService) {
        var vm = this;

        vm.title = 'Hello from search controller!!';


        vm.query = function (query) {
            ShowService.search(query)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

        vm.query('Game of trones')

        
    }
})();