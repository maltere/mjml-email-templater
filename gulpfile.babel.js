import gulp from 'gulp'
import data from 'gulp-data'
import nunjucks from 'gulp-nunjucks'
import mjml from 'gulp-mjml'
import mjmlEngine from 'mjml'

const dest = gulp.dest

const renderData = async function (file) {
  return {}
}

const compileEmails = async function () {
  const mjmlInstance = mjml(mjmlEngine, { minify: true })

  gulp.src('./emails/**/*.mjml')
    .pipe(mjmlInstance)
    .pipe(dest('./dist/emails/'))
    .pipe(data(renderData))
    .pipe(nunjucks.compile())
    .pipe(dest('./dist/preview/'))
}

gulp.task('default', compileEmails)
