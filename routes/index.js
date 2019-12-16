module.exports = (app) => {
    app.use('/', require('./login')(app));
}