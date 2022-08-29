// fonction de recherche dans ma search bar
// algo 2 avec un for
export function searchBar() {
  const inputSearch = document.querySelector('.container input')

  inputSearch.addEventListener('keyup', () => {
    // contenu de la recherche en minuscule
    const resultatSearchBar = inputSearch.value.toLowerCase()
    console.log(resultatSearchBar)

    // essai algo 2
    let tabFilter = []
    // contenu contient min3 caractères
    if (resultatSearchBar.length >= '3') {
      // je boucle sur mon tableau currentRecipes
      for (let i = 0; i < this.currentRecipes.length; i++) {
        const recette = this.currentRecipes[i]
        // je boucle dans mon tableau d'ingrédient
        for (let j = 0; j < recette.ingredients.length; j++) {
          if (
            recette.ingredients[j].ingredient
              .toLowerCase()
              .includes(resultatSearchBar.toLowerCase())
          ) {
            // console.log(recette.name, recette.ingredients[j].ingredient)
            tabFilter.push(recette)
          }
        }
      }
    }
    // console.log(tabFilter)
    displayRecipes(tabFilter)
    // si pas de resultat
    if (tabFilter.length == 0) {
      // console.log('rien')
      displayRecipes(this.currentRecipes)
    }
  })
}

// algo 1 avec un filter
// export function searchBar() {
//     const inputSearch = document.querySelector('.container input')

//     inputSearch.addEventListener('keyup', () => {
//       // contenu de la recherche en minuscule
//       const resultatSearchBar = inputSearch.value.toLowerCase()
//       console.log(resultatSearchBar)

//       // contenu contient min3 caractères
//       if (resultatSearchBar.length >= '3') {
//         this.currentRecipes = this.currentRecipes.filter((el) => {
//           if (
//             el.name.toLowerCase().includes(resultatSearchBar) || // titre
//             el.description.toLowerCase().includes(resultatSearchBar) || // description
//             el.ingredients.filter((ingred) =>
//               ingred.ingredient.toLowerCase().includes(resultatSearchBar)
//             ).length >= 1 //filtre sur ingredient dans ingredients (non vide)
//           ) {
//             console.log('trouvé')
//             return el
//           }
//         })
//         console.log(this.currentRecipes)
//       } else {
//         this.currentRecipes = recipesData
//       }
//       displayRecipes(this.currentRecipes)
//     })
//   }

// algo 2
// export function searchBar() {
//     const inputSearch = document.querySelector('.container input')

//     inputSearch.addEventListener('keyup', () => {
//       // contenu de la recherche en minuscule
//       const resultatSearchBar = inputSearch.value.toLowerCase()
//       console.log(resultatSearchBar)

//       let tabFilter = []
//       // contenu contient min3 caractères
//       if (resultatSearchBar.length >= '3') {
//           // je boucle sur mon tableau currentRecipes
//         for (let i = 0; i < this.currentRecipes.length; i++) {
//           if (
//             this.currentRecipes[i].name
//               .toLowerCase()
//               .includes(resultatSearchBar) || // titre
//             this.currentRecipes[i].description
//               .toLowerCase()
//               .includes(resultatSearchBar) || // description
//             this.currentRecipes[i].ingredients.filter((ingred) =>
//               ingred.ingredient.toLowerCase().includes(resultatSearchBar)
//             ).length >= 1 //filtre sur ingredient dans ingredients (non vide)
//           ) {
//             console.log('trouvé')

//             tabFilter.push(this.currentRecipes[i])
//             console.log(tabFilter)
//           }
//         }
//         console.log(this.currentRecipes)
//       } else {
//         tabFilter = recipesData
//       }
//       displayRecipes(tabFilter)
//     })
//   }
