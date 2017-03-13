(function() {
    'use strict';

    angular
        .module('movieApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        
    	$stateProvider
        .state('list', {
            parent: 'home',
            url: '/list',
            data:{
        		pageTitle: 'movieApp'
        	},
            views: {
                'movieContent@': {
                    templateUrl: 'app/home/list/movielist.html',
                    controller: 'MovieListController',
                    controllerAs: 'collector'
                }
            }
        })
        .state('edit', {
        	parent: 'list',
        	url:'edit/{title}',
        	data:{
        		pageTitle: 'movieApp'
        	},
            views: {
                'movieContent@': {
                    templateUrl: 'app/home/list/movieedit.html',
                    controller: 'MovieEditController',
                    controllerAs: 'editor'
                }
            }
        })
        .state('delete', {
        	parent: 'list',
        	url:'/delete/{title}',
        	data:{
        		pageTitle: 'movieApp'
        	},
            onEnter: ['$stateParams', '$state', '$http', function($stateParams, $state, $http) {
            	$http({
                    method : "DELETE",
                    url : "http://localhost:9000/movies/"+$stateParams.title,
                    headers:{
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'DELETE',
                        'Content-Type':'application/json'
                    }
                }).success(function mySucces(response) {
                	console.log(response);
                	$state.go('list');
                	//console.log(editor.movie.movieTitle);
                    
                });
            }],
            views: {
                'movieContent@': {
                    templateUrl: 'app/home/list/movielist.html',
                    controller: 'MovieListController',
                    controllerAs: 'collector'
                }
            }
   
        });
    }
    
})();
