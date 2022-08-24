import { recipesData } from '../data/recipes.js'
import { displayRecipes, displayDropDown, createTag } from './factorieCard.js'

export class TableauRecettes {
  constructor() {
    this.currentRecipes = recipesData
  }

  init() {
    displayRecipes(this.currentRecipes)
    this.searchBar()
    this.dropDown()
    this.getIngredients()
    this.getAppareils()
    this.getUstensils()
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

  dropDown() {
    // je selectionne les dropdown (hidden) de mes filtres ingredients - appareils - ustensils
    let dropdownIngredients = document.getElementById('dropdownIngredients')
    let dropdownAppareils = document.getElementById('dropdownAppareils')
    let dropdownUstensils = document.getElementById('dropdownUstensils')

    // les champ de recherche des filtres
    let inputIngredients = document.getElementById('inputIngredients')
    let inputAppareils = document.getElementById('inputAppareils')
    let inputUstensils = document.getElementById('inputUstensils')

    //tableau des ingredients - appareils - ustensils - vide au début
    let tabIngredients = []
    let tabAppareils = []
    let tabUstensils = []

    // les icones des filtres
    let arrowIngredients = document.getElementById('btnMenuIngredients')
    let arrowAppareils = document.getElementById('btnMenuAppareils')
    let arrowUstensils = document.getElementById('btnMenuUstensils')
    let allArrow = document.querySelectorAll('.arrow')
    let liButton = document.querySelectorAll('.button')

    allArrow.forEach((arrow) => {
      arrow.addEventListener('click', () => {
        // j'ajoute style css sur le bouton
        liButton.forEach((button) => {
          button.classList.add('justify-between')
          arrow.classList.toggle('rotate-180')
        })

        if (arrow.id === 'btnMenuIngredients') {
          tabIngredients = this.getIngredients()
          displayDropDown(
            tabIngredients,
            dropdownIngredients,
            'blue',
            'ingredient'
          )
          console.log(this.getIngredients())
          //this.filterByIngredients('beurre')
        }
        if (arrow.id === 'btnMenuAppareils') {
          tabAppareils = this.getAppareils()
          displayDropDown(tabAppareils, dropdownAppareils, 'green', 'appareil')
          console.log(this.getAppareils())
          // this.filterByAppareil('blender')
        }
        if (arrow.id === 'btnMenuUstensils') {
          tabUstensils = this.getUstensils()
          displayDropDown(tabUstensils, dropdownUstensils, 'red', 'ustensil')
          console.log(this.getUstensils())
          this.filterByUstensil('louche')
        }

        createTag()
      })
    })
  }

  getIngredients() {
    let listIngredients = []

    this.currentRecipes.forEach((recipe) => {
      recipe.ingredients.map((element) => {
        listIngredients.push(element.ingredient)
      })
    })
    listIngredients = [...new Set(listIngredients)]
    listIngredients.sort()

    return listIngredients
  }

  getAppareils() {
    let listAppareils = []

    this.currentRecipes.forEach((recipe) => {
      listAppareils.push(recipe.appliance)
    })
    listAppareils = [...new Set(listAppareils)]
    listAppareils.sort()
    return listAppareils
  }

  getUstensils() {
    let listUstensils = []

    this.currentRecipes.forEach((recipe) => {
      recipe.ustensils.map((element) => {
        listUstensils.push(element)
      })
    })
    listUstensils = [...new Set(listUstensils)]
    listUstensils.sort()
    return listUstensils
  }

  filterByIngredients(myIngredient) {
    this.currentRecipes = this.currentRecipes.filter((el) => {
      if (
        el.ingredients.filter((el2) =>
          el2.ingredient.toLowerCase().includes(myIngredient)
        ).length >= 1
      ) {
        console.log('filterByIngredient trouvé')
        return el
      }
    })
  }
  filterByAppareil(myAppareil) {
    this.currentRecipes = this.currentRecipes.filter((el) => {
      if (el.appliance.toLowerCase().includes(myAppareil.toLowerCase())) {
        console.log('filterByAppareil trouvé')
        return el
      }
    })
  }

  // NOK
  filterByUstensil(myUstensil) {
    this.currentRecipes = this.currentRecipes.filter((el) => {
      if (el.ustensils.toLowerCase().includes(myUstensil.toLowerCase())) {
        console.log('filterByUstensil trouvé')
        return el
      }
    })
  }
}

// questions
// dropdown en absolute : le boutton ne s'aggrandit pas
