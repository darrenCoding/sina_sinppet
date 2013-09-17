'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('gadgets.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    clean: {
      src: ['dist']
    },
    dirs: {
      jsrc: 'src/js',
      jdest: 'dist/js',
      csrc: 'src/css',
      cdest: 'dist/js'     
    },
    meta: {
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %> */'
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: '<%= dirs.csrc%>/*.css',
        dest: 'dist/css/main.css'
      },
    },
    cssmin: {
       // options: {
       //    default_line_ending: unix
       //  },
        css: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/css/main.min.css'
      },
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/js/test.min.js'
      },
      shop: {
        src: '<%= concat.shop.dest %>',
        dest: 'dist/js/shop.min.js'
      },
    },
    imagemin: {
            dist: {
                options: {
                    optimizationLevel: 3 //定义 PNG 图片优化水平
                },
                files: [
                       {
                    expand: true,
                    cwd: 'src/img/',
                    src: ['**/*.{png,jpg,jpeg,JPEG,GIF}'], // 优化 img 目录下所有 png/jpg/jpeg 图片
                    dest: 'src/img/' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
                    }
                    ]
                }
    },  
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      gruntfile: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: 'Gruntfile.js'
      },
      src: {
        options: {
          jshintrc: 'src/js/.jshintrc'
        },
        src: ['src/**/*.js']
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/**/*.js']
      },
    },
    'jsmin-sourcemap': {
      all: {
        src: ['dist/js/shop.js'],
        dest: 'dist/js/shop.min.js',
        destMap: 'dist/js/shop.min.jsmin-grunt.js.map'
      }
    },
    csslint: {
      gruntfile: {
        options: {
          csslintrc: '.csslintrc'
        },
        src: 'Gruntfile.js'
      },
      src: {
        options: {
          jshintrc: 'src/css/.csslintrc'
        },
        src: ['src/**/*.css']
      },
      test: {
        options: {
          jshintrc: 'test/.csslintrc'
        },
        src: ['test/**/*.css']
      },
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      src: {
        files: '<%= jshint.src.src %>',
        tasks: ['jshint:src', 'qunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'qunit']
      },
      img: {
                files: ['<%= jshint.gruntfile.src %>/**/*.{png,jpg,jpeg}'],
                options: {
                    livereload: true
                }
            },
    },
    lineending: {
        dist: {
          options: {
            eol: 'crlf'
          },
          files: [{
            expand: true,
            cwd: './',
            src: ['dist/css/*'],
            dest: 'dist/css/'
          }]
        }
      },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-lineending');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsmin-sourcemap');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task.
  // grunt.registerTask('default', [ 'jshint','qunit', 'clean', 'concat', 'uglify', 'cssmin','imagemin','jsmin-sourcemap']);
  grunt.registerTask('default', ['clean', 'concat','cssmin','imagemin','lineending']);

};
