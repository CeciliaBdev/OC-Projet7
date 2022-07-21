// objet recipe
export class CardRecipes {
  constructor(recipe) {
    this.id = recipe.id
    this.name = recipe.name
    this.servings = recipe.servings
    this.time = recipe.time
    this.description = recipe.description
    this.appliance = recipe.appliance
    this.ustensils = recipe.ustensils
    this.ingredients = recipe.ingredients
  }
  // creation de la carte recette

  listNomIngredients() {
    // avant le parcous, vide
    let listIngredients = []
    // parcours de mon tableau
    for (let i = 0; i < this.ingredients.length; i++) {
      let name = this.ingredients[i].ingredient + ': '

      // si pas de quantité existante =>
      if (this.ingredients[i].quantity === undefined) {
        this.ingredients[i].quantity = ''
        name = this.ingredients[i].ingredient
      }
      //si pas d'unité existante
      if (this.ingredients[i].unit === undefined) {
        this.ingredients[i].unit = ''
      }

      let blocIngredients =
        name + this.ingredients[i].quantity + this.ingredients[i].unit + ' '

      listIngredients.push(blocIngredients)
    }
    return listIngredients
  }

  createCard() {
    const listeIngredients = this.listNomIngredients()

    const cardRecipe = `
                        <img src="./assets/recettes/fond-gris.jpeg" height="150px" alt="image de la recette" />
                        <div class="infos_recette d-flex justify-content-evenly" >
                          <div>${this.name}</div>
                          <div><i class="bi bi-clock"></i> ${this.time} min</div>
                        </div>
                        <div class="description_recette d-flex justify-content-evenly align-items-center">
                          <div class="ingredients">${listeIngredients}</div>
                          <div class="description"></div>
                        </div>`
    return cardRecipe
  }
}

// function ingredients(ingredient, quantity, unit) {
//   this.ingredient = ingredient
//   this.quantity = quantity
//   this.unit = unit
// }

//objet ingrédients
// class Ingredients {
//   constructor(ingredients) {
//     this.ingredient = ingredients.ingredient
//     this.quantity = ingredients.quantity
//     this.unit = ingredients.unit
//   }
// }

// questions
// ingredients => objet ! comment afficher le contenu ?
// description qui depasse du cadre
// taille des deux blocs ?
