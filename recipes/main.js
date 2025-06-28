import recipes from "./recipes.mjs";

const getRandomIndex = (length) => Math.floor(Math.random() * length);

const getRandomItem = (array) => array[getRandomIndex(array.length)];

function createTagsHTML(tags) {
  let tagHTML = `<div class="tags-container">`;
  tags.forEach(tag => {
    tagHTML += `<h3 class="category">${tag}</h3>`;
  });
  tagHTML += `</div>`;
  return tagHTML;
}

function createRatingHTML(rating) {
  let stars = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    stars += `<span aria-hidden="true" class="${i <= rating ? 'icon-star' : 'icon-star-empty'}">${i <= rating ? '⭐' : '☆'}</span>`;
  }
  stars += `</span>`;
  return stars;
}

function generateRecipeHTML(recipe) {
  return `
    <div class="recipe">
      <img class="food-img" src="${recipe.image}" alt="image of ${recipe.name}">
      <div class="detail">
        ${createTagsHTML(recipe.tags)}
        <h2 class="dessert-name">${recipe.name}</h2>
        ${createRatingHTML(recipe.rating)}
        <p>${recipe.description}</p>
      </div>
    </div>
  `;
}

function displayRecipes(list) {
  const container = document.querySelector(".recipes");
  container.innerHTML = "";
  if (!list.length) {
    container.innerHTML = `<h2 id="no-result">No Result Found</h2>`;
    return;
  }
  list.forEach(item => {
    container.innerHTML += generateRecipeHTML(item);
  });
}

function initializePage() {
  const randomRecipe = getRandomItem(recipes);
  displayRecipes([randomRecipe]);
}

function doesRecipeMatch(recipe, query) {
  query = query.toLowerCase();
  return recipe.name.toLowerCase().includes(query)
    || recipe.description.toLowerCase().includes(query)
    || recipe.recipeIngredient.some(ing => ing.toLowerCase().includes(query))
    || recipe.tags.some(tag => tag.toLowerCase().includes(query));
}

function getMatchingRecipes(query) {
  return recipes.filter(recipe => doesRecipeMatch(recipe, query));
}

function handleSearchClick() {
  console.log("Search initiated");
  const input = document.querySelector("#search-input").value.toLowerCase();
  const results = getMatchingRecipes(input);
  results.sort((a, b) => a.name.localeCompare(b.name));
  displayRecipes(results);
}

initializePage();
document.querySelector("#search-button").addEventListener("click", handleSearchClick);
