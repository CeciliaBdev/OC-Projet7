// Fichier principal qui importent les données et fonctions des autres fichiers
import { recipesData } from '../data/recipes.js'
import { CardRecipes } from '../js/RecipesCard.js'
import { filterInput } from '../js/search.js'
import { listButtons } from './list.js'

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
      // this.listButtons()
      // console.log(this.Recipes)
    })
  }

  listFiltered() {
    //une fois filtré - la liste est a jour mais qu'àpres la recherche
    const btnMenuAppareil = document.querySelector('#btnMenuAppareil')
    const btnMenuIngredients = document.querySelector('#btnMenuIngredients')
    const btnMenuUstensils = document.querySelector('#btnMenuUstensils')
    const dropdown = document.querySelector('.dropdown')

    btnMenuAppareil.addEventListener('click', () => {
      let tabAppliance = listButtons(this.Recipes).tabAppliance

      if (dropdown.classList.contains('hidden')) {
        // je mets sous forme de liste mon tableau
        dropdown.innerHTML = `${tabAppliance
          .map(
            (element) => `
        <li class="ingredients-list">${element}</li>`
          )
          .join(' ')}`
        //dropdown.innerHTML = `<li>${tabAppliance}s</li>`
        dropdown.classList.remove('hidden')
      } else {
        dropdown.classList.add('hidden')
        dropdown.textContent = ''
      }
    })
    btnMenuIngredients.addEventListener('click', () => {
      let tabIngredients = listButtons(this.Recipes).tabIngredients
      if (dropdown.classList.contains('hidden')) {
        dropdown.innerHTML = `${tabIngredients
          .map(
            (element) => `
        <li class="ingredients-list">${element}</li>`
          )
          .join(' ')}`
        dropdown.classList.remove('hidden')
      } else {
        dropdown.classList.add('hidden')
        dropdown.textContent = ''
      }
    })
    btnMenuUstensils.addEventListener('click', () => {
      let tabUstensils = listButtons(this.Recipes).tabUstensils
      if (dropdown.classList.contains('hidden')) {
        dropdown.innerHTML = `${tabUstensils
          .map(
            (element) => `
        <li class="ingredients-list">${element}</li>`
          )
          .join(' ')}`
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
    this.listFiltered()
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
