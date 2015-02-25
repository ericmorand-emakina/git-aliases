module.exports = function( grunt ) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    /**
     * please read the documentation on grunt before changing anything
     * http://gruntjs.com/getting-started
     * http://gruntjs.com/configuring-tasks
     */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: { // grunt-contrib-watch
            options: {
                livereload: false
            },
            aliases: {
                files: ['src/**'],
                tasks: ['concat']
            }
        },
        concat: { // grunt-contrib-concat
            options: {
                banner: '# <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>'
            },
            aliases: {
                src: ['src/**'],
                dest: 'dist/git-aliases'
            }
        }
    });

    grunt.registerTask('default', [
        'concat',
        'watch'
    ]);
};