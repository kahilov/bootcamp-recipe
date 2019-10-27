const fetchRecipes = function () {
    let input = $("#food-input").val()
    $.get(`/recipes/${input}`, function (recipes) {
    
       console.log(recipes)
    })
}