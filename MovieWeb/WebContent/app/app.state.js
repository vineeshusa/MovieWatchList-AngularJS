(function() {
    'use strict';

    angular
        .module('movieApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('app', {
            abstract: true
        });
    }
})();
