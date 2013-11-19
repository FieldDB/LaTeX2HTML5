module.exports = function (grunt) {
    grunt.initConfig({

        dist: {
            // the files to concatenate
            src: ['vendor/*.js', 'lib/*.js'],
            // the location of the resulting JS file
            dest: 'dist/latex2html5.js'
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: [
                    'components/jquery/jquery.js',
                    'components/underscore/underscore.js',
                    'components/handlebars/handlebars.js',
                    'components/backbone/backbone.js', 
                    'components/layoutmanager/backbone.layoutmanager.js', 
                    'components/d3/d3.js',
                    'dist/latex2html5.templates.js',
                    'lib/init.js',
                    'lib/expressions.js',
                    'lib/parse.js',
                    'lib/psgraph.js',
                    'lib/renderer.js',
                    'plugins/latex2html5.image.js',
                    'plugins/latex2html5.waypoint.js',
                    'plugins/jquery.latex2html5.js'
                    ],
                dest: 'dist/latex2html5.js',
            },
        },
        uglify: {
            dist: {
                files: {
                    'dist/latex2html5.min.js': 'dist/latex2html5.js'
                }
            }
        },
        jshint: {
            // define the files to lint
            files: ['lib/*.js'],
            // configure JSHint (documented at http://www.jshint.com/docs/)
                options: {
                    // more options here if you want to override JSHint defaults
                    evil: true,
                    globals: {
                        jQuery: true,
                        console: true,
                        module: true
                    }
                }
        },
        handlebars: {
          compile: {
            options: {
              namespace: "JST"
            },
            files: {
              "dist/latex2html5.templates.js": ["templates/sliders.html"]
            }
          }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    
    // the default task can be run just by typing "grunt" on the command line
    grunt.registerTask('default', ['jshint', 'handlebars', 'concat', 'uglify']);

};
