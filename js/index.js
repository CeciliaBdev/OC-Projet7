// Fichier principal qui importent les données et fonctions des autres fichiers
import { recipesData } from '../data/recipes.js'
import { CardRecipes } from '../js/RecipesCard.js'
import { filterInput } from '../js/search.js'

// info données recette

export class MainApp {
  constructor() {
    this.articleCardContainer = document.querySelector('#card_container')
    this.Recipes = recipesData
    console.log(recipesData)
  }
  // affichage des cartes
  displayCardRecipes(list) {
    // console.log('list :', typeof list)
    // const tabRecipes = this.Recipes
    // Parcours un tableau d'objets
    list.forEach((element) => {
      // console.log(typeof element)
      const template = new CardRecipes(element)
      const card = document.createElement('article')
      card.classList.add('d-inline-block', 'col-4', 'mt-5')
      card.innerHTML = template.createCard()
      console.log(template.listNomIngredients())
      this.articleCardContainer.appendChild(card)
    })
  }

  // Recherche
  // selectionne l'input
  inputSearch() {
    const inputSearch = document.querySelector('.container input')
    // evenement : recupere en temps réel le champ input (tapé au clavier)

    inputSearch.addEventListener('keyup', () => {
      // j'appelle ma fonction filterInput du fichier search.
      // this.Recipes = filterInput(this.Recipes) = a revoir
      let tabfiltered = filterInput(recipesData)
      // affichage des cartes filtrées
      // displayCardRecipes mais avec tabFilter
      this.displayCardRecipes(tabfiltered)
      // emploi de this car j'utilise une méthode defini dans la class (ici Main App)
    })
  }

  init() {
    this.displayCardRecipes(this.Recipes)
    this.inputSearch()
  }
}

// initialisation
const app = new MainApp()
app.init()
