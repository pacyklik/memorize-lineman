angular.module("app").controller('YourWordsController', function ($rootScope, $scope, $state, WordsService) {
    $scope.headers = [
        {name: "WORD", value: "word"},
        {name: "TRANSLATE", value: "translate"},
        {name: "LESSON", value: "lesson"},
        {name: "PREPARED", value: "prepared"},
        {name: "LEVEL_LEARNED", value: "levelLearned"}
    ];

    $scope.filter = {};

    $scope.page = 0;

    $scope.reloadWords = function () {
        console.info("reloadWords()");
        WordsService.getWords($scope.page, $scope.filter, function (response) {
            $scope.words = response.data;
        });
    };

    $scope.changeSite = function (page) {
        console.info("changeSite()");
        WordsService.getWords(page, $scope.filter, function (response) {
            $scope.words = response.data;
        });
    };

    //$scope.reloadWords = function(page) {
    //    $scope.filter.page = page;
    //    $scope.reloadWords();
    //};

    WordsService.getLessons(function (response) {
        $scope.lessons = response.data;
    });

    $scope.reloadWords();

});
