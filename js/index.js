import { recipesData } from '../data/recipes.js'
import { CardRecipes } from '../js/RecipesCard.js'

// info données recette

export class MainApp {
  constructor() {
    this.articleCardContainer = document.querySelector('#card_container')
    this.Recipes = recipesData
    console.log(this.Recipes) //mon tableau de recette
  }

  displayCardRecipes() {
    const tabRecipes = this.Recipes
    tabRecipes.forEach((element) => {
      const template = new CardRecipes(element)
      // console.log('Template :', typeof template)

      // console.log('CreateCard :', typeof template.createCard())

      // console.log('articlecardcontainer :', typeof this.articleCardContainer)

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
