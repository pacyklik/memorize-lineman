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
        })
        .state("READ_NEW", {
            url: "/read_new",
            templateUrl: 'read_new.html'
            //controller: 'ReadNewController'
        })
        .state("CHECK_KNOWLEDGE", {
            url: "/check_knowledge",
            templateUrl: 'check_knowledge.html',
            controller: 'CheckKnowledgeController'
        })
        .state("PREPARE_WORDS", {
            url: "/prepare_words",
            templateUrl: 'prepare_words.html',
            controller: 'PrepareWordsController'
        })
        .state("LESSON", {
            url: "/lesson",
            templateUrl: 'lesson.html',
            controller: 'LessonController'
        })
        .state("YOUR_WORDS", {
            url: "/your_words",
            templateUrl: 'your_words.html',
            controller: 'YourWordsController'
        })
        .state("STATS", {
            url: "/stats",
            templateUrl: 'stats.html',
            controller: 'StatsController'
        });

    $urlRouterProvider.otherwise("/login");
});
