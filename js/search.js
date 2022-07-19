import { recipesData } from '../data/recipes.js'
import { CardRecipes } from '../js/RecipesCard.js'

// selectionne l'input
const inputSearch = document.querySelector('.container input')
const placeRecipe = document.querySelector('#card_container')

console.log(recipesData)

// evenement : recupere en temps réel le champ input (tapé au clavier)
inputSearch.addEventListener('keyup', () => {
  const resultat = inputSearch.value
  //console.log('resultat ,', resultat)
  const nbCaractere = resultat.length
  // console.log('nb , ', nbCaractere)

  // si le mot tapé fait 3 caractère ou plus
  if (nbCaractere >= '3') {
    // mon tableau de recette
    const tabrecipes = recipesData
    let tabFilter = tabrecipes.filter(function (el) {
      //   if (el.name.includes('Salade')) {
      //     return el
      //   }
      if (el.name.toLocaleLowerCase().includes(String(resultat))) {
        placeRecipe.innerHTML = ''
        return el
      }
    })
    // tableau filtré
    console.log(tabFilter)

    // affichage recette
    class MainApp {
      constructor() {
        this.articleCardContainer = document.querySelector('#card_container')
        this.Recipes = tabFilter
        //console.log(recipesData) //mon tableau de recette
      }

      displayCardRecipes() {
        const tabFilter = this.Recipes
        tabFilter.forEach((element) => {
          const template = new CardRecipes(element)

          const card = document.createElement('article')
          card.classList.add('d-inline-block', 'col-4', 'mt-5')
          card.innerHTML = template.createCard()

          this.articleCardContainer.appendChild(card)
        })
      }

      init() {
        this.displayCardRecipes()
      }
    }

    const app = new MainApp()
    app.init()
  }
})
