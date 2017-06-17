(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('MyShowsController', MyShowsController);

    MyShowsController.$inject = [];
    function MyShowsController() {
        var vm = this;

        vm.title = 'Hello from my-shows controller!!';
        

      
    }
})();