// recipes.mjs (rewritten)
const recipes = [
  {
    author: 'Provo High Culinary Students',
    name: 'Sweet Potato Waffles',
    description: 'Savory waffles made with sweet potato and a touch of ginger.',
    image: './images/sweet-potato-waffle-md.jpg',
    tags: ['Waffles', 'Sweet Potato', 'Side'],
    recipeIngredient: [
      '2 eggs, separated',
      '1/4 cup oil',
      '1/4 tsp salt',
      '1/4 tsp cayenne pepper',
      '3/4 cup milk',
      '1 tbsp brown sugar',
      '2 tsp shredded ginger',
      '3/4 cup mashed sweet potatoes',
      '1 tbsp minced shallots',
      '1 tbsp baking powder',
      '1 tbsp chopped chives',
      '1/4 cup cornmeal',
      '1 cup flour'
    ],
    recipeInstructions: [
      'Mix yolks, oil, spices, sugar, ginger, shallots, sweet potato, and milk.',
      'Blend in cornmeal, chives, flour, and baking powder.',
      'Whip egg whites to stiff peaks and gently fold in.',
      'Cook batter in waffle iron until crispy and brown.'
    ],
    prepTime: '30 Min',
    cookTime: '30 Min',
    datePublished: '2016-10-16',
    recipeYield: '6 waffles',
    rating: 4,
    url: '',
    isBasedOn: ''
  },
  {
    author: 'Shane Thompson',
    name: 'Escalope de Poulet a la Creme with Steamed Green Beans',
    description: 'A creamy chicken and rice dish enhanced by mustard and mushrooms, served with tender green beans.',
    image: './images/escalopes-de-poulet-a-la-creme.webp',
    tags: ['Chicken', 'Entree'],
    recipeIngredient: [
      '2 chicken tenders, cubed',
      '4 sliced mushrooms',
      '1/2 cup heavy cream',
      '1–2 tbsp stone ground mustard',
      '1 tsp lemon juice',
      'Salt and pepper to taste',
      '1 cup rice, uncooked',
      '4–5 oz fresh green beans'
    ],
    recipeInstructions: [
      'Boil water, cook rice covered on low until done (10–15 minutes).',
      'Sauté chicken, adding mushrooms halfway through.',
      'Stir in cream, mustard, lemon, and seasoning. Simmer 5 mins.',
      'Steam green beans and serve everything together.'
    ],
    prepTime: '10 min',
    cookTime: '20 min',
    datePublished: '',
    recipeYield: '3 servings',
    rating: 4.5,
    url: '',
    isBasedOn: ''
  }
  // Remaining recipes would be similarly rewritten
];

export default recipes;
