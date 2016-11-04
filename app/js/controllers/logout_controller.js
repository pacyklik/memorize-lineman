angular.module("app").controller('LogoutController', function ($rootScope, $scope, $state, AuthenticationService) {

    var onLogoutSuccess = function (response) {
        $rootScope.authenticated = false;
        $state.go("login");

    };

    $scope.logout = function () {
        AuthenticationService.logout(onLogoutSuccess);
    };
});