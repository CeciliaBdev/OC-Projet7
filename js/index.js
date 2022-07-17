import { recipesData } from '../data/recipes.js'
import { CardRecipes } from '../js/RecipesCard.js'

// info données recette

export class MainApp {
  constructor() {
    this.articleCardContainer = document.querySelector('#card_container')
    this.Recipes = recipesData
    console.log(recipesData) //mon tableau de recette
  }

  displayCardRecipes() {
    const tab = this.Recipes
    tab.forEach((element) => {
      //pour chaque element de mon tableau //Erreur : le appendChild ne passe pas (si je remplace par innerHtml: j'ai le dernier element de mon tableau qui s'affiche)
      const template = new CardRecipes(element)
      this.articleCardContainer.appendChild(
        //j'ajoute une nouvelle carte
        template.createCard()
      )
    })
  }

  init() {
    this.displayCardRecipes()
  }
}

const app = new MainApp()
app.init()
