const express = require('express'),
    router = express.Router(),
    RestaurantModel = require('../models/ceos');

router.get('/', async (req, res, next) => {
    const allRestaurants = await RestaurantModel.getAll();

    res.render('template', { 
        locals: {
            title: 'Restaurants Database',
            restaurantList: allRestaurants
        },
        partials : {
            content: 'partial-restaurants'
        }
    });
})

router.post('/', (req, res) => {
    const { name, distance, stars, category, fav_dish, takeout } = req.body;

    RestaurantModel.add(name, distance, stars, category, fav_dish, takeout)
    .then(async () => {
        const allRestaurants = await RestaurantModel.getAll();

        res.status(200).render('template', {
            locals: {
                title: 'Restaurants Database',
                restaurantList: allRestaurants
            },
            partials: {
                content: 'partial-restaurants'
            }
        });
    })
    .catch((err) => {
        res.sendStatus(500).send(err.message);
    });
});

module.exports = router;