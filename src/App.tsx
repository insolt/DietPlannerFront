import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Main} from "./views/Main/Main";
import {AddRecipe} from "./views/AddRecipe/AddRecipe";

export const App = () => {

  return (
      <Routes>
        <Route path="/" element={<AddRecipe />} />
      </Routes>
  );
};
