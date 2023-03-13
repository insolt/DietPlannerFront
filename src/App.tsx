import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Planner} from "./views/Planner/Planner";
import {NewRecipe} from "./views/NewRecipe/NewRecipe";

export const App = () => {

  return (
      <Routes>
        <Route path="/" element={<Planner />} />
      </Routes>
  );
};
