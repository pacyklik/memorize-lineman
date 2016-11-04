angular.module("app").controller('NavigationController', function ($scope, $state) {

    $scope.nav = function (address) {
        $state.go(address);
    };

});