import { handleFetch } from './handleFetch.js';

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

const getDrinkData = (drinkData) => {
    return {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
      drink: drinkData.strDrink,
      category: drinkData.strCategory,
      alcoholic: drinkData.strAlcoholic,
      glass: drinkData.strGlass,
      instructions: drinkData.strInstructions,
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

export const getRandomCocktail = async (ingredient = "", alcoholic = "", category = "", glass = "") => {
    let url = baseUrl + 'random.php';

    if (ingredient !== "" && alcoholic === "Non alcoholic") {
        const [d, e] = await handleFetch(url);

        if (e) {
            console.error(e);
            return [null, e];
        }

        if (d.ingredients[0].strAlcohol === "Alcoholic") console.warn(`${ingredient} contains alcohol!`);
    }
    

    if (ingredient !== "" || alcoholic !== "" || category !== "" || glass !== "") {
        url = baseUrl + '/filter.php?';

        const queryParams = [];

        if (ingredient !== "") queryParams.push(`i=${ingredient}`);

        if (alcoholic === "Alcoholic") queryParams.push('a=Alcoholic');
        else if (alcoholic === "Non alcoholic") queryParams.push('a=Non_Alcoholic');
        else if (alcoholic === "Optional alcohol") queryParams.push('a=Optional_Alcohol')

        if (category !== "") queryParams.push(`c=${category}`);

        if (glass !== "") queryParams.push(`g=${glass}`);

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

export const getFilters = async () => {
    const [categoriesData, categoriesError] = await handleFetch(baseUrl + 'list.php?c=list');
    const [ingredientsData, ingredientError] = await handleFetch(baseUrl + 'list.php?i=list');
    const [alcoholicData, alcoholicError] = await handleFetch(baseUrl + 'list.php?a=list');
    const [glassData, glassError] = await handleFetch(baseUrl + 'list.php?g=list');

    if (categoriesError || ingredientError || alcoholicError || glassError) {
        const errors = [];
        if (categoriesError) {
            console.error(categoriesError);
            errors.push(categoriesError);
        }

        if (ingredientError) {
            console.error(ingredientError);
            errors.push(ingredientError);
        }

        if (alcoholicError) {
            console.error(alcoholicError);
            errors.push(alcoholicError);
        }

        if (glassError) {
            console.error(glassError);
            errors.push(glassError);
        }

        return [null, errors];
    }

    const categories = categoriesData.drinks.map(c => c.strCategory);
    const ingredients = ingredientsData.drinks.map(c => c.strIngredient1);
    const alcoholic = alcoholicData.drinks.map(c => c.strAlcoholic);
    const glasses = glassData.drinks.map(c => c.strGlass);

    return [{categories, ingredients, alcoholic, glasses}, null];
}
