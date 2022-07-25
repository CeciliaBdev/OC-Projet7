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

// a rajouter : regex pour les accents sur les lettres => a = a à â ...
// a rajouter : condition : sans accent, espaces, ...

//quand je reviens en arrière, revenir sur l'affichage de toutes les recettes

// filtre sur name (ligne 20), doit on faire sur un autre filtre ? (ingredients ?)

// apparition des tags ?
