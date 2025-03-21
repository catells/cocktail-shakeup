import { useContext } from 'react';
import { CocktailPreferencesMenuContext } from './CocktailPreferenceMenuProvider'; 

export const CocktailPreferenceMenu = ({container = false}) => {
    const [filters, setCocktailCategory, setCocktailIngredient, setAlcoholic, setGlass, setShakingUp] = useContext(CocktailPreferencesMenuContext);

    return (
        <div>
            <select onChange={e => setCocktailCategory(e.target.value)}>
                <option>""</option>
                {filters.categories.map(c => (
                    <option key={ c } value={ c }>
                        { c }
                    </option>
                ))}
            </select>

            <select onChange={e => setCocktailIngredient(e.target.value)}>
                <option>""</option>
                {filters.ingredients.map(c => (
                    <option key={ c } value={ c }>
                        { c }
                    </option>
                ))}
            </select>

            <select onChange={e => setAlcoholic(e.target.value)}>
                <option>""</option>
                {filters.alcoholic.map(c => (
                    <option key={ c } value={ c }>
                        { c }
                    </option>
                ))}
            </select>

            <select onChange={e => setGlass(e.target.value)}>
                <option>""</option>
                {filters.glasses.map(c => (
                    <option key={ c } value={ c }>
                        { c }
                    </option>
                ))}
            </select>

            <button onclick={setShakingUp(true)}>{container ? 'Not feeling it? Shake it up!' : 'Mix it up!'}</button>
        </div>
    )
}
