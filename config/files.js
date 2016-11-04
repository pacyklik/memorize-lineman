/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function(lineman) {
  //Override file patterns here
  return {
    js: {
      vendor: [
        "vendor/js/angular.js",
        "vendor/js/angular-animate.js",
        "vendor/js/angular-bootstrap.min.js",
        "vendor/js/angular-ui-router.js",
        "vendor/js/angular-growl.js",
        "vendor/js/angular-confirm.js",
        "vendor/js/angular-translate.js",
        "vendor/js/angular-cookies.js",
        "vendor/js/jquery.js",
        "vendor/js/**/*.js"
      ],
      app: [
        "app/js/app.js",
        "app/js/**/*.js"
      ]
    },

    less: {
      compile: {
        options: {
          paths: ["vendor/css/normalize.css", "vendor/css/**/*.css", "app/css/**/*.less"]
        }
      }
    }
  };
};
