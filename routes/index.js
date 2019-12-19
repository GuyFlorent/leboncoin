module.exports = (app) => {
    app.use('/common', require('./common')(app))
    app.use('/users', require('./user')(app))
    app.use('/categories', require('./category')(app))
    app.use('/subcategories', require('./subCategory')(app))
    app.use('/product', require('./product')(app))
    app.use('/advert', require('./advert')(app))
};