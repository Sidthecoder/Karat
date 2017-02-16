    var gulp = require('gulp');
    var minifyCSS = require('gulp-minify-css');
    var pkg = require('./package.json');
    var comment = '\/*\r\n* Karat ' + pkg.version + '\r\n* Copyright 2017, Sid Hegde\r\n* http:\/\/website.com\/\r\n* Free to use under the MIT license.\r\n* https:\/\/github.com\/Sidthecoder\/Karat\/LICENSE\r\n*\/\r\n';
    
    gulp.task('minify', function() {
        return gulp.src(['src/grid.css', 'src/padding.css'])
            .pipe(minifyCSS())
            .pipe($.header(comment))
            .pipe($.size())
            .pipe($.concat('main.min.css'))
            .pipe(gulp.dest('dist'));
    });
    
    gulp.task('watch', function() {
      gulp.watch(['src/*.css'], ['default']);
    });

gulp.task('default', ['minify']);
