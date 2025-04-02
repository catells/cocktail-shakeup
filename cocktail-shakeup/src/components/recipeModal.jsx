import React from "react";
import ReactDOM from "react-dom";
import { ModalRendering } from "./renderingRecipe";
import "./Modal.css";

export function Modal({ open, children, onClose, mealPrep }) {
  if (!open) return null;

  return (
    <>
      <div id="overlay">
        <button id="closing" onClick={onClose}>
          <p>Click me to close!</p>
          <ModalRendering mealprep={mealPrep}></ModalRendering>
          <>
            <CocktailPreferenceMenuProvider>
              <CocktailContainer />
            </CocktailPreferenceMenuProvider>
          </>
        </button>
        {children}
      </div>
    </>
  );
}

export const displayRecipe = () => {};
