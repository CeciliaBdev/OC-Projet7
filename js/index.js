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
    const btnMenuAppareil = document.querySelector('#btnMenuAppareil')
    const btnMenuIngredients = document.querySelector('#btnMenuIngredients')
    const btnMenuUstensils = document.querySelector('#btnMenuUstensils')
    const dropdownIngredients = document.querySelector('.dropdownIngredients')
    const dropdownAppareils = document.querySelector('.dropdownAppareils')
    const dropdownUstensils = document.querySelector('.dropdownUstensils')

    btnMenuAppareil.addEventListener('click', () => {
      let tabAppliance = listButtons(this.Recipes).tabAppliance.sort()
      if (dropdownAppareils.classList.contains('hidden')) {
        // je mets sous forme de liste mon tableau
        dropdownAppareils.innerHTML = `${tabAppliance
          .map(
            (element) => `
        <li class="ingredients-list hover:bg-green-700 p-1 list-none cursor-pointer"">${element}</li>`
          )
          .join(' ')}`
        //dropdown.innerHTML = `<li>${tabAppliance}s</li>`
        dropdownAppareils.classList.remove('hidden')
      } else {
        dropdownAppareils.classList.add('hidden')
        dropdownAppareils.textContent = ''
      }
    })

    btnMenuIngredients.addEventListener('click', () => {
      let tabIngredients = listButtons(this.Recipes).tabIngredients.sort()
      if (dropdownIngredients.classList.contains('hidden')) {
        dropdownIngredients.innerHTML = `${tabIngredients
          .map(
            (element) => `
        <li class="ingredients-list hover:bg-blue-700 p-1 list-none cursor-pointer"">${element}</li>`
          )
          .join(' ')}`
        dropdownIngredients.classList.remove('hidden')
      } else {
        dropdownIngredients.classList.add('hidden')
        dropdownIngredients.textContent = ''
      }
    })

    btnMenuUstensils.addEventListener('click', () => {
      let tabUstensils = listButtons(this.Recipes).tabUstensils.sort()
      if (dropdownUstensils.classList.contains('hidden')) {
        dropdownUstensils.innerHTML = `${tabUstensils
          .map(
            (element) => `
        <li class="ingredients-list hover:bg-red-700 p-1 list-none cursor-pointer"">${element}</li>`
          )
          .join(' ')}`
        dropdownUstensils.classList.remove('hidden')
      } else {
        dropdownUstensils.classList.add('hidden')
        dropdownUstensils.textContent = ''
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
