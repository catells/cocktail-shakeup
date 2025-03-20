import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import getFilters from './cocktailAdapters.js';

export const CocktailPreferenceMenu = ({ setCocktailCategory, setCocktailIngredient, setCocktailAlcoholic }) => {
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

    return (
        <div>
            <select onChange={e => setCocktailCategory(e.target.value)}>
                {filters.categories.map(c => (
                    <option key={ c } value={ c }>
                    { c }
                    </option>
                ))}
            </select>

            <select onChange={e => setCocktailIngredient(e.target.value)}>
                {filters.ingredients.map(c => (
                    <option key={ c } value={ c }>
                    { c }
                    </option>
                ))}
            </select>

            <select onChange={e => setCocktailAlcoholic(e.target.value)}>
                {filters.alcoholic.map(c => (
                    <option key={ c } value={ c }>
                    { c }
                    </option>
                ))}
            </select>
        </div>
    )
}

CocktailPreferenceMenu.propTypes = {
    setCocktailCategory: PropTypes.func.isRequired,
    setCocktailIngredient: PropTypes.func.isRequired,
    setCocktailAlcoholic: PropTypes.func.isRequired
}
