angular.module("app").controller('CheckKnowledgeController', function ($rootScope, $scope, $state, WordsService) {

    WordsService.listToCheck(function(response) {
        $scope.translate = false;
        $scope.numOfWord = 0;
        $scope.wordList = response.data;
        $scope.flashcard = $scope.wordList[$scope.numOfWord];
    });

    $scope.reload = function() {
        alert("wczytuje nowy pakiet: " + JSON.stringify($scope.wordList));
        WordsService.updateListToCheck($scope.wordList, function(response) {
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
        if ($scope.numOfWord === 10) {
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

    //alert($scope.wordList);

});
