(function() {
    'use strict';

    angular
        .module('milbatBT')
        .directive('milbatGame', milbatGame);

    /* @ngInject */
    function milbatGame($timeout) {
        var directive = {
            restrict: 'EA',
            templateUrl: 'templates/milbatGame.tpl.html',
            scope: {
                'image': '=', // Url of box image
                'distance': '@', // Number of pixel by step
                'vel': '@' // Number into 1 or 10 defined the velocity
            },
            link: linkFunc,
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

            var box = el.find('img');
            var timeout;

            scope.tap = move;
            scope.hold = hold;
            scope.stop = stop;

            function hold() {
                move();
                timeout = $timeout(hold, 100/Number(scope.vel));
            }

            function stop() {
                $timeout.cancel(timeout);
            }

            function move() {
                var actual = parseInt(box.css('left'), 10) || 0;
                box.css('left', actual + Number(scope.distance) + 'px');
            }
        }
    }
})();
