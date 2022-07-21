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
    for (const props in this.ingredients) {
      const baseObject = this.ingredients[props]
      // console.log(baseObject)
      // ingredient dans "ingredients"
      // const ingredient = baseObject.ingredient
      // console.log(ingredient)

      const cardRecipe = `
                        <img src="./assets/recettes/fond-gris.jpeg" height="150px" alt="image de la recette" />
                        <div class="infos_recette d-flex justify-content-evenly" >
                          <div>${this.name}</div>
                          <div><i class="bi bi-clock"></i> ${this.time} min</div>
                        </div>
                        <div class="description_recette d-flex justify-content-evenly align-items-center">
                          <div class="ingredients">${baseObject}</div>
                          <div class="description"></div>
                        </div>

                        `
      // console.log(cardRecipe)
      // afficher le name - id
      // console.log(`${this.name}`, `${this.id}`, `${this.ingredients}`)

      // afficher les ingredients

      return cardRecipe
    }
  }
}
// questions
// ingredients => objet ! comment afficher le contenu ?
// description qui depasse du cadre
// taille des deux blocs ?
