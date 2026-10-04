"use strict";

let recipes = ["carrot", "broccoli", "asparagus", "cauliflower", "corn", "cucumber", "green pepper", "lettuce", "mushrooms", "onion", "potato", "pumpkin","red pepper", "tomato", "beetroot", "brussel sprouts", "peas", "zucchini","radish", "sweet potato", "artichoke", "leek", "cabbage", "celery", "chili","garlic", "basil", "coriander", "parsley", "dill", "rosemary", "oregano","cinnamon", "saffron", "green bean", "bean", "chickpea", "lentil", "apple","apricot", "avocado", "banana", "blackberry", "blackcurrant", "blueberry","boysenberry", "cherry", "coconut", "fig", "grape", "grapefruit", "kiwifruit","lemon", "lime", "lychee", "mandarin", "mango", "melon", "nectarine", "orange","papaya", "passion fruit", "peach", "pear", "pineapple", "plum", "pomegranate","quince", "raspberry", "strawberry", "watermelon", "salad", "pasta","popcorn", "lobster", "steak", "bbq", "pudding", "hamburger", "pie", "cake","sausage", "tacos", "kebab", "poutine", "seafood", "chips", "fries", "masala","paella", "som tam", "chicken", "toast", "marzipan", "tofu", "ketchup","hummus", "chili", "maple syrup", "parma ham", "fajitas", "champ", "lasagna","poke", "chocolate", "croissant", "arepas", "bunny chow", "pierogi", "donuts","rendang", "sushi", "ice cream", "duck", "curry", "beef", "goat", "lamb","turkey", "pork", "fish", "crab", "bacon", "ham", "pepperoni", "salami", "ribs"];
let recipeSelector = document.querySelector("#recipes");
let searchInput = document.querySelector("#search");
let recipeContainer = document.querySelector("#recipe-container");
let recData = [];


function fillSelector() {
    recipes.forEach((recipe) => {
        let option = document.createElement("option");
        option.value = recipe;
        option.textContent = recipe;
        recipeSelector.appendChild(option);
    });
}
fillSelector();

async function getRecipe(recipe) {
    let url = `https://forkify-api.jonas.io/api/v2/recipes?search=${recipe}&key=5beb2fd0-cc33-4cf4-92a0-62add9fb13f4`;
    const res = await fetch(url);
    const data = await res.json();
    const recipeData = data.data.recipes;
    recData = recipeData;
    displayRecipes();
}
getRecipe("pizza");
recipeSelector.addEventListener("change", function () {
    let selectedRecipe = recipeSelector.value;
    getRecipe(selectedRecipe);
});

searchInput.addEventListener("change", function () {
    let searchValue = searchInput.value.toLowerCase();
    if(searchValue != "") getRecipe(searchValue);
    else getRecipe(recipeSelector.value);
});

function displayRecipes() {
    recipeContainer.innerHTML = "";
    recData.map((recipe) => {
        let recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
        recipeCard.innerHTML = `
            <img src="${recipe.image_url}" class="card-img-top" style="width: 100%; height: 200px; object-fit: cover;" alt="${recipe.title}">
            <div class="card-body">
                <h5 class="card-title">${recipe.title}</h5>
                <p class="card-text">${recipe.publisher}</p>
            </div>
        `;
        recipeContainer.appendChild(recipeCard);
    });
}

recipeContainer.addEventListener("click", function (e) {
    let recipeCard = e.target.closest(".recipe-card");
    
})