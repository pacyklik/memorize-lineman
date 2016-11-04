angular.module("app").controller('CheckKnowledgeController', function ($rootScope, $scope, $state, WordsService) {

    WordsService.listToCheck(function(response) {
        $scope.wordList = response.data;
    });

    alert($scope.wordList);

});
