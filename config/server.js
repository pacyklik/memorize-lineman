/* Define custom server-side HTTP routes for lineman's development server
 *   These might be as simple as stubbing a little JSON to
 *   facilitate development of code that interacts with an HTTP service
 *   (presumably, mirroring one that will be reachable in a live environment).
 *
 * It's important to remember that any custom endpoints defined here
 *   will only be available in development, as lineman only builds
 *   static assets, it can't run server-side code.
 *
 * This file can be very useful for rapid prototyping or even organically
 *   defining a spec based on the needs of the client code that emerge.
 *
 */

module.exports = {
    drawRoutes: function (app) {

        var wordsToCheck = [
            {id: 1, word: 'attempt', translate: 'próba', know: false},
            {id: 2, word: 'concern', translate: 'troska', know: false},
            {id: 3, word: 'opportunity', translate: 'okazja', know: false},
            {id: 4, word: 'post', translate: 'stanowisko', know: false},
            {id: 5, word: 'recent', translate: 'niedawny', know: false},
            {id: 6, word: 'refer', translate: 'odnosić się', know: false},
            {id: 7, word: 'eventually', translate: 'ostatecznie', know: false},
            {id: 8, word: 'craft', translate: 'rzemiosło', know: false},
            {id: 9, word: 'throughout', translate: 'poprzez', know: false},
            {id: 10, word: 'familiar', translate: 'znajomy', know: false}
        ];

        var words = [
            {id: 1, word: 'attempt', translate: 'próba', lesson: '0600', prepared: false, levelLearned: 0},
            {id: 2, word: 'concern', translate: 'troska', lesson: '0600', prepared: false, levelLearned: 0},
            {id: 3, word: 'opportunity', translate: 'okazja', lesson: '0600', prepared: false, levelLearned: 0},
            {id: 4, word: 'post', translate: 'stanowisko', lesson: '0600', prepared: false, levelLearned: 0},
            {id: 5, word: 'recent', translate: 'niedawny', lesson: '0600', prepared: false, levelLearned: 0},
            {id: 6, word: 'refer', translate: 'odnosić się', lesson: '0600', prepared: false, levelLearned: 0},
            {id: 7, word: 'eventually', translate: 'ostatecznie', lesson: '0600', prepared: false, levelLearned: 0},
            {id: 8, word: 'craft', translate: 'rzemiosło', lesson: '0600', prepared: false, levelLearned: 0},
            {id: 9, word: 'throughout', translate: 'poprzez', lesson: '0600', prepared: false, levelLearned: 0},
            {id: 10, word: 'familiar', translate: 'znajomy', lesson: '0600', prepared: false, levelLearned: 0}
        ];

        app.post('/login', function (req, res) {
            res.json({message: 'logging in!'});
        });

        app.post('/logout', function (req, res) {
            res.json({message: 'logging out!'});
        });

        app.get('/api/words/list_to_check', function (req, res) {
            res.json(wordsToCheck);
        });

        app.post('/api/words/list_to_check', function (req, res) {
            res.json(wordsToCheck);
        });

        app.get('/api/words/get_words/:page', function (req, res) {
            //alert('>>> ' + req.params.page);
            res.json(words);
        });

    }
};
