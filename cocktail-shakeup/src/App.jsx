import {CocktailPreferenceMenuProvider} from './CocktailPreferenceMenuProvider.jsx'
import {CocktailContainer} from './CocktailContainer.jsx'
import './App.css'

function App() {
  return (
    <>
      <CocktailPreferenceMenuProvider>
        <CocktailContainer/>
      </CocktailPreferenceMenuProvider>
    </>
  )
}

export default App
