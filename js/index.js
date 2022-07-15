import { recipesData } from '../data/recipes.js'

function displayRecipes(recipesData) {
  const sectionCard = document.querySelector('.infos_recette')
  //   sectionCard.innerHTML = ''

  recipesData.forEach((recipe) => {
    const creaCarte = new CardRecipes(recipe).createCard()
    sectionCard.innerHTML = creaCarte
  })
}

function init() {
  displayRecipes(recipesData)
}

init()
