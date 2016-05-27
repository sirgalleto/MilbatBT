(function() {
    'use strict';

    angular
    .module('milbatBT')
    .controller('ListController', ListController);

    ListController.$inject = [
        '$scope', '$ionicPlatform', '$cordovaBluetoothLE', '_'
    ];

    /* @ngInject */
    function ListController($scope, $ionicPlatform, $cordovaBluetoothLE, _) {
        $scope.dispositives = [];

        $ionicPlatform.ready(function(){
            $cordovaBluetoothLE.initialize({request:true}).then(null,
                function(obj) {
                    alert('Error: ' + obj.message);
                },
                function() {
                    scan();
                }
            );
        });

        function scan() {
            $cordovaBluetoothLE.startScan({services:[]}).then(null,
                function(obj) {
                    alert('Error: ' + obj.message);
                },
                function(data) {
                    console.log(data);
                    if (data.status == "scanResult") {
                        if(!_.findWhere($scope.dispositives, {address: data.address})){
                            $scope.dispositives.push(data);
                        }
                    }
                    else if (data.status == "scanStarted") {}
                }
            );
        }
    }
})();
