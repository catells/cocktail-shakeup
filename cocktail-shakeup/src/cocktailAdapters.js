import { handleFetch } from './handleFetch.js';

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

/**
 * Converts data of drink fetched from TheCocktailDB's API
 * @param {object} drinkData data from TheCocktailDB's API
 * @returns {object} more readable object converting `ingredients` and `measurements` to arrays
 */
const getDrinkData = (drinkData) => {
    return {
        drink: drinkData.strDrink,
        category: drinkData.strCategory,
        alcoholic: drinkData.strAlcoholic,
        glass: drinkData.strGlass,
        instructions: drinkData.strInstructions,
        thumb: drinkData.strDrinkThumb,
        ingredients: Array.from({ length: 15 }, (c, i) => drinkData[`strIngredient${i + 1}`]).filter(Boolean),
        measurements: Array.from({ length: 15 }, (c, i) => drinkData[`strMeasure${i + 1}`]).filter(Boolean),
    }
}

/**
 * Retrieves data of a drink using its name
 * @param {number} name name of drink
 * @returns data of drink of the provided name
 */
export const getCocktailByName = async (name) => {
    const [data, error] = await handleFetch(baseUrl + `search.php?s=${name.split(' ').join('_')}`);

    if (error) {
        console.error(error);
        return [null, error];
    }

    return [getDrinkData(data.drinks[0]), null];
}

/**
 * Retrieves random drink that fits at least one of the optional conditions, if any
 * @param {string} category title of category of random drink
 * @param {string} alcoholic whether the random drink should be alcoholic
 * @param {string} glass glass type of random drink
 * @returns {object} data of random drink
 */
export const getRandomCocktail = async (category = "", alcoholic = "", glass = "") => {
    let url = baseUrl + 'random.php';

    if (alcoholic !== "" || category !== "" || glass !== "") {
        url = baseUrl + '/filter.php?';

        const queryParams = [];

        if (alcoholic === "Alcoholic") queryParams.push('a=Alcoholic');
        else if (alcoholic === "Non alcoholic") queryParams.push('a=Non_Alcoholic');
        else if (alcoholic === "Optional alcohol") queryParams.push('a=Optional_Alcohol');

        if (category !== "") queryParams.push(`c=${category}`);

        if (glass !== "") queryParams.push(`g=${glass}`);

        url += queryParams.join('&');
    }

    const [data, error] = await handleFetch(url);

    if (error) {
        console.error(error);
        return [null, error];
    }

    if (data.drinks.length > 1) {
        const randomDrinkName = data.drinks[Math.floor(Math.random() * data.drinks.length)].strDrink;
        return getCocktailByName(randomDrinkName);
    }

    return [getDrinkData(data.drinks[0]), null];
}

/**
 * Retrieves filters by which drinks can be selected
 * @returns data of category, alcholic, and glass filters 
 */
export const getFilters = async () => {
    const [categoriesData, categoriesError] = await handleFetch(baseUrl + 'list.php?c=list');
    const [alcoholicData, alcoholicError] = await handleFetch(baseUrl + 'list.php?a=list');
    const [glassData, glassError] = await handleFetch(baseUrl + 'list.php?g=list');

    if (categoriesError || alcoholicError || glassError) {
        const errors = [];
        if (categoriesError) {
            console.error(categoriesError);
            errors.push(categoriesError);
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
    const alcoholic = alcoholicData.drinks.map(c => c.strAlcoholic);
    const glasses = glassData.drinks.map(c => c.strGlass);

    return [{ categories, alcoholic, glasses }, null];
}
