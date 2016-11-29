angular.module('app').controller('WordModalController', function ($scope, $uibModalInstance, WordsService, params) {

    WordsService.getWord(params.id, function (response) {
        $scope.word = response.data;

        var sentence = "";
        var sentenceTranslate = "";
        var sentencesL = response.data.sentence;
        var sentenceTranslateL = response.data.sentenceTranslate;
        for (var key in sentencesL) {
            sentence += sentencesL[key] + "\n";
        }
        for (var key in sentenceTranslateL) {
            sentenceTranslate += sentenceTranslateL[key] + "\n";
        }
        $scope.word.sentence = sentence;
        $scope.word.sentenceTranslate = sentenceTranslate;
    });

    $scope.save = function () {
        $uibModalInstance.close($scope.word);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss();
    };

});