import { recipesData } from '../data/recipes.js'
import { displayRecipes } from './factorieCard.js'

export class TableauRecettes {
  constructor() {
    this.currentRecipes = recipesData
  }

  init() {
    displayRecipes(this.currentRecipes)
  }

  searchBar() {
    const inputSearch = document.querySelector('.container input')

    inputSearch.addEventListener('keyup', () => {
      // contenu de la recherche en minuscule
      const resultatSearchBar = inputSearch.value.toLowerCase()
      console.log(resultatSearchBar)

      // contenu renvoi recherche filtrée si 3 caractères sinon renvoi toutes les recettes
      if (resultatSearchBar.length >= '3') {
        this.currentRecipes = this.currentRecipes.filter((el) => {
          // je filtre mes recettes suivant le resultat compris dans le titre (name), la description, ou l'ingrédient
          // si existantes
          if (
            el.name.toLowerCase().includes(resultatSearchBar) || // titre
            el.description.toLowerCase().includes(resultatSearchBar) || // description
            el.ingredients.filter((ingred) =>
              ingred.ingredient.toLowerCase().includes(resultatSearchBar)
            ).length >= 1 //filtre sur ingredient dans ingredients (non vide)
          ) {
            console.log('ingredient trouvé')
            return el
          }
        })
        console.log(this.currentRecipes)
      } else {
        this.currentRecipes = recipesData
      }
      displayRecipes(this.currentRecipes)
    })
  }
}
