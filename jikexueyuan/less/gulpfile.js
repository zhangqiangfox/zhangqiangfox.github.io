var gulp=require('gulp');
var less=require('gulp-less');
var postcss=require('gulp-postcss');//css转换插件
var autoprefixer=require('autoprefixer-core');//使用Autoprefixer来补全浏览器兼容的css
var mqpacker=require('css-mqpacker');
var csswring=require('csswring');
var path=require('path');
var rev=require('gulp-rev');
var rename=require('gulp-rename')


gulp.task('default',function(){
	var processors=[
	autoprefixer({
        browsers:['last 4 version']//浏览器版本
	}),
	mqpacker,
	csswring
	]
    return gulp.src('./css/style.less')
	.pipe(less())
	.pipe(postcss(processors))
	.pipe(rev())
	.pipe(rename('style.min.css'))
	.pipe(gulp.dest('./dest'));
})

