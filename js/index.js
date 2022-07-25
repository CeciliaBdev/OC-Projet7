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
    })
  }

  listButtons() {
    // tableau d'appareils - ingredient - ustensils triés
    let tabAppliance = [] // tableau appareil vide
    let tabIngredients = [] //  tableau d'ingredients vide
    let tabUstensils = [] // tableau ustensils vide
    this.Recipes.forEach((recipe) => {
      recipe.ingredients.map((element) => {
        tabIngredients.push(element.ingredient)
        tabIngredients = [...new Set(tabIngredients)]
        // console.log('liste Ingredients: ', tabIngredients)
      })

      tabAppliance.push(recipe.appliance)
      // j'édite un nouveau tableau sans les doublons
      tabAppliance = [...new Set(tabAppliance)]
      // console.log('liste Appareils: ', tabAppliance)

      recipe.ustensils.map((element) => {
        tabUstensils.push(element)
        tabUstensils = [...new Set(tabUstensils)]
        // console.log('liste Ustensils: ', tabUstensils)
      })
    })

    //une fois filtré - la liste est a jour mais qu'àpres la recherche
    const btnMenuAppareil = document.querySelector('#btnMenuAppareil')
    const btnMenuIngredients = document.querySelector('#btnMenuIngredients')
    const btnMenuUstensils = document.querySelector('#btnMenuUstensils')
    const dropdown = document.querySelector('.dropdown')

    btnMenuAppareil.addEventListener('click', () => {
      if (dropdown.classList.contains('hidden')) {
        dropdown.textContent = tabAppliance
        dropdown.classList.remove('hidden')
      } else {
        dropdown.classList.add('hidden')
        dropdown.textContent = ''
      }
    })
    btnMenuIngredients.addEventListener('click', () => {
      if (dropdown.classList.contains('hidden')) {
        dropdown.textContent = tabIngredients
        dropdown.classList.remove('hidden')
      } else {
        dropdown.classList.add('hidden')
        dropdown.textContent = ''
      }
    })
    btnMenuUstensils.addEventListener('click', () => {
      if (dropdown.classList.contains('hidden')) {
        dropdown.textContent = tabUstensils
        dropdown.classList.remove('hidden')
      } else {
        dropdown.classList.add('hidden')
        dropdown.textContent = ''
      }
    })
  }

  init() {
    this.displayCardRecipes(this.Recipes)
    this.inputSearch()
    this.listButtons()
  }
}

// initialisation
const app = new MainApp()
app.init()

// a faire
// mise en page des list :
// sans le ',' et en colonne ?
//flex wrap ?

//enlever dans les liste
// les majuscules
//ponctuation
//chiffres
