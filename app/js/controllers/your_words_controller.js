angular.module("app").controller('YourWordsController', function ($rootScope, $scope, $state, WordsService) {
    $scope.headers = [
        {name: "WORD", value: "word"},
        {name: "TRANSLATE", value: "translate"},
        {name: "LESSON", value: "lesson"},
        {name: "PREPARED", value: "prepared"},
        {name: "LEVEL_LEARNED", value: "levelLearned"}
    ];

    $scope.filter = {
        page: 0
    };

    $scope.reloadWords = function() {
        WordsService.getWords($scope.filter, function (response) {
            $scope.words = response.data;
        });
    };

    WordsService.getLessons(function (response) {
        $scope.lessons = response.data;
    });

    $scope.reloadWords();

});
