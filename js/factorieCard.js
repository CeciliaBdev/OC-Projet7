// mon modele pour créer les cartes
// deux parties
// 1ere affichage style css

function factorieCard(recette) {
  function getCardDom() {
    // endroit de mes cartes
    const sectionRecipe = document.getElementById('card_container')

    const cardRecipe = `<div class="rounded-lg shadow-lg bg-white  cardRecipe text-sm cursor-pointer m-2">
                          <div class="bgImg h-48 rounded-t-lg "></div>
                          <div class="infos_recette flex justify-between p-5 pb-0 h-14 gap-2" >
                            <div>${recette.name}</div>
                            <div class="flex gap-2 font-bold"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10.5 5H9V11L14.2 14.2L15 12.9L10.5 10.2V5Z" fill="black"/>
                            </svg>
                            ${recette.time}min</div>
                          </div>
                          <div class="description_recette flex justify-between p-5 pt-1 text-sm ">
                          <ul class='list-none w-40' id="ingredients-${
                            recette.id
                          }"></ul>
                          <div class='w-40 text-justify'>${
                            recette.description.substring(0, 150) + '...'
                          }</div>
                          </div>
                        </div>`

    sectionRecipe.insertAdjacentHTML('beforeEnd', cardRecipe)
  }
  getCardDom()

  // pour afficher ma liste d'ingredients contenu dans le tableau ingredient
  recette.ingredients.forEach((ingredient) => {
    // je selectionne ingredients st son id
    let listIngredients = document.querySelector('#ingredients-' + recette.id)

    let elIngredient = ingredient.ingredient
    let elQuantinty = ingredient.quantity
    let elUnit = ingredient.unit

    // consitions d'affichage si défini ou non
    // si pas de quantité, quantité vide
    if (elQuantinty == undefined) {
      elQuantinty = ''
    }
    // si pas d'unité
    // unité vide
    if (elUnit == undefined) {
      elUnit = ''
    }

    const liste = `<li>${elIngredient} : ${elQuantinty} ${elUnit} </li>`

    // j'integre mtn ma variable liste dans listIngredient
    listIngredients.insertAdjacentHTML('beforeend', liste)
  })
}

export function displayRecipes(allRecipes) {
  const sectionRecipe = document.getElementById('card_container')
  sectionRecipe.innerHTML = ''

  if (allRecipes.length === 0) {
    sectionRecipe.innerText = 'hello'
  }

  allRecipes.forEach((recette) => {
    factorieCard(recette)
  })
}
