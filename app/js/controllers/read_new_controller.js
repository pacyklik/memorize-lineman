var myApp = angular.module("app");

myApp.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function () {
                scope.$apply(function () {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

myApp.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function (file, uploadUrl, onSuccess) {
        var fd = new FormData();
        fd.append('file', file);

        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        }).then(onSuccess, function () {
            alert('ERROR!');
        });
    };
}]);

myApp.controller('ReadNewController', ['$scope', 'fileUpload', function ($scope, fileUpload) {
    $scope.uploadFile = function () {
        var file = $scope.myFile;
        var uploadUrl = "/api/fileUpload";

        console.log('file is ');
        console.dir(file);

        fileUpload.uploadFileToUrl(file, uploadUrl, function (response) {
            alert("Utworzono lekcję: " + response.data.lessonName);
            $('#input_file').val('');
        });
    };
}]);
