module.exports = function (grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                files: [
                    {
                        outputstyle: '',
                        expand: true,
                        cwd: 'sources/stylesheets/base/',
                        src: ['base.scss'],
                        dest: 'lib/css_modules',
                        ext: '.css'
                    },
                    {
                        outputstyle: '',
                        expand: true,
                        cwd: 'sources/stylesheets/layout/',
                        src: ['layout.scss'],
                        dest: 'lib/css_modules',
                        ext: '.css'
                    },
                    {
                        outputstyle: '',
                        expand: true,
                        cwd: 'sources/stylesheets/components/',
                        src: ['components.scss'],
                        dest: 'lib/css_modules',
                        ext: '.css'
                    }
                ]
            }
        },

        myth: {
            compile: {
                expand: true,
                cwd: 'lib/css_modules',
                src: ['*.css', '!*.min.css'],
                dest: 'lib/css_modules',
                ext: '.css'
            }
        },

        concat: {
            apps: {
                src: 'lib/css_modules/*.css',
                dest: 'lib/dist/style.css'
            }
        },

        cssmin: {
            minify: {
                expand: true,
                cwd: 'lib/dist',
                src: ['*.css', '!*.min.css'],
                dest: 'lib/dist',
                ext: '.min.css'
            },
            release: {
                expand: true,
                cwd: 'lib/dist',
                src: ['*.css', '!*.min.css'],
                dest: 'lib/dist',
                ext: '.min.css'
            }
        },
        sprite: {
            all: {
                src: 'icons/*.png',
                dest: 'lib/sprites/spritesheet.png',
                destCss: 'sources/stylesheets/sprites.scss',
                padding: 5
            }
        },
        autoprefixer: {
            dist: {
                files: {
                    'lib/dist/style.css': 'lib/dist/style.css'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'images/',
                        'lib/sprites/spritesheet.png',
                        'lib/dist/*.css',
                        'pages/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        },
        watch: {
            sass: {
                files: '**/*.scss',
                tasks: ['sass', 'myth', 'concat', 'cssmin', 'autoprefixer']
            },
            // sprite: {
            //     files: 'icons/*.png',
            //     tasks: ['sprite']
            // }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-myth');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-browser-sync');


    // Default task.
    grunt.registerTask('default', [
        'sass',
        'concat',
        'myth',
        'cssmin:minify',
        'cssmin:release',
        'sprite',
        'autoprefixer'

    ]);
    grunt.registerTask('reload', ['browserSync', 'watch']);

};