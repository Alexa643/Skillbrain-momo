function createRecipe(title, servings, ingredients) {
    // Create the recipe object
    const recipe = {
        title: title,
        servings: servings,
        ingredients: ingredients
    };

    // Log all details in one line
    console.log(
        "Title: " + recipe.title +
        ", Servings: " + recipe.servings +
        ", Ingredients: " + recipe.ingredients.join(", ")
    );

    // Return the recipe object
    return recipe;
}

// Example usage for a cake recipe
const myRecipe = createRecipe("Chocolate Cake", 8, ["flour", "sugar", "cocoa powder", "eggs", "butter", "milk"]);
console.log(myRecipe);

