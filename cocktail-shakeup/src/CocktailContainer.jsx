import { CocktailPreferencesMenuContext } from './CocktailPreferenceMenuProvider';
import { CocktailPreferenceMenu } from './CocktailPreferenceMenu'; 
import { useState, useEffect, useContext } from 'react';
import { getRandomCocktail } from 'cocktailAdapters.js';

export const CocktailContainer = () => {
    const [cocktailCategory, cocktailIngredient, alcoholic, glass] = useContext();
    const [cocktail, setCocktail] = useState({});
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRandomCocktailData = async () => {
            const [cocktailData, cocktailError] = await getRandomCocktail();

            if (cocktailError !== "") setError(cocktailError);
            else setCocktail(cocktailData);

            setLoading(false);
        }

        fetchRandomCocktailData();
    }, []);

    useEffect(() => {
        const fetchRandomCocktailData = async () => {
            const [cocktailData, cocktailError] = await getRandomCocktail(cocktailCategory, cocktailIngredient, alcoholic);

            if (cocktailError !== "") setError(cocktailError);
            else setCocktail(cocktailData);

            setLoading(false);
        }

        fetchRandomCocktailData();
    }, [cocktailCategory, cocktailIngredient, alcoholic, glass]);

    if (loading) return <div>Loading filters...</div>;

    if (error) {
        console.error(error);
        return <div>Error loading cocktail...</div>
    }

    if (cocktail == {}) return <div>No cocktail found that matches preferences...</div>;

    return (
        <div>
            <h2>{ cocktail.drink }</h2>
            <img src={cocktail.thumb} alt={`Image of ${cocktail.drink}`} />
            <h4>Category: {cocktail.category}</h4>
            <h4>Alcohol Level: {cocktail.alcoholic}</h4>
            <h4>Glass: { cocktail.glass }</h4>
            <h3>Ingredients</h3>
            <ul>
                { cocktail.ingredients.map((c, i) => <li>{c} {cocktail.measurements[i]}</li>) }
            </ul>
            <h3>Instructions</h3>
            <p>{cocktail.instructions}</p>
            <button onClick={ setOpen(!open) }>{open ? "Hide Preferences" : "Show Preferences"}</button>
            <div style={{maxHeight: open ? '500px' : '0px'}, {overflow: open ? 'auto' : 'hidden'}}>
                <CocktailPreferenceMenu />
            </div>
            <button>Not feeling it? Mix it up!</button>
        </div>
    )
}
