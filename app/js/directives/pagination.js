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
        link: function (scope, element, attrs) {
            console.log('scope.perPage > ' + scope.perPage);
            console.log('scope.totalItems > ' + scope.totalItems);
            scope.currentPage = 1;
            scope.totalPages = scope.totalItems / scope.perPage;

            scope.refresh = function () {
                scope.listPages = [];
                var i;
                if (scope.totalPages < 10) {
                    for (i = 1; i <= scope.totalPages; i++) {
                        scope.listPages.push({num: i});
                    }
                } else {
                    if (scope.currentPage <= 4) {
                        for (i = 1; i <= 5; i++) {
                            scope.listPages.push({num: i});
                        }
                        scope.listPages.push({num: '...'});
                        scope.listPages.push({num: (scope.totalPages - 1)});
                        scope.listPages.push({num: scope.totalPages});
                    } else if (scope.currentPage > scope.totalPages - 4) {
                        scope.listPages.push({num: 1});
                        scope.listPages.push({num: 2});
                        scope.listPages.push({num: '...'});
                        for (i = scope.totalPages - 4; i <= scope.totalPages; i++) {
                            scope.listPages.push({num: i});
                        }
                    } else {
                        scope.listPages.push({num: 1});
                        scope.listPages.push({num: 2});
                        scope.listPages.push({num: '...'});
                        scope.listPages.push({num: scope.currentPage - 1});
                        scope.listPages.push({num: scope.currentPage});
                        scope.listPages.push({num: scope.currentPage + 1});
                        scope.listPages.push({num: '...'});
                        scope.listPages.push({num: scope.totalPages - 1});
                        scope.listPages.push({num: scope.totalPages});
                    }
                }
            };
            scope.refresh();

            scope.setPage = function (page) {
                if (page !== '...') {
                    if (page < 1) {
                        page = 1;
                    }
                    if (page > scope.totalPages) {
                        page = scope.totalPages;
                    }
                    scope.currentPage = page;
                    scope.refresh();
                    scope.onChange(page);
                }
            };
        }
    };
});