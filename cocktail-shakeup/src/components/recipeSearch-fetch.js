export const getRecipe = (foodName) => {
  let searching = " ";
  let count = foodName.split(" ");
  let word = count.length - 1;

  if (word === 0) {
    searching = foodName;
  } else {
    searching = foodName.split(" ").join("+");
  }

  if (searching[searching.length - 1] === "+") {
    let newW = searching.split("");
    newW.pop();
    searching = newW.join("");
  }

  console.log(searching);
  return fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searching}`
  )
    .then((response) => {
      if (!response.ok) {
        throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
      }

      const foodPromise = response.json();
      return foodPromise;
    })
    .then((data) => {
      if (data.length === 0) {
        return null;
      }

      const mealprep = {};

      const extention = data.meals[0];

      mealprep.meal = extention.strMeal;
      mealprep.category = extention.strCategory;
      mealprep.type = extention.strArea;
      mealprep.instructions = extention.strInstructions;
      mealprep.photo = extention.strMealThumb;
      mealprep.video = extention.strYoutube;

      mealprep.ingredient1 = extention.strIngredient1
        ? extention.strIngredient1
        : null;
      mealprep.ingredient2 = extention.strIngredient2
        ? extention.strIngredient2
        : null;
      mealprep.ingredient3 = extention.strIngredient3
        ? extention.strIngredient3
        : null;
      mealprep.ingredient4 = extention.strIngredient4
        ? extention.strIngredient4
        : null;
      mealprep.ingredient5 = extention.strIngredient5
        ? extention.strIngredient5
        : null;
      mealprep.ingredient6 = extention.strIngredient6
        ? extention.strIngredient6
        : null;
      mealprep.ingredient7 = extention.strIngredient7
        ? extention.strIngredient7
        : null;
      mealprep.ingredient8 = extention.strIngredient8
        ? extention.strIngredient8
        : null;
      mealprep.ingredient9 = extention.strIngredient9
        ? extention.strIngredient9
        : null;
      mealprep.ingredient10 = extention.strIngredient10
        ? extention.strIngredient10
        : null;
      mealprep.ingredient11 = extention.strIngredient11
        ? extention.strIngredient11
        : null;
      mealprep.ingredient12 = extention.ingredient12
        ? extention.strIngredient12
        : null;
      mealprep.ingredient13 = extention.ingredient13
        ? extention.strIngredient13
        : null;
      mealprep.ingredient14 = extention.ingredient14
        ? extention.strIngredient14
        : null;
      mealprep.ingredient15 = extention.ingredient15
        ? extention.strIngredient15
        : null;
      mealprep.ingredient16 = extention.ingredient16
        ? extention.ingredient16
        : null;
      mealprep.ingredient17 = extention.ingredient17
        ? extention.ingredient17
        : null;
      mealprep.ingredient18 = extention.ingredient18
        ? extention.ingredient18
        : null;
      mealprep.ingredient19 = extention.ingredient19
        ? extention.ingredient19
        : null;
      mealprep.ingredient20 = extention.ingredient20
        ? extention.ingredient20
        : null;

      mealprep.strMeasure1 = extention.strMeasure1
        ? extention.strMeasure1
        : null;
      mealprep.strMeasure2 = extention.strMeasure2
        ? extention.strMeasure2
        : null;
      mealprep.strMeasure3 = extention.strMeasure3
        ? extention.strMeasure3
        : null;
      mealprep.strMeasure4 = extention.strMeasure4
        ? extention.strMeasure4
        : null;
      mealprep.strMeasure5 = extention.strMeasure5
        ? extention.strMeasure5
        : null;
      mealprep.strMeasure6 = extention.strMeasure6
        ? extention.strMeasure6
        : null;
      mealprep.strMeasure7 = extention.strMeasure7
        ? extention.strMeasure7
        : null;
      mealprep.strMeasuret8 = extention.strMeasuret8
        ? extention.strMeasuret8
        : null;
      mealprep.strMeasure9 = extention.strMeasure9
        ? extention.strMeasure9
        : null;
      mealprep.strMeasure10 = extention.strMeasure10
        ? extention.strMeasure10
        : null;
      mealprep.strMeasure11 = extention.strMeasure11
        ? extention.strMeasure11
        : null;
      mealprep.strMeasure12 = extention.strMeasure12
        ? extention.strMeasure12
        : null;
      mealprep.strMeasure13 = extention.strMeasure13
        ? extention.strMeasure13
        : null;
      mealprep.strMeasure14 = extention.strMeasure14
        ? extention.strMeasure14
        : null;
      mealprep.strMeasure15 = extention.strMeasure15
        ? extention.strMeasure15
        : null;
      mealprep.strMeasure16 = extention.strMeasure16
        ? extention.strMeasure16
        : null;
      mealprep.strMeasure17 = extention.strMeasure17
        ? extention.strMeasure17
        : null;
      mealprep.strMeasure18 = extention.strMeasure18
        ? extention.strMeasure18
        : null;
      mealprep.strMeasure19 = extention.strMeasure19
        ? extention.strMeasure19
        : null;
      mealprep.strMeasure20 = extention.strMeasure20
        ? extention.strMeasure20
        : null;

      console.log(mealprep);
      return mealprep;
    })
    .catch((err) => {
      // 6. Handle Errors
      console.error(err);
    });
};
// getRecipe("Brown Stew Chicken").then((food) => console.log(food));
