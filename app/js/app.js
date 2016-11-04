
var app = angular.module("app", ["ui.router", "ui.bootstrap", "pascalprecht.translate"]);

app.run(function($rootScope) {
  // adds some basic utilities to the $rootScope for debugging purposes
  $rootScope.log = function(thing) {
    console.log(thing);
  };

  $rootScope.alert = function(thing) {
    alert(thing);
  };
});
