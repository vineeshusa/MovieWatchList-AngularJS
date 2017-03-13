(function () {
    'use strict';

    angular
        .module('movieApp')
        .factory('Movie', Movie);

    User.$inject = ['$resource'];

    function User ($resource) {
        var service = $resource('http://localhost:8080/movies/:title', {}, {
            'query': {method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'save': { method:'POST' },
            'update': { method:'PUT' },
            'delete':{ method:'DELETE'}
        });

        return service;
    }
})();
