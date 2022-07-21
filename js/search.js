// ma function de recherche dans l'input
export function filterInput(recipesData) {
  const inputSearch = document.querySelector('.container input')
  const placeRecipe = document.querySelector('#card_container')
  const resultat = inputSearch.value
  //console.log('resultat ,', resultat)
  const nbCaractere = resultat.length
  // console.log('nb , ', nbCaractere)

  // si le mot tapé fait 3 caractère ou plus
  if (nbCaractere >= '3') {
    // mon tableau de recette
    // const tabrecipes = recipesData
    console.log('recipe :', recipesData)

    let tabFilter = recipesData.filter(function (el) {
      //   if (el.name.includes('Salade')) {
      //     return el
      //   }
      if (el.name.toLowerCase().includes(String(resultat))) {
        placeRecipe.innerHTML = ''
        return el
      }
    })
    // tableau filtré
    console.log(tabFilter)
    return tabFilter
  } else {
    return []
  }
}

// a rajouter : regex pour les accents sur les lettres => a = a à â ...

//quand je reviens en arrière, revenir sur l'affichage de toutes les recettes

// filtre sur name (ligne 20), doit on faire sur un autre filtre ? (ingredients ?)

// apparition des tags ?
