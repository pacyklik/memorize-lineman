angular.module("app").config(function ($translateProvider) {
    $translateProvider.translations('pl', {
        'TITLE': 'Tytuł',
        'READ_NEW': 'Wczytaj nowe',
        'CHECK_KNOWLEDGE': 'Sprawdź znajomość',
        'PREPARE_WORDS': 'Przygotuj słówka',
        'LESSON': 'NAUKA',
        'YOUR_WORDS': 'Twoje słówka',
        'STATS': 'Statystyki',
        'LOGGED_AS': 'Jesteś zalogowany jako:',
        'LOGOUT': 'Wyloguj się',
        'KNOW': 'Znam',
        'TO_LEARN': 'Do nauki',
        'SAVE': 'Zapisz',
        'SKIP': 'Pomiń',
        'YES': 'TAK',
        'NO': 'NIE',
        '': ''
    });

    $translateProvider.preferredLanguage('pl');
});