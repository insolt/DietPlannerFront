import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Planner} from "./views/Planner/Planner";
import {NewRecipe} from "./views/NewRecipe/NewRecipe";
import {Header} from "./components/Header/Header";
import {ShoppingList} from "./views/ShoppingList/ShoppingList";
import {AlterPlanner} from "./views/AlterPlanner/AlterPlanner";
import {AlterRecipe} from "./views/AlterRecipe/AlterRecipe";

export const App = () => {

  return <>
      <Header />
      <Routes>
          <Route path="/nplan" element={<Planner />} />
          <Route path="/aplan" element={<AlterPlanner />} />
          <Route path="/nrecipe" element={<NewRecipe />} />
          <Route path="/arecipe" element={<AlterRecipe />} />
          <Route path="/shop" element={<ShoppingList />} />
      </Routes>
  </>
};
