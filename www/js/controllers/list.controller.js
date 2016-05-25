(function() {
    'use strict';

    angular
        .module('milbatBT')
        .controller('ListController', ListController);

    ListController.$inject = ['$scope', '$ionicPlatform'];

    /* @ngInject */
    function ListController($scope, $ionicPlatform) {

        $scope.getList = getList;

        $ionicPlatform.ready(function(){
            getList();
        });

        function getList() {
            if(window.bluetoothSerial){
                bluetoothSerial.list(
                    function(data){
                        $scope.dispositives = data;
                        $scope.$apply();
                        $scope.$broadcast('scroll.refreshComplete');
                    },
                    function(error){
                        $scope.error = error;
                        $scope.$broadcast('scroll.refreshComplete');
                    }
                );
            }
            else{
                $scope.$broadcast('scroll.refreshComplete');
            }
        }
    }
})();
