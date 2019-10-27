const renderer = new Renderer

const fetchRecipes = function () {
    let input = $("#food-input").val()
    $.get(`/recipes/${input}`, function (recipes) {
        renderer.render(recipes)
       console.log(recipes)
    })
}
$("#food").on("click", "#img", function () {
    let firstIng = $(this).data().id
    console.log(firstIng)
})