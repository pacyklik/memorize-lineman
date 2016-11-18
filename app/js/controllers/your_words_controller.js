angular.module("app").controller('YourWordsController', function ($rootScope, $scope, $state, $uibModal, WordsService) {
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

    $scope.editWord = function (id) {
        console.info("editWord(" + id + ")");

        var modalInstance = $uibModal.open({
            templateUrl: "word_modal.html",
            controller: "WordModalController",
            resolve: {
                params: function () {
                    return {
                        id: id
                    };
                }
            }
        });

        modalInstance.result.then(function (data) {
            WordsService.updateWord(data, function (response) {
                //$scope.words = response.data;
                $scope.words.forEach(function (item, number) {
                    if (item.id === response.data.id) {
                        console.log('number >>> ' + number);
                        $scope.words[number] = response.data;
                    }
                });
            });


            //CarService.allCars().then(function (response) {
            //    $scope.carData = response.data;
            //});
        });
    };

    WordsService.getLessons(function (response) {
        $scope.lessons = response.data;
    });

    $scope.reloadWords();

});
