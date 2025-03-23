import { CocktailPreferenceMenuContext } from './CocktailPreferenceMenuProvider.jsx';
import { CocktailPreferenceMenu } from './CocktailPreferenceMenu.jsx'; 
import { useState, useEffect, useContext, useRef } from 'react';
import { getRandomCocktail } from './cocktailAdapters.js';

export const CocktailContainer = () => {
    const { cocktailCategory, cocktailIngredient, alcoholic, glass, shakingUp, setShakingUp } = useContext(CocktailPreferenceMenuContext);
    const [cocktail, setCocktail] = useState(null);
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [firstLoaded, setFirstLoaded] = useState(false);

    const initialFetchRef = useRef(false);

    useEffect(() => {
        const fetchRandomCocktailData = async () => {
            const [cocktailData, cocktailError] = await getRandomCocktail();

            if (cocktailError) setError(cocktailError);
            else setCocktail(cocktailData);

            setLoading(false);
            setFirstLoaded(true);
        }

        if (initialFetchRef.current) return;
        initialFetchRef.current = true;

        fetchRandomCocktailData();
    }, []);
    
    useEffect(() => {
        const fetchRandomCocktailData = async () => {
            if (!firstLoaded || !shakingUp) return;

            const [cocktailData, cocktailError] = await getRandomCocktail(cocktailCategory, cocktailIngredient, alcoholic, glass);

            if (cocktailError) setError(cocktailError);
            else setCocktail(cocktailData);

            setLoading(false);
            setShakingUp(false);
        }

        fetchRandomCocktailData();
    }, [firstLoaded, shakingUp, setShakingUp, cocktailCategory, cocktailIngredient, alcoholic, glass]);

    if (loading) return <div>Loading filters...</div>;

    if (error) {
        console.error(error);
        return <div>Error loading cocktail...</div>
    }

    if (!cocktail) return <div>No cocktail found that matches preferences...</div>;

    return (
        <div>
            <h2>{ cocktail.drink }</h2>
            <img src={cocktail.thumb} alt={ `Image of ${cocktail.drink}`} />
            <h4>Category: { cocktail.category }</h4>
            <h4>Alcohol Level: { cocktail.alcoholic }</h4>
            <h4>Glass: { cocktail.glass }</h4>
            <h3>Ingredients</h3>
            <ul>
                { cocktail.ingredients.map((c, i) => <li key={ i }>{ c } { cocktail.measurements[i] }</li>) }
            </ul>
            <h3>Instructions</h3>
            <p>{cocktail.instructions}</p>
            <button onClick={ () => setOpen(!open) }>{open ? "Hide Preferences" : "Show Preferences"}</button>
            <div style={{ maxHeight: open ? '500px' : '0px', overflow: open ? 'auto' : 'hidden' }}>
                <CocktailPreferenceMenu container={true}/>
            </div>
        </div>
    )
}
