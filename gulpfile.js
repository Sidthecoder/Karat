    var gulp = require('gulp');
    var minifyCSS = require('gulp-minify-css');
    var pkg = require('./package.json');
    
    
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
