import { picking } from "./gettingRecipeName";
import { getRecipe } from "./recipeSearch-fetch.js";

export function ModalRendering({ mealprep }) {
  return (
    <>
      <h1 id="modal-head">Recipe Name: {mealprep.meal}</h1>
      <p>Category: {mealprep.category}</p>
      <p>Type: {mealprep.type}</p>
      <img src={mealprep.photo} id="modal-pics" />
      <iframe height="480" width="500" src={mealprep.video} />
      <h2> Steps: {mealprep.instructions}</h2>
      <ul>
        <ul className="ingredient">Ingredient: {mealprep.ingredient1}</ul>
        <p className="ingre">Measurement: {mealprep.strMeasure1}</p>

        <ul className="ingredient">Ingredient: {mealprep.ingredient2}</ul>
        <p className="ingre"> Measurement: {mealprep.strMeasure2}</p>

        <ul className="ingredient">Ingredient: {mealprep.ingredient3}</ul>
        <p className="ingre">Measurement: {mealprep.strMeasure3}</p>

        <ul className="ingredient">Ingredient: {mealprep.ingredient4}</ul>
        <p className="ingre">Measurement: {mealprep.strMeasure4}</p>

        <ul className="ingredient">Ingredient: {mealprep.ingredient5}</ul>
        <p className="ingre">Measurement: {mealprep.strMeasure5}</p>

        <ul className="ingredient"> Ingredient: {mealprep.ingredient6}</ul>
        <p className="ingre">Measurement: {mealprep.strMeasure6}</p>

        <ul className="ingredient">Ingredient: {mealprep.ingredient7}</ul>
        <p className="ingre">Measurement: {mealprep.strMeasure7}</p>

        <ul className="ingredient">Ingredient: {mealprep.ingredient8}</ul>
        <p className="ingre">Measurement: {mealprep.strMeasure8}</p>

        <ul className="ingredient">IIngredient: {mealprep.ingredient9}</ul>
        <p className="ingre">Measurement: {mealprep.strMeasure9}</p>

        <ul className="ingredient">Ingredient: {mealprep.ingredient10}</ul>
        <p className="ingre">Measurement: {mealprep.strMeasure10}</p>

        <ul className="ingredient">Ingredient: {mealprep.ingredient11}</ul>
        <p className="ingre">Measurement: {mealprep.strMeasure11}</p>

        <ul className="ingredient">Ingredient: {mealprep.ingredient12}</ul>
        <p className="ingre">Measurement: {mealprep.strMeasure12}</p>

        <ul className="ingredient">Ingredient: {mealprep.ingredient13}</ul>
        <p className="ingre">Measurement: {mealprep.strMeasure13}</p>

        <ul className="ingredient">Ingredient: {mealprep.ingredient14}</ul>
        <p className="ingre">Measurement: {mealprep.strMeasure14}</p>

        <ul className="ingredient">Ingredient: {mealprep.ingredient15}</ul>
        <p className="ingre">Measurement: {mealprep.strMeasure15}</p>

        <ul className="ingredient">Ingredient: {mealprep.ingredient16}</ul>
        <p className="ingre">Measurement: {mealprep.strMeasure16}</p>

        <ul className="ingredient">Ingredient: {mealprep.ingredient17}</ul>
        <p className="ingre">Measurement: {mealprep.strMeasure17}</p>

        <ul className="ingredient">Ingredient: {mealprep.ingredient18}</ul>
        <p className="ingre">Measurement: {mealprep.strMeasure18}</p>

        <ul className="ingredient">Ingredient: {mealprep.ingredient19}</ul>
        <p className="ingre">Measurement: {mealprep.strMeasure19}</p>

        <ul className="ingredient">Ingredient: {mealprep.ingredient20}</ul>
        <p className="ingre">Measurement: {mealprep.strMeasure20}</p>
      </ul>
    </>
  );
}
