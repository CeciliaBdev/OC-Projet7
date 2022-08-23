// fonction de recherche dans ma search bar
export function searchBar() {
  let recipesData = currentRecipes

  console.log('test')
  const inputSearch = document.querySelector('.container input')

  inputSearch.addEventListener('keyup', () => {
    // contenu de la recherche en minuscule
    const resultatSearchBar = inputSearch.value.toLowerCase()
    console.log(resultatSearchBar)

    // contenu contient min3 caractères
    if (resultatSearchBar.length >= '3') {
      let recettesFiltrees = recipesData.filter((el) => {
        // je filtre mes recettes suivant le resultat compris dans le titre (name), la description, ou l'ingrédient
        // si existantes
        if (
          el.name.toLowerCase().includes(resultatSearchBar) // titre
          //   el.description.toLowerCase().includes(resultatSearchBar) || // description
          //   el.ingredients.filter((ingred) => {
          //     return ingred.ingredient.toLowerCase().includes(resultatSearchBar)
          //   }) != undefined
        ) {
          console.log('name trouvé')
          return el
        }
      })
      console.log(recettesFiltrees)
      return recettesFiltrees
    }
  })
  // return recipesData
}
