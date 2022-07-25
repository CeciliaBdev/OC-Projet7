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
      console.log(listIngredients)
    }

    return listIngredients
  }

  createCard() {
    const listeIngredients = this.listNomIngredients()

    const cardRecipe = `<div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <img src="./assets/recettes/fond-gris.jpeg" alt="image de la recette" />
                        <div class="infos_recette " >
                          <div>${this.name}</div>
                          <div><i class="fab fa-adn"></i>${this.time} min</div>
                        </div>
                        <div class="description_recette ">
                          <div class="ingredients">${listeIngredients}</div>
                          <div class="description"></div>
                        </div>
                        </div>`

    return cardRecipe
  }
}

// description qui depasse du cadre
// taille des deux blocs ?

//retour en arriere recherche ne fonctionne pas

// for (let i = 0; i < this.ingredients.length; i++) {
//   let name = this.ingredients[i].ingredient + ': '

//   // si pas de quantité existante =>
//   if (this.ingredients[i].quantity === undefined) {
//     this.ingredients[i].quantity = ''
//     name = this.ingredients[i].ingredient
//   }
