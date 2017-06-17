(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('ShowController', ShowController);

    ShowController.$inject = [];
    function ShowController() {
        var vm = this;

        vm.title = 'Hello from show controller!!';
        

      
    }
})();