import React from 'react';
import {Route, Routes} from "react-router-dom";
import {NewPlanner} from "./views/NewPlanner/NewPlanner";
import {NewRecipe} from "./views/NewRecipe/NewRecipe";
import {Header} from "./components/Header/Header";
import {ShoppingList} from "./views/ShoppingList/ShoppingList";
import {AlterPlanner} from "./views/AlterPlanner/AlterPlanner";
import {AlterRecipe} from "./views/AlterRecipe/AlterRecipe";
import "./App.css";

export const App = () => {

  return <>
      <Header />
      <Routes>
          <Route path="/nplan" element={<NewPlanner />} />
          <Route path="/aplan" element={<AlterPlanner />} />
          <Route path="/nrecipe" element={<NewRecipe />} />
          <Route path="/arecipe" element={<AlterRecipe />} />
          <Route path="/shopping" element={<ShoppingList />} />
      </Routes>
  </>
};
