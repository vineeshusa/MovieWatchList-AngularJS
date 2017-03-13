(function() {
    'use strict';

    angular
        .module('movieApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('home', {
        	abstract: true,
        	 data:{
         		pageTitle: 'movieApp'
         	},
            parent: 'app'
        });
    }
})();
