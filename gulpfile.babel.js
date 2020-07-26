import gulp from 'gulp'
import rename from 'gulp-rename'
import data from 'gulp-data'
import nunjucks from 'gulp-nunjucks'
import mjml from 'gulp-mjml'
import mjmlEngine from 'mjml'

import renderData from './render_data'

const dest = gulp.dest

const getRenderData = async function (file) {
  return renderData
}

const compileEmails = async function () {
  const mjmlInstance = mjml(mjmlEngine, { minify: true })

  return gulp.src('./emails/**/*.mjml')
    .pipe(mjmlInstance)
    .pipe(dest('./dist/emails/'))
    .pipe(data(getRenderData))
    .pipe(nunjucks.compile())
    .pipe(dest('./dist/preview/'))
}
gulp.task('compileEmails', compileEmails)

const createTxtEmailPreview = async function () {
  return gulp.src('./emails/**/*.txt')
    .pipe(dest('./dist/emails/'))
    .pipe(data(getRenderData))
    .pipe(nunjucks.compile())
    .pipe(rename({ extname: '.txt' }))
    .pipe(dest('./dist/preview/'))
}
gulp.task('createTxtEmailPreview', createTxtEmailPreview)

const build = async function () {
  const builder = gulp.parallel('compileEmails', 'createTxtEmailPreview')
  builder()
}
gulp.task('build', build)

const watch = function () {
  gulp.watch('./emails/**/*.mjml', gulp.series('compileEmails'))
  gulp.watch('./emails/**/*.txt', gulp.series('createTxtEmailPreview'))
}
gulp.task('watch', watch)

gulp.task('default', gulp.series('build'))
