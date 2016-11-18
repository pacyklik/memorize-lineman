angular.module("app").controller('NavigationController', function ($scope, $state) {

    $scope.nav = function (address) {
        console.log("nav(" + address + ")");
        $state.go(address);
    };

});