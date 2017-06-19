(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('MyShowsController', MyShowsController);

    MyShowsController.$inject = ['StoreFactory'];
    function MyShowsController(StoreFactory) {
        var vm = this;

        // vm.title = 'Hello from my-shows controller!!';

        vm.results = StoreFactory.getShows();
        
        vm.unTrackShow = function(id) {
            StoreFactory.removeShow(id);
        }
        

      
    }
})();