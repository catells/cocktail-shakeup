import { useContext } from 'react';
import { CocktailPreferencesMenuContext } from './CocktailPreferenceMenuProvider'; 

export const CocktailPreferenceMenu = () => {
    const [filters, setCocktailCategory, setCocktailIngredient, setAlcoholic, setGlass] = useContext(CocktailPreferencesMenuContext);

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

            <select onChange={e => setAlcoholic(e.target.value)}>
                {filters.alcoholic.map(c => (
                    <option key={ c } value={ c }>
                        { c }
                    </option>
                ))}
            </select>

            <select onChange={e => setGlass(e.target.value)}>
                {filters.glasses.map(c => (
                    <option key={ c } value={ c }>
                        { c }
                    </option>
                ))}
            </select>
        </div>
    )
}
