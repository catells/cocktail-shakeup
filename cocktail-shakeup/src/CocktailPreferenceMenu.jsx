import { CocktailPreferenceMenuContext } from './CocktailPreferenceMenuProvider';
import { useContext } from 'react';

/**
 * Renders menu of preferences including dropdowns of applicable filters
 * @param {boolean} container whether the menu is in a container or not
 * @returns `div` containing preference menu
 */
export const CocktailPreferenceMenu = ({container = false}) => {
    const { filters, setCocktailCategory, setAlcoholic, setGlass, setShakingUp } = useContext(CocktailPreferenceMenuContext);

    return (
        <div>
            <select onClick={e => {
                e.stopPropagation();
                setCocktailCategory(e.target.value);
            }}>
                <option label='Categories'>""</option>
                {filters.categories.map(c => (
                    <option key={ c } value={ c }>
                        { c }
                    </option>
                ))}
            </select>
             
            <select onClick={e => {
                e.stopPropagation();
                setAlcoholic(e.target.value);
            }}>
                <option label='Alcohol Level'>""</option>
                {filters.alcoholic.map(c => (
                    <option key={ c } value={ c }>
                        { c }
                    </option>
                ))}
            </select>

            <select onClick={e => {
                e.stopPropagation();
                setGlass(e.target.value);
            }}>
                <option label='Glass'>""</option>
                {filters.glasses.map(c => (
                    <option key={ c } value={ c }>
                        { c }
                    </option>
                ))}
            </select>
            <br/>
            <p>Only one filter will apply at a time.</p>
            <button className='menu-button' onClick={(e) => {
                e.stopPropagation();
                setShakingUp(true);
            }}>{container ? 'Not feeling it? Shake it up!' : 'Mix it up!'}</button>
        </div>
    )
}
