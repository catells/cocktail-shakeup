import { handleFetch } from './handleFetch.js';

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

const getDrinkData = (drinkData) => {
    return {
      drink: drinkData.strDrink,
      alcoholic: drinkData.strAlcoholic,
      glass: drinkData.strGlass,
      instructions: {
        en: drinkData.strInstructions,
        es: drinkData.strInstructionsES,
        de: drinkData.strInstructionsDE,
        fr: drinkData.strInstructionsFR,
        it: drinkData.strInstructionsIT
      },
      thumb: drinkData.strDrinkThumb,
      ingredients: Array.from({length: 15}, (c, i) => drinkData[`strIngredient${i + 1}`]).filter(Boolean),
      measurements: Array.from({length: 15}, (c, i) => drinkData[`strMeasurement${i + 1}`]).filter(Boolean),
    }
}

export const getCocktailById = async (id) => {
    const [data, error] = await handleFetch(baseUrl + `lookup.php?i=${id}`);

    if (error) {
        console.error(error);
        return [null, error];
    }

    return [getDrinkData(data.drinks[0]), null];
}

export const getRandomCocktail = async (ingredient = "", alcoholic = null, category = "") => {
    let url = baseUrl + 'random.php';

    if (ingredient !== "" && alcoholic === false) {
        const [d, e] = await handleFetch(url);

        if (e) {
            console.error(e);
            return [null, e];
        }

        if (d.ingredients[0].strAlcohol !== "No") console.warn(`${ingredient} contains alcohol!`);
    }
    

    if (ingredient !== "" || alcoholic !== null || category !== "") {
        url = baseUrl + '/filter.php?';

        const queryParams = [];

        if (ingredient !== "") queryParams.push(`i=${ingredient}`);

        if (alcoholic) queryParams.push('a=Alcoholic');
        else if (alcoholic === false) queryParams.push('a=Non_Alcoholic');

        if (category !== "") queryParams.push(`c=${category}`);

        url += queryParams.join('&');
    }

    const [data, error] = await handleFetch(url);

    if (error) {
        console.error(error);
        return [null, error];
    }

    if (data.drinks.length > 1) return [getDrinkData(data.drinks[Math.floor(Math.random() * data.drinks.length)]), null];

    return [getDrinkData(data.drinks[0]), null];
}
