class Renderer {

    _renderRecipes(recipes) {
        $("#food").empty();
        const source = $('#food-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({ recipes });
        $("#food").append(newHTML)
    }

    render(recipe) {
        this._renderRecipes(recipe)
    }
}