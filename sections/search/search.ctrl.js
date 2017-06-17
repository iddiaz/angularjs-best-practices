(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('SearchController', SearchController);

    SearchController.$inject = [];
    function SearchController() {
        var vm = this;

        vm.title = 'Hello from search controller!!';
        

      
    }
})();