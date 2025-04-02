export function ModalRendering({ mealprep }) {
  return (
    <>
      <h1 id="modal-head">Recipe Name: {mealprep.meal}</h1>
      <p>Category: {mealprep.category}</p>
      <p>Type: {mealprep.type}</p>
      <img src={mealprep.photo} id="modal-pics" />
      <iframe height="250" width="250" id="video" src={mealprep.video} />
      <h2 id="steps"> Steps: {mealprep.instructions}</h2>
      <ul>
        <ul className="ingredient"> Ingredient 1: {mealprep.ingredient1} </ul>
        <p className="ingre">Measurement 1: {mealprep.strMeasure1}</p>?
        <ul className="ingredient">Ingredient 2: {mealprep.ingredient2}</ul>
        <p className="ingre"> Measurement 2: {mealprep.strMeasure2}</p>
        <ul className="ingredient">Ingredient 3: {mealprep.ingredient3}</ul>
        <p className="ingre">Measurement 3: {mealprep.strMeasure3}</p>
        <ul className="ingredient">Ingredient 4: {mealprep.ingredient4}</ul>
        <p className="ingre">Measurement 4: {mealprep.strMeasure4}</p>
        <ul className="ingredient">Ingredient 5: {mealprep.ingredient5}</ul>
        <p className="ingre">Measurement 5: {mealprep.strMeasure5}</p>
        <ul className="ingredient"> Ingredient 6: {mealprep.ingredient6}</ul>
        <p className="ingre">Measurement 6: {mealprep.strMeasure6}</p>
        <ul className="ingredient">Ingredient 7: {mealprep.ingredient7}</ul>
        <p className="ingre">Measurement 7: {mealprep.strMeasure7}</p>
        <ul className="ingredient">Ingredient 8: {mealprep.ingredient8}</ul>
        <p className="ingre">Measurement 8: {mealprep.strMeasure8}</p>
        <ul className="ingredient">Ingredient 9: {mealprep.ingredient9}</ul>
        <p className="ingre">Measurement 9: {mealprep.strMeasure9}</p>
        <ul className="ingredient">Ingredient 10: {mealprep.ingredient10}</ul>
        <p className="ingre">Measurement 10: {mealprep.strMeasure10}</p>
        <ul className="ingredient">Ingredient 11: {mealprep.ingredient11}</ul>
        <p className="ingre">Measurement 11: {mealprep.strMeasure11}</p>
        <ul className="ingredient">Ingredient 12: {mealprep.ingredient12}</ul>
        <p className="ingre">Measurement 12: {mealprep.strMeasure12}</p>
        <ul className="ingredient">Ingredient 13: {mealprep.ingredient13}</ul>
        <p className="ingre">Measurement 13: {mealprep.strMeasure13}</p>
        <ul className="ingredient">Ingredient 14: {mealprep.ingredient14}</ul>
        <p className="ingre">Measurement 14: {mealprep.strMeasure14}</p>
        <ul className="ingredient">Ingredient 15: {mealprep.ingredient15}</ul>
        <p className="ingre">Measurement 15: {mealprep.strMeasure15}</p>
        <ul className="ingredient">Ingredient 16: {mealprep.ingredient16}</ul>
        <p className="ingre">Measurement 16: {mealprep.strMeasure16}</p>
        <ul className="ingredient">Ingredient 17: {mealprep.ingredient17}</ul>
        <p className="ingre">Measurement 17: {mealprep.strMeasure17}</p>
        <ul className="ingredient">Ingredient 18: {mealprep.ingredient18}</ul>
        <p className="ingre">Measurement 18: {mealprep.strMeasure18}</p>
        <ul className="ingredient">Ingredient 19: {mealprep.ingredient19}</ul>
        <p className="ingre">Measurement 19: {mealprep.strMeasure19}</p>
        <ul className="ingredient">Ingredient 20: {mealprep.ingredient20}</ul>
        <p className="ingre">Measurement 20: {mealprep.strMeasure20}</p>
      </ul>
    </>
  );
}
