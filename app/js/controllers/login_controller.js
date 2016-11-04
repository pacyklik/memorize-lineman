angular.module("app").controller('LoginController', function ($scope, $state, AuthenticationService) {
    $scope.credentials = {username: "", password: ""};

    var onLoginSuccess = function () {
        $state.go("home");
    };

    var onLoginFailure = function () {
        alert('B��d logowania!');
    };

    $scope.login = function () {
        AuthenticationService.login($scope.credentials, onLoginSuccess, onLoginFailure);
    };
});
