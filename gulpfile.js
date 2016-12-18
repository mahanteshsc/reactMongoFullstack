var gulp =require('gulp');
var liveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var source = require('vinyl-source-stream');
var browserify =  require('browserify');
var reactify =  require('reactify');

gulp.task('live-server', function(){
    var server = new liveServer('server/main.js');
    server.start();
})


gulp.task('bundle', ['copy', 'copy2'],function(){
  return browserify({
      entries: 'app/main.jsx',
      debug: true,

  }).transform(reactify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./.tmp'));
})

gulp.task('copy',function(){
    gulp.src(['app/*.css'])
    .pipe(gulp.dest('./.tmp'));
})

gulp.task('copy2',function(){
    gulp.src(['bower_components/skeleton/css/*.css'])
    .pipe(gulp.dest('./.tmp'));
})

gulp.task('serve', ['bundle','live-server'], function(){
  browserSync.init(null,{
    proxy : "http://localhost:7777",
    port:9001
  });
})
