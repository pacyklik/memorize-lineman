angular.module("app").directive("pagination", function ($parse) {
    return {
        // szablon
        templateUrl: "pagination.html",
        // typ znacznika - tu tag aka html
        restrict: "E",
        scope: {
            page: '=',
            onChange: '='
        },
        link: function(scope, element, attrs) {
            scope.setPage = function (pge) {
                //scope.page = pge;
                //scope.onChange();
                //console.log(pge);
            };
        }
    };
});