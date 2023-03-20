import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Planner} from "./views/Planner/Planner";
import {NewRecipe} from "./views/NewRecipe/NewRecipe";
import {Header} from "./components/Header/Header";

export const App = () => {

  return <>
      <Header />
      <Routes>
        <Route path="/new" element={<NewRecipe />} />
        <Route path="/plan" element={<Planner />} />
      </Routes>
  </>
};
