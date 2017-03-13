(function() {
    'use strict';

    angular
        .module('movieApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('add', {
            parent: 'home',
            url: '/add',
            data:{
        		pageTitle: 'movieApp'
        	},
            views: {
                'movieContent@': {
                    templateUrl: 'app/home/add/movieadd.html',
                    controller: 'MovieAddController',
                    controllerAs: 'creator'
                }
            }
        });
    }
})();
