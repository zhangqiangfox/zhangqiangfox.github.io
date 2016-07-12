// 模块引入
var gulp = require('gulp'), //主模块
  less = require('gulp-less'), //编译模块
  minifycss = require('gulp-minify-css'), //css压缩
  minifyhtml = require('gulp-minify-html'), //html压缩
  uglify = require('gulp-uglify'), //js压缩
  concat = require('gulp-concat'), //合并文件
  postcss=require('gulp-postcss'),//css转换插件
  autoprefixer=require('autoprefixer-core'),//使用Autoprefixer来补全浏览器兼容的css
  mqpacker=require('css-mqpacker'),
  csswring=require('csswring'),
  path=require('path'),
  rename = require('gulp-rename'), //更换名称
  del = require('del');      


//html任务
gulp.task('html', function() {
  return gulp.src('index.html')
    .pipe(minifyhtml())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./'));
});

//less任务
gulp.task('less', function() {
  var processors=[
  autoprefixer({
        browsers:['last 4 version']//浏览器版本
  }),
  mqpacker,
  csswring
  ];
  return gulp.src('less/*.less') //引入路径
    .pipe(less()) //编译
    .pipe(postcss(processors))
    .pipe(minifycss()) //压缩
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dest')); //输出路径
});

//js任务
gulp.task('js', function() {
  return gulp.src('js/index.js')
    // .pipe(concat('index.js')) //合并所有js到index.js
    // .pipe(gulp.dest('js')) //输出main.js到文件夹
    
    .pipe(uglify()) //压缩
    .pipe(rename({
      suffix: '.min'
    })) //rename压缩后的文件名
    .pipe(gulp.dest('./dest')); //输出
});

// 清空之前缓存
gulp.task('clean', function(cb) {
  del(['dest', 'index.html'], cb);
});

//默认执行任务
gulp.task('default', ['clean', 'less', 'js', 'html'], function() {
  gulp.start('less', 'js', 'html');
});

