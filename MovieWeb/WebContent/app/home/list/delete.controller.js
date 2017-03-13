(function() {
    'use strict';

    angular
        .module('movieApp')
        .controller('MovieDeleteController', MovieDeleteController);

    MovieDeleteController.$inject = ['$uibModalInstance', '$http', 'entity'];

    function MovieDeleteController ($uibModalInstance, $http, entity) {
        var remover = this;
        
        remover.movie=entity;
        remover.clear = clear;
        remover.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (title) {
        	console.log(title)
        }
    }
})();
