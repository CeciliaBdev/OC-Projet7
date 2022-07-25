export function listButtons(tab) {
  // console.log('start listbutton', this.Recipes)

  // tableau d'appareils - ingredient - ustensils triés
  let tabAppliance = [] // tableau appareil vide
  let tabIngredients = [] //  tableau d'ingredients vide
  let tabUstensils = [] // tableau ustensils vide
  //this.Recipes.forEach
  tab.forEach((recipe) => {
    recipe.ingredients.map((element) => {
      tabIngredients.push(element.ingredient)
      tabIngredients = [...new Set(tabIngredients)]
      // console.log('liste Ingredients: ', tabIngredients)
    })

    tabAppliance.push(recipe.appliance)
    // j'édite un nouveau tableau sans les doublons
    tabAppliance = [...new Set(tabAppliance)]
    // console.log('liste Appareils: ', tabAppliance)

    recipe.ustensils.map((element) => {
      tabUstensils.push(element)
      tabUstensils = [...new Set(tabUstensils)]
      // console.log('liste Ustensils: ', tabUstensils)
    })
  })
  return { tabIngredients, tabAppliance, tabUstensils }
}
