(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('ShowController', ShowController);

    ShowController.$inject = ['ShowService'];
    function ShowController(ShowService) {
        var vm = this;

        vm.title = 'Hello from show controller!!';

        ShowService.get(1399).then(function(data){
           console.log(data);
        })
        

      
    }
})();