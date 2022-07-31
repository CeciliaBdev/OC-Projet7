// Fichier principal qui importent les données et fonctions des autres fichiers
import { recipesData } from '../data/recipes.js'
import { CardRecipes } from '../js/RecipesCard.js'
import { filterInput } from './searchInput.js'
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
  // selectionne l'input barre de recherche
  inputSearch() {
    const inputSearch = document.querySelector('.container input')

    // evenement : recupere en temps réel le champ input (tapé au clavier)
    inputSearch.addEventListener('keyup', () => {
      this.Recipes = recipesData
      // j'appelle ma fonction filterInput du fichier search.
      this.Recipes = filterInput(this.Recipes, inputSearch)
      //let tabfiltered = filterInput(recipesData)
      // affichage des cartes filtrées
      this.displayCardRecipes(this.Recipes)
      // emploi de this car j'utilise une méthode defini dans la class (ici Main App)
      // console.log(this.Recipes)
    })
  }

  // affichage des listes buttons
  listFiltered() {
    const btnMenuAppareil = document.querySelector('#btnMenuAppareil')
    const btnMenuIngredients = document.querySelector('#btnMenuIngredients')
    const btnMenuUstensils = document.querySelector('#btnMenuUstensils')
    const dropdownIngredients = document.querySelector('.dropdownIngredients')
    const dropdownAppareils = document.querySelector('.dropdownAppareils')
    const dropdownUstensils = document.querySelector('.dropdownUstensils')

    // btnMenuAppareil.addEventListener('click', () => {
    //   // je liste les ingredients suivant ma recherche filterInput sur this.Recipes
    //   let tabAppliance = listButtons(this.Recipes).tabAppliance.sort()
    //   if (dropdownAppareils.classList.contains('hidden')) {
    //     // je mets sous forme de liste mon tableau
    //     dropdownAppareils.innerHTML = `${tabAppliance
    //       .map(
    //         (element) => `
    //     <li class="appareils-list hover:bg-green-700 p-1 list-none cursor-pointer" data-type="appareil">${element}</li>`
    //       )
    //       .join(' ')}`
    //     //dropdown.innerHTML = `<li>${tabAppliance}s</li>`
    //     dropdownAppareils.classList.remove('hidden')
    //   } else {
    //     dropdownAppareils.classList.add('hidden')
    //     dropdownAppareils.textContent = ''
    //   }
    //   // const buttonAppareil = document.querySelector('li.ingredientText')
    //   // buttonIngredient.classList.add('justify-between')
    // })

    // btnMenuIngredients.addEventListener('click', () => {
    //   let tabIngredients = listButtons(this.Recipes).tabIngredients.sort()
    //   if (dropdownIngredients.classList.contains('hidden')) {
    //     dropdownIngredients.innerHTML = `${tabIngredients
    //       .map(
    //         (element) => `
    //     <li class="ingredients-list hover:bg-blue-700 p-1 list-none cursor-pointer">${element}</li>`
    //       )
    //       .join(' ')}`
    //     dropdownIngredients.classList.remove('hidden')
    //   } else {
    //     dropdownIngredients.classList.add('hidden')
    //     dropdownIngredients.textContent = ''
    //   }
    //   // li ingredientText
    //   const buttonIngredient = document.querySelector('li.ingredientText')
    //   buttonIngredient.classList.add('justify-between')

    //   // appelle de la fct pour créer les tag
    //   this.displayTag()
    // })

    // btnMenuUstensils.addEventListener('click', () => {
    //   let tabUstensils = listButtons(this.Recipes).tabUstensils.sort()
    //   if (dropdownUstensils.classList.contains('hidden')) {
    //     dropdownUstensils.innerHTML = `${tabUstensils
    //       .map(
    //         (element) => `
    //     <li class="ustensils-list hover:bg-red-700 p-1 list-none cursor-pointer">${element}</li>`
    //       )
    //       .join(' ')}`
    //     dropdownUstensils.classList.remove('hidden')
    //   } else {
    //     dropdownUstensils.classList.add('hidden')
    //     dropdownUstensils.textContent = ''
    //   }
    //   // li ustensilText
    //   const buttonUstensil = document.querySelector('li.ustensilText')
    //   buttonUstensil.classList.add('justify-between')
    // })
  }

  // recherche dans l'input bouton Ingredient
  inputSearchIngredients() {
    // changement placeholder
    const searchIngredient = document.querySelector('.searchInputButton')
    searchIngredient.addEventListener('click', () => {
      const buttonIngredient = document.querySelector('li.ingredientText')
      buttonIngredient.classList.add('justify-between')

      if (searchIngredient.classList.contains('placeholder')) {
        searchIngredient.placeholder = 'Ingredients'
        searchIngredient.classList.remove('font-light', 'w-48', 'placeholder')
        searchIngredient.classList.add('w-24', 'font-bold')
      } else {
        searchIngredient.classList.add('font-light', 'w-48', 'placeholder')
        searchIngredient.placeholder = 'Rechercher un ingredient'
      }
      // rotation chevron au click
      const containerButtons = document.querySelector('.buttons')
      const chevrons = containerButtons.querySelectorAll('.fas')
      chevrons.forEach((chevron) => {
        chevron.classList.toggle('rotate-180')
      })

      const dropdownIngredients = document.querySelector('.dropdownIngredients')

      let tabIngredients = listButtons(this.Recipes).tabIngredients.sort()
      if (dropdownIngredients.classList.contains('hidden')) {
        dropdownIngredients.innerHTML = `${tabIngredients
          .map(
            (element) => `
        <li class="ingredients-list hover:bg-blue-700 p-1 list-none cursor-pointer" data-type="ingredient">${element}</li>`
          )
          .join(' ')}`
        dropdownIngredients.classList.remove('hidden')
      } else {
        dropdownIngredients.classList.add('hidden')
        dropdownIngredients.textContent = ''
      }

      const inputSearchIngredients =
        document.querySelector('#searchIngredients')
      // recherche dans le tableau ingredient
      inputSearchIngredients.addEventListener('keyup', () => {
        let search = inputSearchIngredients.value

        search = tabIngredients.filter(function (element) {
          // je filtre mes recettes suivant le resultat compris dans le tableau d'ingredient
          if (element.toLowerCase().includes(String(search))) {
            return element
          }
        })
        //mise en page du resultat sous forme de liste
        dropdownIngredients.innerHTML = `${search
          .map(
            (element) => `
        <li class="ingredients-list hover:bg-blue-700 p-1 list-none cursor-pointer">${element}</li>`
          )
          .join(' ')}`
        //console.log('search: ', search)
        this.displayTag()
      })
      this.displayTag()
    })
  }

  // recherche dans l'input bouton Appareil
  inputSearchAppareils() {
    // changement placeholder
    const searchAppareil = document.querySelector('.searchInputButtonAppareil')
    searchAppareil.addEventListener('click', () => {
      const buttonAppareil = document.querySelector('li.appareilText')
      buttonAppareil.classList.add('justify-between')

      if (searchAppareil.classList.contains('placeholder')) {
        searchAppareil.placeholder = 'Appareils'
        searchAppareil.classList.remove('font-light', 'w-48', 'placeholder')
        searchAppareil.classList.add('w-24', 'font-bold')
      } else {
        searchAppareil.classList.add('font-light', 'w-48', 'placeholder')
        searchAppareil.placeholder = 'Rechercher un appareil'
      }
      // rotation chevron au click
      const containerButtons = document.querySelector('.buttons')
      const chevrons = containerButtons.querySelectorAll('.fas')
      chevrons.forEach((chevron) => {
        chevron.classList.toggle('rotate-180')
      })

      const dropdownAppareils = document.querySelector('.dropdownAppareils')

      let tabAppliance = listButtons(this.Recipes).tabAppliance.sort()
      if (dropdownAppareils.classList.contains('hidden')) {
        dropdownAppareils.innerHTML = `${tabAppliance
          .map(
            (element) => `
        <li class="ingredients-list hover:bg-green-700 p-1 list-none cursor-pointer" data-type="appareil">${element}</li>`
          )
          .join(' ')}`
        dropdownAppareils.classList.remove('hidden')
      } else {
        dropdownAppareils.classList.add('hidden')
        dropdownAppareils.textContent = ''
      }

      const inputSearchAppareils = document.querySelector('#searchAppareils')
      // recherche dans le tableau ingredient
      inputSearchAppareils.addEventListener('keyup', () => {
        let search = inputSearchAppareils.value

        search = tabAppliance.filter(function (element) {
          // je filtre mes recettes suivant le resultat compris dans le tableau d'ingredient
          if (element.toLowerCase().includes(String(search))) {
            return element
          }
        })
        //mise en page du resultat sous forme de liste
        dropdownAppareils.innerHTML = `${search
          .map(
            (element) => `
        <li class="ingredients-list hover:bg-green-700 p-1 list-none cursor-pointer">${element}</li>`
          )
          .join(' ')}`
        //console.log('search: ', search)
        this.displayTag()
      })
      this.displayTag()
    })
  }

  // recherche dans l'input bouton Ustensils
  inputSearchUstensils() {
    // changement placeholder
    const searchUstensils = document.querySelector('.searchInputButtonUstensil')
    searchUstensils.addEventListener('click', () => {
      const buttonUstensil = document.querySelector('li.ustensilText')
      buttonUstensil.classList.add('justify-between')

      if (searchUstensils.classList.contains('placeholder')) {
        searchUstensils.placeholder = 'Ustensiles'
        searchUstensils.classList.remove('font-light', 'w-48', 'placeholder')
        searchUstensils.classList.add('w-24', 'font-bold')
      } else {
        searchUstensils.classList.add('font-light', 'w-48', 'placeholder')
        searchUstensils.placeholder = 'Rechercher un ustensile'
      }
      // rotation chevron au click
      const containerButtons = document.querySelector('.buttons')
      const chevrons = containerButtons.querySelectorAll('.fas')
      chevrons.forEach((chevron) => {
        chevron.classList.toggle('rotate-180')
      })

      const dropdownUstensils = document.querySelector('.dropdownUstensils')

      let tabUstensils = listButtons(this.Recipes).tabUstensils.sort()
      if (dropdownUstensils.classList.contains('hidden')) {
        dropdownUstensils.innerHTML = `${tabUstensils
          .map(
            (element) => `
        <li class="ingredients-list hover:bg-red-700 p-1 list-none cursor-pointer" data-type="ustensil">${element}</li>`
          )
          .join(' ')}`
        dropdownUstensils.classList.remove('hidden')
      } else {
        dropdownUstensils.classList.add('hidden')
        dropdownUstensils.textContent = ''
      }

      const inputSearchUstensils = document.querySelector('#searchUstensils')
      // recherche dans le tableau ingredient
      inputSearchUstensils.addEventListener('keyup', () => {
        let search = inputSearchUstensils.value

        search = tabUstensils.filter(function (element) {
          // je filtre mes recettes suivant le resultat compris dans le tableau d'ingredient
          if (element.toLowerCase().includes(String(search))) {
            return element
          }
        })
        //mise en page du resultat sous forme de liste
        dropdownUstensils.innerHTML = `${search
          .map(
            (element) => `
        <li class="ingredients-list hover:bg-red-700 p-1 list-none cursor-pointer">${element}</li>`
          )
          .join(' ')}`
        //console.log('search: ', search)
        this.displayTag()
      })
      this.displayTag()
    })
  }
  // au click sur un element de la liste
  displayTag() {
    // Click ingredients, selectionne son text value, pour cela :
    // Liste des <li> ingredients
    // Faire un foreach pour avoir chaque <li>
    // Pour chaque <li> faire un addeventlistener click
    // l'addeventlistener récupérer le textvalue du <li>

    const allLi = document.querySelectorAll('.ingredients-list')
    const zoneTag = document.querySelector('.zoneTag')
    // console.log('All li : ', allLi)
    allLi.forEach((li) => {
      // console.log(li)
      li.addEventListener('click', () => {
        let tag = li.textContent

        zoneTag.innerHTML += tag

        // repère des tags suivant leur datatype
        //couleur par style nok
        //revoir les conditions
        if (li.dataset.type === 'ingredient') {
          //zoneTag.classList.add('text-blue-600')
          console.log('ingredient')
        } else if (li.dataset.type === 'appareil') {
          //zoneTag.classList.add('text-green-600')
          console.log('appareil')
        } else if (li.dataset.type === 'ustensil') {
          console.log('ustensile')
        }
      })
    })

    // personnalisation des tag à faire
  }

  init() {
    this.displayCardRecipes(this.Recipes)
    this.inputSearch()
    this.inputSearchIngredients()
    this.inputSearchAppareils()
    this.inputSearchUstensils()
    this.listFiltered()
  }
}

// initialisation
const app = new MainApp()
app.init()

// Fait
// recherche dans l'inout barre de recherche ok - affichage carte ok - liste ingredients ok
// recherche input button ingredients ok - affichage carte ok

// a faire

// Personnalisation des tags
// Ajout des tag au click (ajout du bon data type)
// Suppression des tags (retour dans la bonne catégorie )
// rotation chevron

// dans la barre de recherche : recette ou n'importe quel mot ? titre, ingredient, description

//install tailwind et non avec un cdn
