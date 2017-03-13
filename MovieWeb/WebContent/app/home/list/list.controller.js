(function() {
    'use strict';

    angular
        .module('movieApp')
        .controller('MovieListController', MovieListController);
    
    
    MovieListController.$inject = ['$http'];

    function MovieListController ($http) {
        var collector = this;
        
        collector.movies = null;
                
        $http({
            method : "GET",
            url : "http://localhost:9000/movies",
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Content-Type':'application/json'
            }
        }).success(function mySucces(response) {
        	console.log(response);
        	collector.status = true;
        	collector.movies = response;
            
        });

    }
    
    
})();
