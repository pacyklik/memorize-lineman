var app = angular.module("app", ["ui.router", "ui.bootstrap", "pascalprecht.translate"]);
//var app = angular.module("app", ["pascalprecht.translate", "ngAnimate", "ui.bootstrap",
//  "ui.router", "angular-growl", "angular-confirm", "ngCookies"]);

app.run(function ($rootScope) {
    // adds some basic utilities to the $rootScope for debugging purposes
    //$rootScope.log = function(thing) {
    //  console.log(thing);
    //};
    //
    //$rootScope.alert = function(thing) {
    //  alert(thing);
    //};
    $rootScope.$on('$stateChangeSuccess', function (event, fromState, fromParams, toState, toParams) {
        console.log(JSON.stringify(fromState) + " -> " + JSON.stringify(toState));
    });
});

//app.config(function (growlProvider, $httpProvider) {
//    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
//});

