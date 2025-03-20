import { useState, useEffect } from 'react';
import setFilters from './cocktailAdapters.js';

export const CocktailContainer = () => {
    const [cocktailCategory, setCocktailCategory] = "";
    const [cocktailIngredient, setCocktailIngredient] = "";
    const [cocktailAlcholic, setCocktailAlcoholic] = null;

    const [filters, setFilters] = useState(null);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFiltersData = async() => {
            const [filtersData, filtersErrors] = await getFilters();

            if (filtersErrors && filtersErrors.length > 0) setErrors(filtersErrors);
            else setFilters(filtersData);

            setLoading(false);
        }

        fetchFiltersData();
    }, []);

    if (loading) return <div>Loading filters</div>;

    if (errors.length > 0) {
        console.error(errors);
        return <div>Error loading filters...</div>;
    }
}
