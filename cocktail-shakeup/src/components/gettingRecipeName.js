import { getRecipe } from "./recipeSearch-fetch.js";
import { Modal } from "./recipeModal.jsx";

export function picking() {
  document.querySelector("#meals").addEventListener("click", (e) => {
    const img = e.target.closest(".photos");
    console.log("clicked");
    const foodName = img.getAttribute("alt");
    const mealName = getRecipe(foodName);
    // Modal(mealName);
  });
}
