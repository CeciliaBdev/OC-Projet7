import { recipesData } from '../data/recipes.js'
import { displayRecipes, displayDropDown } from './factorieCard.js'

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
          //console.log(this.getIngredients())
          //this.filterByIngredients('ail')
        }
        if (arrow.id === 'btnMenuAppareils') {
          tabAppareils = this.getAppareils()
          displayDropDown(tabAppareils, dropdownAppareils, 'green', 'appareil')
          // console.log(this.getAppareils())
          // this.filterByAppareil('blender')
        }
        if (arrow.id === 'btnMenuUstensils') {
          tabUstensils = this.getUstensils()
          displayDropDown(tabUstensils, dropdownUstensils, 'red', 'ustensil')
          // console.log(this.getUstensils())
          // this.filterByUstensil('Bol')
        }

        this.createTag()
        this.removeTag()
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
      } else {
        console.log('filterByIngredient rien trouvé')
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
      if (el.ustensils.includes(myUstensil)) {
        console.log('filterByUstensil trouvé')
        return el
      } else {
        console.log('filterByUstensil rien trouvé')
      }
    })
  }

  createTag() {
    // 1. je selectionne un element dans la liste du dropdown
    // 2. je crée le tag en css (suivant le data type)

    const allLi = document.querySelectorAll('.list')
    const zoneTag = document.querySelector('.zoneTag')

    allLi.forEach((li) => {
      li.addEventListener('click', () => {
        // console.log('click')
        const tag = document.createElement('div')
        // au click sur un li je crée un tag avec les propriétés suivantes
        tag.classList.add(
          'flex',
          'gap-3',
          'items-center',
          'tagCreated',
          'inline-block',
          'px-5',
          'py-2',
          'text-white',
          'rounded',
          'mr-2'
        )
        tag.textContent = li.textContent
        tag.innerHTML += '<i class="far fa-times-circle" id="cross"></i>'
        // console.log(li.textContent)
        // différences de tag suivant le data-type
        if (li.dataset.type === 'ingredient') {
          tag.classList.add('bg-blue-500')
          tag.setAttribute('data-type', 'ingredient')
          // console.log('ingredient')
          //li.classList.add('text-slate-400', 'italic')
        } else if (li.dataset.type === 'appareil') {
          tag.classList.add('bg-green-500')
          tag.setAttribute('data-type', 'appareil')
          //li.classList.add('text-slate-400', 'italic')
          //  console.log('appareil')
        } else if (li.dataset.type === 'ustensil') {
          tag.classList.add('bg-red-500')
          tag.setAttribute('data-type', 'ustensil')
          //li.classList.add('text-slate-400', 'italic')
          // console.log('ustensile')
        }
        // j'ajoute mon tag dans ma zoneTag
        zoneTag.appendChild(tag)

        this.filterByTag()
      })
    })
  }

  removeTag() {
    let tagClose = document.querySelectorAll('#cross')

    tagClose.forEach((tag) =>
      // au clic de la croix sur un tag
      tag.addEventListener('click', () => {
        let resultat = tag.parentNode.textContent
        // console.log('resultat:', resultat)
        tag.parentNode.remove()
        tag.classList.remove('tagCreated')

        this.currentRecipes = recipesData
        this.filterByTag()
      })
    )
  }

  filterByTag() {
    //1. j'analyse la div contenant les tag
    //2. je recupère les content dans un tableau
    //3. je trouve les recettes associés à ces content
    //4. je filtre les recettes communes (si plusieurs tags)
    //5. au final = j'ai un tableau de recettes filtrées via les tag

    // a la création de tag => class tagCreated
    let tagHtmlCollection = document.getElementsByClassName('tagCreated')

    let currentTagTab = []
    for (let i = 0; i < tagHtmlCollection.length; i++) {
      // si data type de tagHtmlCollection est ingrédient
      if (tagHtmlCollection[i].dataset.type === 'ingredient') {
        // console.log('ingredient')
        currentTagTab.push(tagHtmlCollection[i].textContent)
        this.filterByIngredients(tagHtmlCollection[i].textContent.toLowerCase())
        console.log(this.currentRecipes)
      }
      if (tagHtmlCollection[i].dataset.type === 'appareil') {
        // console.log('appareil')
        currentTagTab.push(tagHtmlCollection[i].textContent)
        this.filterByAppareil(tagHtmlCollection[i].textContent.toLowerCase())
        console.log(this.currentRecipes)
      }
      if (tagHtmlCollection[i].dataset.type === 'ustensil') {
        // console.log('ustensil')
        currentTagTab.push(tagHtmlCollection[i].textContent)
        this.filterByUstensil(tagHtmlCollection[i].textContent)
        console.log(this.currentRecipes)
      }
    }
    console.log(currentTagTab)
    displayRecipes(this.currentRecipes)
  }
}

// questions
// dropdown en absolute : le boutton ne s'aggrandit pas
