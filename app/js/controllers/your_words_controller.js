angular.module("app").controller('YourWordsController', function ($rootScope, $scope, $state, WordsService) {
    $scope.headers = [
        {name: "WORD", value: "word"},
        {name: "TRANSLATE", value: "translate"},
        {name: "LESSON", value: "lesson"},
        {name: "PREPARED", value: "prepared"},
        {name: "LEVEL_LEARNED", value: "levelLearned"}
    ];

    var filter = [

    ];

    WordsService.getWords(filter, function (response) {
        $scope.words = response.data;
    });
});
