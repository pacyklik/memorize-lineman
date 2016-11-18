angular.module("app").factory('WordsService', function ($http) {

    var onFailure = function () {
        alert('ERROR!');
    };

    var listToCheck = function (onSuccess) {
        $http.get('/api/words/list_to_check').then(onSuccess, onFailure);
    };

    var updateListToCheck = function (data, onSuccess) {
        $http.post('/api/words/list_to_check', data).then(onSuccess, onFailure);
    };

    var getSentences = function (onSuccess) {
        $http.get('/api/words/sentences').then(onSuccess, onFailure);
    };

    var updateSentences = function (data, onSuccess) {
        $http.post('/api/words/sentences', data).then(onSuccess, onFailure);
    };

    var getWords = function (page, filter, onSuccess) {
        var params = {};
        for (var key in filter) {
            var value = filter[key];
            if (value !== null && value !== '') {
                params[key] = value;
            }
        }
        $http.get('/api/words/get_words/' + page, {params: params}).then(onSuccess, onFailure);
    };

    var getWord = function (id, onSuccess) {
        $http.get('/api/word/' + id).then(onSuccess, onFailure);
    };

    var updateWord = function (word, onSuccess) {
        console.log("updateWord >> " + JSON.stringify(word));
        $http.post('/api/word/' + word.id, {params: word}).then(onSuccess, onFailure);
    };

    var getLessons = function (onSuccess) {
        $http.get('/api/lessons/get_lessons').then(onSuccess, onFailure);
    };

    var getLessonsToLearn = function (onSuccess) {
        $http.get('/api/lessons/get_lessons_to_learn').then(onSuccess, onFailure);
    };

    return {
        listToCheck: listToCheck,
        updateListToCheck: updateListToCheck,
        getSentences: getSentences,
        updateSentences: updateSentences,
        getWords: getWords,
        getWord: getWord,
        updateWord: updateWord,
        getLessons: getLessons,
        getLessonsToLearn: getLessonsToLearn
    };

});