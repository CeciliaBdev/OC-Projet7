// constructor de la carte
export class CardRecipes {
  constructor(recipe) {
    this.id = recipe.id
    this.name = recipe.name
    this.servings = recipe.servings
    this.ingredients = recipe.ingredients
    this.time = recipe.time
    this.description = recipe.description
    this.appliance = recipe.appliance
    this.ustensils = recipe.ustensils
  }

  createCard() {
    const cardRecipe = `
                        <img src="./assets/recettes/fond-gris.jpeg" height="150px" alt="image de la recette" />
                        <div>${this.name}</div>
                        <div>${this.time} min</div>
                        `
    // console.log(cardRecipe)
    //ingredients => objet ! comment afficher le contenu ?
    return cardRecipe
  }
}
