angular.module("app").factory('AuthenticationService', function ($http, $rootScope, $window) {

    var login = function (credentials, onSuccess, onFailure) {
        var headers = credentials ? {authorization: "Basic " + btoa(credentials.username + ":" + credentials.password)} : {};
        var params = credentials ? {'remember-me': credentials.remember_me} : {};
        $http.get('/api/user', {headers: headers, params: params}).then(function (response) {
            if (response.data.name) {
                console.log(response);
                $rootScope.userInfo = {
                    sessionId: response.data.details.sessionId,
                    userName: response.data.name
                };
                $window.sessionStorage["userInfo"] = JSON.stringify($rootScope.userInfo);
                $rootScope.authenticated = true;
            } else {
                $window.sessionStorage["userInfo"] = undefined;
                $rootScope.authenticated = false;
            }
            if (onSuccess) onSuccess();
        }, function (error) {
            $window.sessionStorage["userInfo"] = undefined;
            $rootScope.authenticated = false;
            if (onFailure) onFailure();
        });
    };
    var logout = function (callback) {
        $http.post('/api/logout', {}).finally(function () {
            $rootScope.authenticated = false;
            $window.sessionStorage["userInfo"] = undefined;
            if (callback) callback();
        })
    };

    return {
        login: login,
        logout: logout
    };
});


//angular.module("app").factory('AuthenticationService', function ($scope, $http, $rootScope, $window) {
//
//    $scope.credentials = {
//        username: null,
//        password: null,
//        remember_me: false
//    };
//
//    $rootScope.userInfo = null;
//

//
//    var login = function (credentials, onLoginSuccess) {
//        //return authenticate(credentials, onLoginSuccess);
//        return $http.post('/login', credentials);
//    };
//    var logout = function () {
//        return $http.post('/logout');
//    };
//
//    return {
//        login: login,
//        logout: logout
//    };
//});
