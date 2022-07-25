// Fichier principal qui importent les données et fonctions des autres fichiers
import { recipesData } from '../data/recipes.js'
import { CardRecipes } from '../js/RecipesCard.js'
import { filterInput } from '../js/search.js'

// info données recette

export class MainApp {
  constructor() {
    this.articleCardContainer = document.querySelector('#card_container')
    this.Recipes = recipesData
    // console.log(recipesData)
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
      card.classList.add('inline-block', 'm-2')
      card.innerHTML = template.createCard()
      this.articleCardContainer.appendChild(card)

      // console.log('liste ingredients:  ', template.listNomIngredients()) // liste de tous les ingredients
      // console.log('appareil: ', template.appliance) // liste de tous les appareils
      // console.log('ustensils: ', template.ustensils) // liste de tous les utensiles
    })
  }

  // Recherche
  // selectionne l'input
  inputSearch() {
    const inputSearch = document.querySelector('.container input')

    // evenement : recupere en temps réel le champ input (tapé au clavier)
    inputSearch.addEventListener('keyup', () => {
      // j'appelle ma fonction filterInput du fichier search.
      this.Recipes = filterInput(this.Recipes)
      //let tabfiltered = filterInput(recipesData)
      // affichage des cartes filtrées
      this.displayCardRecipes(this.Recipes)
      // emploi de this car j'utilise une méthode defini dans la class (ici Main App)
      console.log(this.Recipes)

      // tableau d'appareils - ingredient - ustensils triés
      let tabAppliance = [] // tableau appareil vide
      let tabIngredients = [] //  tableau d'ingredients vide
      let tabUstensils = [] // tableau ustensils vide
      this.Recipes.forEach((recipe) => {
        recipe.ingredients.map((element) => {
          tabIngredients.push(element.ingredient)
          console.log('liste Ingredients: ', tabIngredients)
        })

        tabAppliance.push(recipe.appliance)
        console.log('liste Appareils: ', tabAppliance)

        recipe.ustensils.map((element) => {
          tabUstensils.push(element)
          console.log('liste Ustensils: ', tabUstensils)
        })
      })

      //une fois filtré - la liste est a jour mais qu'àpres la recherche
      const btnMenuAppareil = document.querySelector('#btnMenuAppareil')
      const dropdown = document.querySelector('.dropdown')

      btnMenuAppareil.addEventListener('click', () => {
        dropdown.textContent = tabAppliance
      })
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

// prendre en charge les doublons dans mes tableaux ingredients, ustensils et appareils

// if (dropdown.classList.contains('hidden')) {
//   dropdown.classList.remove('hidden')
//   dropdown.classList.add('flex')
// } else {
//   dropdown.classList.remove('flex')
//   dropdown.classList.add('hidden')
// }
