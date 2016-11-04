angular.module("app").controller('HomeController', function ($scope, $state, AuthenticationService) {
    $scope.title = "Home";
    $scope.message = "Mouse Over these images to see a directive at work";

    var onLogoutSuccess = function (response) {
        $state.go("login");
    };

    $scope.logout = function () {
        AuthenticationService.logout(onLogoutSuccess);
    };
});
