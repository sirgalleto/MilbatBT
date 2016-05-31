(function() {
    'use strict';

    angular
        .module('milbatBT')
        .controller('GameController', GameController);

    GameController.$inject = ['$scope'];

    /* @ngInject */
    function GameController($scope) {
        activate();

        function activate() {
            $scope.image ={
                url: 'http://myminidisco.co.uk/wp-content/uploads/2012/04/blue-box1.png',
                background: 'orange'
            }
        }
    }
})();
