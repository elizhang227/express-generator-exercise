const express = require('express'),
    router = express.Router(),
    ExecutivesModel = require('../models/ceos');

router.get('/', async (req, res, next) => {
    const allExecutives = await ExecutivesModel.getAllCeos();

    res.render('template', { 
        locals: {
            title: 'Apple CEOs',
            executiveList: allExecutives
        },
        partials : {
            content: 'partial-ceos'
        }
    });
})

router.post('/', (req, res) => {
    const { name, year } = req.body;

    ExecutivesModel.addCeos(name, year)
    .then(async () => {
        const allExecutives = await ExecutivesModel.getAllCeos();

        res.status(200).render('template', {
            locals: {
                title: 'Apple CEOs',
                executiveList: allExecutives
            },
            partials: {
                content: 'partial-ceos'
            }
        });
    })
    .catch((err) => {
        res.sendStatus(500).send(err.message);
    });
});

module.exports = router;