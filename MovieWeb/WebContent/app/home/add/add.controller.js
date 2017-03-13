(function() {
    'use strict';

    angular
    .module('movieApp')
    .controller('MovieAddController', MovieAddController);
    
    MovieAddController.$inject = ['$scope', 'Principal', 'LoginService', '$state' , '$http'];
    
    function MovieAddController ($scope, Principal, LoginService, $state, $http) {
        var creator = this;
        
        creator.movie = {};
        creator.addMovie = addMovie;
        creator.showMessage = false;
    		
        function addMovie() {
        	$http({
                method : "POST",
                url : "http://localhost:9000/movies",
                headers:{
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST',
                    'Content-Type':'application/json'
                },
                data:creator.movie
            }).success(function mySucces(response) {
            	console.log(response);
            	creator.status = true;
                creator.movies = response;
                if (response) {
                	$state.go('list');
                } else {
                	creator.showMessage = true;
                }
                	
            });	
        }
        
        

    }

})();
