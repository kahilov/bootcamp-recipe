const express = require('express')
const router = express.Router()
const request = require('request')


router.get('/sanity', function (req, res) {
    res.send("OK")
})
router.get('/recipes/:ingridients', function (req, res) {
    let ingridient = req.params.ingridients
    request('https://recipes-goodness.herokuapp.com/recipes/'+ingridient, function (err, response) {
        const recipes = response.body
        res.send(recipes)
    })
})











module.exports = router
