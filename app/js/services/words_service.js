angular.module("app").factory('WordsService', function ($http) {

    var onFailure = function () {
        alert('ERROR!');
    }

    var listToCheck = function (onSuccess) {
        $http.get('/api/words/list_to_check').then(onSuccess, onFailure);
    };


    return {
        listToCheck: listToCheck
    };

});