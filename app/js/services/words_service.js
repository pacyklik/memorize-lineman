angular.module("app").factory('WordsService', function ($http) {

    var onFailure = function () {
        alert('ERROR!');
    }

    var listToCheck = function (onSuccess) {
        $http.get('/api/words/list_to_check').then(onSuccess, onFailure);
    };

    var updateListToCheck = function (data, onSuccess) {
        $http.post('/api/words/list_to_check', data).then(onSuccess, onFailure);
    };

    var getWords = function (filter, onSuccess) {
        $http.get('/api/words/get_words/' + filter.page).then(onSuccess, onFailure);
    };

    return {
        listToCheck: listToCheck,
        updateListToCheck: updateListToCheck,
        getWords: getWords
    };

});