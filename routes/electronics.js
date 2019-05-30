const express = require('express'),
    router = express.Router();

const listOfElectronics = [
    {company: 'Apple', device: 'iPhone'},
    {company: 'Samsung', device: 'Galaxy S'},
    {company: 'Google', device: 'Pixel'},
    {company: 'Huawei', device: 'Mate'},
    {company: 'Oneplus', device: 'Oneplus'}
]

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('template', { 
        locals: {
            title: 'Flagship Smartphones!',
            listOfSmartphones: listOfElectronics
        },
        partials : {
            content: 'partial-smartphones'
        }
    });
});

module.exports = router;