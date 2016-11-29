angular.module("app").factory('WordsService', function ($http) {

    var onFailure = function () {
        alert('ERROR!');
    };

    var listToCheck = function (onSuccess) {
        $http.get('/api/words/to_check').then(onSuccess, onFailure);
    };

    var updateListToCheck = function (data, onSuccess) {
        $http.post('/api/words/to_check', data).then(onSuccess, onFailure);
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
        $http.get('/api/words/find/' + page, {params: params}).then(onSuccess, onFailure);
    };

    var getWord = function (id, onSuccess) {
        $http.get('/api/words/' + id).then(onSuccess, onFailure);
    };

    var updateWord = function (word, onSuccess) {
        //console.log("updateWord before >> " + JSON.stringify(word));
        //console.log(word.sentence instanceof Array);
        if (!(word.sentence instanceof Array)) {
            word.sentence = word.sentence.split("\n");
        }
        if (!(word.sentenceTranslate instanceof Array)) {
            word.sentenceTranslate = word.sentenceTranslate.split("\n");
        }
        //console.log("updateWord after >> " + JSON.stringify(word));
        //console.log(word.sentence instanceof Array);
        $http.post('/api/words/' + word.id, word).then(onSuccess, onFailure);
    };

    var getLessons = function (onSuccess) {
        $http.get('/api/lessons/all').then(onSuccess, onFailure);
    };

    var getLessonsToLearn = function (onSuccess) {
        $http.get('/api/lessons/to_learn').then(onSuccess, onFailure);
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