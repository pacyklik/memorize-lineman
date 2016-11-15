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
        var page = filter.page;
        var params = {};
        for (var key in filter) {
            var value = filter[key];
            if (value !== null && value !== '' && key !== 'page') {
                params[key] = value;
            }
        }
        $http.get('/api/words/get_words/' + page, {params: params}).then(onSuccess, onFailure);
    };

    var getLessons = function (onSuccess) {
        $http.get('/api/lessons/get_lessons').then(onSuccess, onFailure);
    };

    return {
        listToCheck: listToCheck,
        updateListToCheck: updateListToCheck,
        getWords: getWords,
        getLessons: getLessons
    };

});