angular.module("app").controller('LessonController', function ($rootScope, $scope, $state, WordsService) {

    WordsService.getSentences(function(response) {
        $scope.translate = false;
        $scope.numOfWord = 0;
        $scope.wordList = response.data;
        $scope.wordListLength = response.data.length;
        $scope.flashcard = $scope.wordList[$scope.numOfWord];
    });

    WordsService.getLessonsToLearn(function (response) {
        $scope.lessons = response.data;
        $scope.checkedLesson = "all";
    });

    $scope.reload = function() {
        alert("wczytuje nowy pakiet: " + JSON.stringify($scope.wordList));
        WordsService.updateSentences($scope.wordList, function(response) {
            $scope.translate = false;
            $scope.numOfWord = 0;
            $scope.wordList = response.data;
            $scope.flashcard = $scope.wordList[$scope.numOfWord];
        });
    };

    $scope.know = function() {
        $scope.translate = false;
        $scope.flashcard.know = true;
        $scope.wordList[$scope.numOfWord] = $scope.flashcard;
        $scope.numOfWord++;
        if ($scope.numOfWord === $scope.wordListLength) {
            $scope.reload();
        }
        $scope.flashcard = $scope.wordList[$scope.numOfWord];

        console.log(JSON.stringify($scope.wordList));
    };

    $scope.toLearn = function() {
        $scope.translate = false;
        $scope.numOfWord++;
        if ($scope.numOfWord === 10) {
            $scope.reload();
        }
        $scope.flashcard = $scope.wordList[$scope.numOfWord];

        console.log(JSON.stringify($scope.wordList));
    };

});
