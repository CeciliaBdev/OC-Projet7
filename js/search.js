import { recipesData } from '../data/recipes.js'

// selectionne l'input
const inputSearch = document.querySelector('.container input')

console.log(recipesData)
// evenement : recupere en temps réel le champ input (tapé au clavier)
inputSearch.addEventListener('keyup', () => {
  const resultat = inputSearch.value
  //console.log('resultat ,', resultat)
  const nbCaractere = resultat.length
  // console.log('nb , ', nbCaractere)

  // si le mot tapé fait 3 caractère ou plus
  if (nbCaractere >= '3') {
    // mon tableau de recette
    const tabrecipes = recipesData
    let tabFilter = tabrecipes.filter(function (el) {
      //   if (el.name.includes('Salade')) {
      //     return el
      //   }
      if (el.name.toLocaleLowerCase().includes(String(resultat))) return el
    })
    // tableau filtré
    console.log(tabFilter)
  }
})

// test filtre
