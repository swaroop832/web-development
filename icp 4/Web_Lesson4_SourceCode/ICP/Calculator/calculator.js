angular.module('CalculatorApp', [])
    .controller('CalculatorController', function ($scope) {

        $scope.multiply = function (my) {
            
            $scope.answer = my.val1 * my.val2;
        };
        $scope.add = function (my) {
            
            $scope.answer = my.val1 + my.val2;
        };
        $scope.sub =function (my) {

            $scope.answer = my.val1 - my.val2;
        };
        $scope.div = function (my) {

            $scope.answer = my.val1-my.val2;
        }
    });