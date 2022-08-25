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
      let tagHtmlCollection = document.getElementsByClassName('tagCreated')

      const resultatSearchBar = inputSearch.value.toLowerCase()

      // contenu renvoi recherche filtrée si 3 caractères sinon renvoi toutes les recettes
      if (resultatSearchBar.length >= '3') {
        this.filterByTag()
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
            // console.log('ingredient trouvé')
            return el
          }
        })
      } else {
        this.currentRecipes = recipesData
        this.filterByTag()
      }
      displayRecipes(this.currentRecipes)
    })
  }

  dropDown() {
    // je selectionne les dropdown (hidden) de mes filtres ingredients - appareils - ustensils
    let dropdownIngredients = document.getElementById('dropdownIngredients')
    let dropdownAppareils = document.getElementById('dropdownAppareils')
    let dropdownUstensils = document.getElementById('dropdownUstensils')

    //tableau des ingredients - appareils - ustensils - vide au début
    let tabIngredients = []
    let tabAppareils = []
    let tabUstensils = []

    // les icones des filtres
    let arrowIngredientsUp = document.getElementById('btnMenuIngredientsUp')
    let arrowIngredientsDown = document.getElementById('btnMenuIngredientsDown')
    let arrowAppareilUp = document.getElementById('btnMenuAppareilUp')
    let arrowAppareilDown = document.getElementById('btnMenuAppareilDown')
    let arrowUstensilUp = document.getElementById('btnMenuUstensilUp')
    let arrowUstensilDown = document.getElementById('btnMenuUstensilDown')

    let liButtonIng = document.querySelector('#liButtonIngredient')
    let liButtonApp = document.querySelector('#liButtonAppareil')
    let liButtonUst = document.querySelector('#liButtonUstensil')

    // drop Ingredient
    arrowIngredientsDown.addEventListener('click', () => {
      liButtonIng.classList.add('justify-between')
      arrowIngredientsDown.style.display = 'none'
      arrowIngredientsUp.style.display = 'inline'
      dropdownIngredients.classList.remove('hidden')
      tabIngredients = this.getIngredients()
      displayDropDown(tabIngredients, dropdownIngredients, 'blue', 'ingredient')

      // partie TAG
      this.createTag()
      this.removeTag()
    })
    arrowIngredientsUp.addEventListener('click', () => {
      arrowIngredientsUp.style.display = 'none'
      arrowIngredientsDown.style.display = 'inline'
      dropdownIngredients.classList.add('hidden')
    })

    // drop Appareil
    arrowAppareilDown.addEventListener('click', () => {
      liButtonApp.classList.add('justify-between')
      arrowAppareilDown.style.display = 'none'
      arrowAppareilUp.style.display = 'inline'
      dropdownAppareils.classList.remove('hidden')
      tabAppareils = this.getAppareils()
      displayDropDown(tabAppareils, dropdownAppareils, 'green', 'appareil')

      // partie TAG
      this.createTag()
      this.removeTag()
    })
    arrowAppareilUp.addEventListener('click', () => {
      arrowAppareilUp.style.display = 'none'
      arrowAppareilDown.style.display = 'inline'
      dropdownAppareils.classList.add('hidden')
    })

    // drop ustensil
    arrowUstensilDown.addEventListener('click', () => {
      liButtonUst.classList.add('justify-between')
      arrowUstensilDown.style.display = 'none'
      arrowUstensilUp.style.display = 'inline'
      dropdownUstensils.classList.remove('hidden')
      tabUstensils = this.getUstensils()
      displayDropDown(tabUstensils, dropdownUstensils, 'red', 'ustensil')

      // partie TAG
      this.createTag()
      this.removeTag()
    })
    arrowUstensilUp.addEventListener('click', () => {
      arrowUstensilUp.style.display = 'none'
      arrowUstensilDown.style.display = 'inline'
      dropdownUstensils.classList.add('hidden')
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
        // console.log('filterByIngredient trouvé')
        return el
      } else {
        // console.log('filterByIngredient rien trouvé')
      }
    })
  }
  filterByAppareil(myAppareil) {
    this.currentRecipes = this.currentRecipes.filter((el) => {
      if (el.appliance.toLowerCase().includes(myAppareil.toLowerCase())) {
        // console.log('filterByAppareil trouvé')
        return el
      }
    })
  }

  filterByUstensil(myUstensil) {
    this.currentRecipes = this.currentRecipes.filter((el) => {
      if (el.ustensils.includes(myUstensil)) {
        // console.log('filterByUstensil trouvé')
        return el
      } else {
        // console.log('filterByUstensil rien trouvé')
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
        // différences de tag suivant le data-type
        if (li.dataset.type === 'ingredient') {
          tag.classList.add('bg-blue-500')
          tag.setAttribute('data-type', 'ingredient')
          //li.classList.add('text-slate-400', 'italic')
        } else if (li.dataset.type === 'appareil') {
          tag.classList.add('bg-green-500')
          tag.setAttribute('data-type', 'appareil')
          //li.classList.add('text-slate-400', 'italic')
        } else if (li.dataset.type === 'ustensil') {
          tag.classList.add('bg-red-500')
          tag.setAttribute('data-type', 'ustensil')
          //li.classList.add('text-slate-400', 'italic')
        }
        // j'ajoute mon tag dans ma zoneTag
        zoneTag.appendChild(tag)

        this.filterByTag()

        // fermeture des drop
        let dropdownIngredients = document.getElementById('dropdownIngredients')
        let dropdownAppareils = document.getElementById('dropdownAppareils')
        let dropdownUstensils = document.getElementById('dropdownUstensils')

        let inputIngredients = document.getElementById('inputIngredients')
        let inputAppareils = document.getElementById('inputAppareils')
        let inputUstensils = document.getElementById('inputUstensils')

        let arrowIngredientsUp = document.getElementById('btnMenuIngredientsUp')
        let arrowIngredientsDown = document.getElementById(
          'btnMenuIngredientsDown'
        )

        let arrowAppareilUp = document.getElementById('btnMenuAppareilUp')
        let arrowAppareilDown = document.getElementById('btnMenuAppareilDown')

        let arrowUstensilUp = document.getElementById('btnMenuUstensilUp')
        let arrowUstensilDown = document.getElementById('btnMenuUstensilDown')
        this.closeDropAfterTag(
          dropdownIngredients,
          inputIngredients,
          arrowIngredientsUp,
          arrowIngredientsDown
        )
        this.closeDropAfterTag(
          dropdownAppareils,
          inputAppareils,
          arrowAppareilUp,
          arrowAppareilDown
        )
        this.closeDropAfterTag(
          dropdownUstensils,
          inputUstensils,
          arrowUstensilUp,
          arrowUstensilDown
        )
      })
    })
  }

  removeTag() {
    let tagClose = document.querySelectorAll('#cross')
    let tagHtmlCollection = document.getElementsByClassName('tagCreated')

    tagClose.forEach((tag) =>
      // au clic de la croix sur un tag
      tag.addEventListener('click', () => {
        tag.parentNode.remove()
        tag.classList.remove('tagCreated')
        let tabRemove = []
        for (let i = 0; i < tagHtmlCollection.length; i++) {
          tabRemove.push(tagHtmlCollection[i].textContent)
        }
        // si recherche en cours à revoir ici
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

    // input serachBar
    const inputSearch = document.querySelector('.container input')

    // j'ajoute cette valeur à mon currentTagTab (quand je créé un tag, avec une recherche existante, j'ajoute l'input.value dans mon tableau)
    let currentTagTab = []
    currentTagTab.push(inputSearch.value)

    for (let i = 0; i < tagHtmlCollection.length; i++) {
      // si data type de tagHtmlCollection est ingrédient
      if (tagHtmlCollection[i].dataset.type === 'ingredient') {
        currentTagTab.push(tagHtmlCollection[i].textContent)
        this.filterByIngredients(tagHtmlCollection[i].textContent.toLowerCase())
      }
      if (tagHtmlCollection[i].dataset.type === 'appareil') {
        currentTagTab.push(tagHtmlCollection[i].textContent)
        this.filterByAppareil(tagHtmlCollection[i].textContent.toLowerCase())
      }
      if (tagHtmlCollection[i].dataset.type === 'ustensil') {
        currentTagTab.push(tagHtmlCollection[i].textContent)
        this.filterByUstensil(tagHtmlCollection[i].textContent)
      }
    }

    // Mise à jour search bar
    this.currentRecipes = this.currentRecipes.filter((el) => {
      // je filtre mes recettes suivant le resultat compris dans le titre (name), la description, ou l'ingrédient
      // si existantes
      if (
        el.name.toLowerCase().includes(inputSearch.value) || // titre
        el.description.toLowerCase().includes(inputSearch.value) || // description
        el.ingredients.filter((ingred) =>
          ingred.ingredient.toLowerCase().includes(inputSearch.value)
        ).length >= 1 //filtre sur ingredient dans ingredients (non vide)
      ) {
        return el
      }
    })

    displayRecipes(this.currentRecipes)
  }

  listDropFilter(input, tab, dropdown, color, type) {
    input.addEventListener('keyup', () => {
      // mon resultat de l'input dans la recherche
      let resultatInput = input.value
      resultatInput = tab.filter(function (element) {
        if (element.toLowerCase().includes(String(resultatInput))) {
          return element
        }
      })
      dropdown.innerHTML = `${resultatInput
        .map(
          (element) => `
              <li class="list hover:bg-${color}-700 p-1 list-none cursor-pointer " data-type='${type}'>${element}</li>`
        )
        .join(' ')}`

      this.createTag()
      this.removeTag()
    })
  }
  closeDropAfterTag(drop, input, arrowUp, arrowDown) {
    drop.classList.add('hidden')
    input.value = ''
    arrowUp.style.display = 'none'
    arrowDown.style.display = 'inline'
    // pour pouvoir fermer les tags (après la fermeture du drop)
    this.removeTag()
  }
}

// questions
// dropdown en absolute : le boutton ne s'aggrandit pas

// reste a faire
//1.placeholder input

// dropdown
//allArrow.forEach((arrow) => {
//   arrow.addEventListener('click', () => {
//     // j'ajoute style css sur le bouton
//     liButton.forEach((button) => {
//       button.classList.add('justify-between')
//       arrow.classList.toggle('rotate-180')
//     })

//     if (arrow.id === 'btnMenuIngredients') {
//       dropdownIngredients.style.display = 'grid'
//       tabIngredients = this.getIngredients()
//       displayDropDown(
//         tabIngredients,
//         dropdownIngredients,
//         'blue',
//         'ingredient'
//       )
//       //console.log(this.getIngredients())
//       //this.filterByIngredients('ail')

//       inputIngredients.addEventListener('click', () => {
//         this.listDropFilter(
//           inputIngredients,
//           tabIngredients,
//           dropdownIngredients,
//           'blue',
//           'ingredient'
//         )
//       })
//     }
//     if (arrow.id === 'btnMenuAppareils') {
//       tabAppareils = this.getAppareils()
//       displayDropDown(tabAppareils, dropdownAppareils, 'green', 'appareil')
//       // console.log(this.getAppareils())
//       // this.filterByAppareil('blender')

//       inputAppareils.addEventListener('keyup', () => {
//         this.listDropFilter(
//           inputAppareils,
//           tabAppareils,
//           dropdownAppareils,
//           'green',
//           'appareil'
//         )
//       })
//     }
//     if (arrow.id === 'btnMenuUstensils') {
//       tabUstensils = this.getUstensils()
//       displayDropDown(tabUstensils, dropdownUstensils, 'red', 'ustensil')
//       // console.log(this.getUstensils())
//       // this.filterByUstensil('Bol')
//       inputUstensils.addEventListener('keyup', () => {
//         this.listDropFilter(
//           inputUstensils,
//           tabUstensils,
//           dropdownUstensils,
//           'red',
//           'ustensil'
//         )
//       })
//     }
//     this.createTag()
//     this.removeTag()
//   })
// })
