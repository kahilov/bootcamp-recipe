const express = require('express')
const router = express.Router()
const request = require('request')


router.get('/sanity', function (req, res) {
    res.send("OK")
})
router.get('/recipes/:ingridients', function (req, res) {
    let ingridients = req.params.ingridients
    request('https://recipes-goodness.herokuapp.com/recipes/'+ingridients, function (err, response) {
        const recipes =JSON.parse(response.body)
        const recipeData = recipes.results
        res.send(recipeData)
    })
})











module.exports = router
