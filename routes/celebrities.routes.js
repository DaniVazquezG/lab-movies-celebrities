const router = require('express').Router()
const CelebrityModel = require('../models/Celebrity.model')

router.get('celebrities/create', (rq, res) => {
    res.render('/celebrities/new-celebrity')
});

router.post('/celebrities/create', (req, res) => {
    const { name, occupation, catchPhrase } = req.body
    CelebrityModel
        .create({ name, occupation, catchPhrase })
        .then(() => {
            res.redirect('/celebrities')
        })
        .catch(() => res.render('celebrities/new-celebrity'))
});

router.get('/celebrities', (req, res, next) => {

    CelebrityModel
        .find()
        .then((celebrities) => {
            res.redirect('/celebrities/celebrities', { celebrities })
        })
        .catch((err) => next(err));
});