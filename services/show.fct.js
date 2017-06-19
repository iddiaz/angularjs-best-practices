(function () {
    'use strict';

    angular
        .module('app.services')
        // .constant('API_KEY', '87de9079e74c828116acce677f6f255b')
        // Mi clave de api en themoviedb.org
        .constant('API_KEY', '68a7941b617581624fbc0ccf5b2210f9')
        .constant('BASE_URL', 'http://api.themoviedb.org/3')
        .factory('ShowService', dataService);

    dataService.$inject = ['$http', 'API_KEY', 'BASE_URL', '$log'];
    function dataService($http, API_KEY, BASE_URL, $log) {
        var data = {
            // exposedFn:exposedFn
            'get': get,
            'search': search
            
        };

        return data;

        ////////////////

        //for test
        //  function getFake(){
        //     $http.get('https://api.github.com/users').then(function(res){
        //         console.log(res);
        //     })
        //      console.log('hola');
        //  }


        //cross domain
        function makeRequest(url, params) {
            var requestUrl = BASE_URL + '/' + url + '?api_key=' + API_KEY + '&language=es';
            angular.forEach(params, function (value, key) {
                requestUrl = requestUrl + '&' + key + '=' + value;
            });

            return $http({
                'url': requestUrl,
                'method': 'GET',
                'headers': {
                    'Content-Type': 'application/json'
                },
                'cache': true
            }).then(function (response) {
                return response.data;
            }).catch(dataServiceError);
        };

        function get(id) {
            return makeRequest('tv/' + id, {});

        };

        function search(query){
            return makeRequest ('search/tv', { query:query }).then( function( data ){
                return data.results;               
            });
        };


        function dataServiceError(errorResponse) {
            $log.error('XHR Failed for ShowService');
            $log.error(errorResponse);
            return errorResponse;
        };
    }
})();