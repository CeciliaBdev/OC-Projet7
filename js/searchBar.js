// // fonction de recherche dans ma search bar
// export function searchBar() {
//   let recipesData = currentRecipes

//   console.log('test')
//   const inputSearch = document.querySelector('.container input')

//   inputSearch.addEventListener('keyup', () => {
//     // contenu de la recherche en minuscule
//     const resultatSearchBar = inputSearch.value.toLowerCase()
//     console.log(resultatSearchBar)

//     // contenu contient min3 caractères
//     if (resultatSearchBar.length >= '3') {
//       let recettesFiltrees = recipesData.filter((el) => {
//         // je filtre mes recettes suivant le resultat compris dans le titre (name), la description, ou l'ingrédient
//         // si existantes
//         if (
//           //el.name.toLowerCase().includes(resultatSearchBar) // titre
//           //el.description.toLowerCase().includes(resultatSearchBar) // description
//           //   el.ingredients.filter((ingred) => {
//           //     return ingred.ingredient.toLowerCase().includes(resultatSearchBar)
//           //   }) != undefined

//           el.name.toLowerCase().includes(String(resultatSearchBar)) || // titre
//           el.description.toLowerCase().includes(String(resultatSearchBar)) || // description
//           el.ingredients.filter((ingred) =>
//             ingred.ingredient.toLowerCase().includes(String(resultatSearchBar))
//           ).length >= 1 //filtre sur ingredient dans ingredients (non vide)
//         ) {
//           console.log('trouvé')
//           return el
//         }
//       })
//       console.log(recettesFiltrees)
//       return recettesFiltrees
//     }
//   })
//   // return recipesData
// }
