module.exports = function (lineman) {
    //Override application configuration here. Common examples follow in the comments.
    return {

        server: {
            pushState: true,

            apiProxy: {
                enabled: true,
                host: '127.0.0.1',
                port: 8080,
                prefix: 'api'
            }
        },

        livereload: true

    };
};
