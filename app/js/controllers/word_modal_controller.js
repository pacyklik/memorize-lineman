angular.module('app').controller('WordModalController', function ($scope, $uibModalInstance, WordsService, params) {

    WordsService.getWord(params.id, function (response) {
        $scope.word = response.data;
    });

    $scope.save = function() {
        $uibModalInstance.close($scope.word);
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss();
    };

});