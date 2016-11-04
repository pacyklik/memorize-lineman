// dodajemy routing
// zaleznie czy jest /#/ czy /#/list co innego sie pobierze i wyswietli
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("login", {
            url: "/login",
            templateUrl: 'login.html',
            controller: 'LoginController'
        }).state("home", {
            url: "/home",
            templateUrl: 'home.html',
            controller: 'HomeController'
        });

    $urlRouterProvider.otherwise("/login");
});
