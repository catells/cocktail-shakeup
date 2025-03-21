import { useState, useEffect, createContext } from 'react';
import getFilters from './cocktailAdapters.js';
import CocktailContainer from 'CocktailContainer.jsx';

const CocktailPreferencesMenuContext = createContext();

export const CocktailPreferencesMenuProvider = () => {
    const [cocktailCategory, setCocktailCategory] = useState("");
    const [cocktailIngredient, setCocktailIngredient] = useState("");
    const [alcoholic, setAlcoholic] = useState("");
    const [glass, setGlass] = useState("");

    const [filters, setFilters] = useState(null);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [shakingUp, setShakingUp] = useState(false);

    useEffect(() => {
        const fetchFiltersData = async() => {
            const [filtersData, filtersErrors] = await getFilters();

            if (filtersErrors && filtersErrors.length > 0) setErrors(filtersErrors);
            else setFilters(filtersData);

            setLoading(false);
        }

        fetchFiltersData();
    }, []);

    if (loading) return <div>Loading filters...</div>;

    if (errors.length > 0) {
        console.error(errors);
        return <div>Error loading filters...</div>;
    }

    return (
        <CocktailPreferencesMenuContext.Provider value={{
            cocktailCategory,
            setCocktailCategory,
            cocktailIngredient,
            setCocktailIngredient,
            alcoholic,
            setAlcoholic,
            glass,
            setGlass,
            shakingUp,
            setShakingUp,
            filters
        }}>
            <CocktailContainer />
        </CocktailPreferencesMenuContext.Provider>
    );
}
