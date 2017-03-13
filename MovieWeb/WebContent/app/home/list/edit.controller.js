(function() {
    'use strict';

    angular
        .module('movieApp')
        .controller('MovieEditController', MovieEditController);

    MovieEditController.$inject = ['$stateParams','$http','$state'];

    function MovieEditController ($stateParams,$http,$state) {
        var editor = this;
        editor.movie = {};
        editor.edit = edit;
        editor.update = update;

        editor.edit($stateParams.title);
       // editor.update($stateParams.title);

        function edit (title) {
            var url = "http://localhost:9000/movies/"+title;
            console.log("Get Url:: "+url)
            $http({
                method : "GET",
                url : url,
                headers:{
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET',
                    'Content-Type':'application/json'
                }
            }).success(function mySucces(response) {
            	console.log(response);
            	editor.movie = response;
            	//console.log(editor.movie.movieTitle);
                
            });
        }
        
        function update () {
        	var url = "http://localhost:9000/movies/"+editor.movie.movieTitle;
            console.log("Update Url: "+url)
            $http({
                method : "PUT",
                url : url,
                headers:{
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'PUT',
                    'Content-Type':'application/json'
                },
                data:editor.movie
            }).success(function mySucces(response) {
            	console.log(response);
            	editor.movie = response;
            	$state.go('list');
            	//console.log(editor.movie.movieTitle);
                
            });
        }
    }
})();
