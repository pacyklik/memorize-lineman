angular.module("app").controller('LoginController', function ($rootScope, $scope, $state, AuthenticationService) {
    $scope.credentials = {username: "", password: ""};

    var onLoginSuccess = function () {
        $rootScope.authenticated = true;
        $state.go("home");
    };

    var onLoginFailure = function () {
        alert('Błąd logowania!');
    };

    $scope.login = function () {
        AuthenticationService.login($scope.credentials, onLoginSuccess, onLoginFailure);
    };
});
