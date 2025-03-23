import { CocktailPreferenceMenuContext } from './CocktailPreferenceMenuProvider';
import { useContext } from 'react';

export const CocktailPreferenceMenu = ({container = false}) => {
    const { filters, setCocktailCategory, setAlcoholic, setGlass, setShakingUp } = useContext(CocktailPreferenceMenuContext);

    return (
        <div>
            <select onChange={e => setCocktailCategory(e.target.value)}>
                <option label='Categories'>""</option>
                {filters.categories.map(c => (
                    <option key={ c } value={ c }>
                        { c }
                    </option>
                ))}
            </select>
             
            <select onChange={e => setAlcoholic(e.target.value)}>
                <option label='Alcohol Level'>""</option>
                {filters.alcoholic.map(c => (
                    <option key={ c } value={ c }>
                        { c }
                    </option>
                ))}
            </select>

            <select onChange={e => setGlass(e.target.value)}>
                <option label='Glass'>""</option>
                {filters.glasses.map(c => (
                    <option key={ c } value={ c }>
                        { c }
                    </option>
                ))}
            </select>
            <br/>
            <p>Only one filter will apply at a time.</p>
            <button onClick={() => setShakingUp(true)}>{container ? 'Not feeling it? Shake it up!' : 'Mix it up!'}</button>
        </div>
    )
}
