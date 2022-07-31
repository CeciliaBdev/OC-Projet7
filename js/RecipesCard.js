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

  createCard() {
    const cardRecipe = `<div class="rounded-lg shadow-lg bg-white  cardRecipe text-sm cursor-pointer">
                          <div class="bgImg h-48 rounded-t-lg "></div>
                          <div class="infos_recette flex justify-between p-5 pb-0 h-14" >
                            <div>${this.name}</div>
                            <div class="flex gap-2 font-bold"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10.5 5H9V11L14.2 14.2L15 12.9L10.5 10.2V5Z" fill="black"/>
                            </svg>
                            ${this.time} min</div>
                          </div>
                          <div class="description_recette flex justify-between p-5 pt-0 text-sm ">
                            <div class="ingredients w-40 ">${this.ingredients
                              .map(
                                (element) => `
                              <li class="list-none">${element.ingredient}:
                                ${element.quantity || ''} ${element.unit || ''}
                              </li>`
                              )
                              .join(' ')}</div>
                            <div class="description w-40">${this.lenghtDescription()} </div>
                            </div>
                        </div>`

    return cardRecipe
  }

  // taille description
  lenghtDescription() {
    // si le texte description depasse, je coupe au 150e caractères + "..."
    if (this.description.length >= 150) {
      // console.log('trop long')
      return this.description.slice(0, 150) + '...'
    } else {
      return this.description
    }
  }
}

// taille des deux blocs ?

//retour en arriere recherche ne fonctionne pas

// listNomIngredients() {
//   // avant le parcous, vide
//   let listIngredients = []
//   // parcours de mon tableau
//   // ici avec un for - le faire avec un foreach egalement
//   for (let i = 0; i < this.ingredients.length; i++) {
//     let name = this.ingredients[i].ingredient + ': '

//     // si pas de quantité existante =>
//     if (this.ingredients[i].quantity === undefined) {
//       this.ingredients[i].quantity = ''
//       name = this.ingredients[i].ingredient
//     }
//     //si pas d'unité existante
//     if (this.ingredients[i].unit === undefined) {
//       this.ingredients[i].unit = ''
//     }

//     let blocIngredients =
//       name + this.ingredients[i].quantity + this.ingredients[i].unit + ' '

//     listIngredients.push(blocIngredients)
//     // console.log(listIngredients)
//   }

//   return listIngredients
// }
