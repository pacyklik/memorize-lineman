angular.module("app").directive("pagination", function ($parse) {
    return {
        // szablon
        templateUrl: "pagination.html",
        // typ znacznika - tu tag aka html
        restrict: "E",
        scope: {
            perPage: '@',
            totalItems: '@',
            onChange: '='
        },
        link: function(scope, element, attrs) {
            console.log('scope.perPage > ' + scope.perPage);
            console.log('scope.totalItems > ' + scope.totalItems);
            scope.currentPage = 1;
            scope.totalPages = scope.totalItems / scope.perPage;
            scope.listPages = [
                {num: 1},
                {num: 2},
                {num: 3, current: true},
                {num: 4},
                {num: '...'},
                {num: 9},
                {num: 10}
            ];


            scope.setPage = function (page) {
                if (page !== '...') {
                    if (page < 1) {
                        page = 1;
                    }
                    if (page > scope.totalPages) {
                        page = scope.totalPages;
                    }
                    scope.currentPage = page;
                    scope.onChange(page);
                }
            };
        }
    };
});