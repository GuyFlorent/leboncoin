module.exports = (app) => {
    app.controllers = {
        user: require('./user')(app),
        category: require('./category')(app),
        subCategory: require('./subCategory')(app),
        product: require('./product')(app),
        advert: require('./advert')(app),
        common: require('./common')(app)
    };
};


