(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('WhatsOnController', WhatsOnController);

    WhatsOnController.$inject = [];
    function WhatsOnController() {
        var vm = this;
        vm.title = 'Hello from WhatsOn controller!!'
        

    }
})();