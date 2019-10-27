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
        let relevantData = recipeData.map(r => 
        { return { title: r.title, video: r.href, ingredients: r.ingredients, instructions: r.strInstructions,img: r.thumbnail,first: r.ingredients[0] } })
        res.send(relevantData)
    })
})











module.exports = router
