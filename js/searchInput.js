// ma function de recherche dans l'input avec un filter
export function filterInput(recipesData) {
  const inputSearch = document.querySelector('.container input')
  const placeRecipe = document.querySelector('#card_container')
  const resultat = inputSearch.value
  console.log('resultat ,', resultat)
  const nbCaractere = resultat.length
  // console.log('nb , ', nbCaractere)

  // si le mot tapé fait 3 caractère ou plus
  if (nbCaractere >= '3') {
    // mon tableau de recette
    // const tabrecipes = recipesData
    // console.log('recipe :', recipesData)

    let tabFilter = recipesData.filter(function (el) {
      // je filtre mes recettes suivant le resultat compris dans le titre (name), la description, ou l'ingrédient
      if (
        el.name.toLowerCase().includes(String(resultat)) || // titre
        el.description.toLowerCase().includes(String(resultat)) || // description
        el.ingredients.filter((ingred) =>
          ingred.ingredient.toLowerCase().includes(String(resultat))
        ).length >= 1 //filtre sur ingredient dans ingredients (non vide)
      ) {
        placeRecipe.innerHTML = ''
        return el
      }
    })

    return tabFilter
  }
  return recipesData
}

//quand je reviens en arrière, revenir sur l'affichage de toutes les recettes

// apparition des tags ?

// ------
// 2e algo avec un for pour le filtre
// export function filterInput(recipesData) {
//   const inputSearch = document.querySelector('.container input')
//   const placeRecipe = document.querySelector('#card_container')
//   const resultat = inputSearch.value
//   //console.log('resultat ,', resultat)
//   const nbCaractere = resultat.length
//   // console.log('nb , ', nbCaractere)

//   // si le mot tapé fait 3 caractère ou plus
//   if (nbCaractere >= '3') {
//     // mon tableau de recette
//     // const tabrecipes = recipesData
//     // console.log('recipe :', recipesData)

//     let tabFilter = []
//     // je filtre mes recettes suivant le resultat compris dans le titre (name), la description, ou l'ingrédient
//     for (let i = 0; i < recipesData.length; i++) {
//       if (
//         recipesData[i].name.toLowerCase().includes(String(resultat)) || // titre
//         recipesData[i].description.toLowerCase().includes(String(resultat)) || // description
//         recipesData[i].ingredients.filter((ingred) =>
//           ingred.ingredient.toLowerCase().includes(String(resultat))
//         ).length >= 1 //filtre sur ingredient dans ingredients (non vide)
//       ) {
//         placeRecipe.innerHTML = ''
//         tabFilter.push(recipesData[i])
//       }
//     }

//     return tabFilter
//   }
//   return recipesData
// }
