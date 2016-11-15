angular.module("app").directive("onEnterBlur", function ($parse) {
    return function (scope, element, attrs) {
        var fn = $parse(attrs["onEnterBlur"]);
        console.log(attrs["onEnterBlur"]);
        var enter = function (event) {
            scope.$apply(function () {
                fn(scope, {$event: event});
            });
            event.preventDefault();
        };
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                enter(event);
            }
        });
        element.bind("blur", function (event) {
            enter(event);
        });
    };
});