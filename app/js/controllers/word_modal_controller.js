angular.module('app').controller('WordModalController', function ($scope, $uibModalInstance, WordsService, params) {

    WordsService.getWord(params.id, function (response) {
        var key;
        $scope.word = response.data;

        var sentence = "";
        var sentenceTranslate = "";
        var sentencesL = response.data.sentence;
        var sentenceTranslateL = response.data.sentenceTranslate;
        for (key in sentencesL) {
            sentence += sentencesL[key] + "\n";
        }
        for (key in sentenceTranslateL) {
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