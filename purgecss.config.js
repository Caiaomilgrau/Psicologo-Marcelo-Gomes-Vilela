module.exports = {
  content: ['*.html', 'js/*.js'],
  css: ['css/bootstrap.min.css'],
  safelist: [
    /show$/, 
    /active$/, 
    /collapsing$/, 
    /modal-backdrop$/,
    /fade$/
  ],
  output: 'style.css/bootstrap.purged.css'
}