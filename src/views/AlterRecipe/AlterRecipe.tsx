import React, {useEffect, useState} from "react";
import {IngredientEntityFront, InstructionEntityFront, MealEntity} from "types";
import {MealChoice} from "../../components/MealChoice/MealChoice";
import {Recipe} from "../Recipe/Recipe";
import {apiUrl} from "../../config/api";
import "./AlterRecipe.css";



export const AlterRecipe = () => {
    const [recipeName, setRecipeName] = useState<string>('');
    const [mealsList, setMealsList] = useState<MealEntity[]>([]);
    const [alterRecipeOfMealId, setAlterRecipeOfMealId] = useState<string | undefined>('');
    const [ingredientsArr, setIngredientsArr] = useState<IngredientEntityFront[]>([]);
    const [instructionsArr, setInstructionsArr] = useState<InstructionEntityFront[]>([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(`${apiUrl}/meal/all`);
            const data = await response.json();
            setMealsList(data);
        })();
    }, [])


    useEffect(() => {
        (async () => {
            const response = await fetch(`${apiUrl}/meal/${alterRecipeOfMealId}`);
            const data = await response.json();
            setRecipeName(data[0].recipeName);
        })();
    }, [alterRecipeOfMealId])


    useEffect(() => {
        (async () => {
            const response = await fetch(`${apiUrl}/ingredient/getSet/${alterRecipeOfMealId}`);
            const data = await response.json();
            setIngredientsArr(data);
        })();
    }, [alterRecipeOfMealId])


    useEffect(() => {
        (async () => {
            const response = await fetch(`${apiUrl}/instruction/getSet/${alterRecipeOfMealId}`);
            const data = await response.json();
            setInstructionsArr(data);
        })();
    }, [alterRecipeOfMealId])


    const chooseMeal = (e: any) => {
        const alterMeal = ([...mealsList].filter(el => el.id === e.target.value));
        setRecipeName(alterMeal[0].recipeName);
        setAlterRecipeOfMealId(alterMeal[0].id);
    }


    return <>
        <div className="alter-recipe-wrapper">
            <div className="meal-select-form">
                <p>Choose recipe to alter</p>
                {
                    (mealsList.length > 0) ?
                    <MealChoice plannedMealId={0} mealsList={mealsList} onChooseMeal={chooseMeal}/> :
                        <h4>Please wait, data loading...</h4>
                }
            </div>
            <div className="recipe-alter-form">
                {
                    !(ingredientsArr.length > 0 && instructionsArr.length > 0) ?
                        <h4>Choose recipe to alter...</h4> :
                        <Recipe alterRecipe={[{id: alterRecipeOfMealId, recipeName: recipeName}]} alterIngredients={ingredientsArr} alterInstructions={instructionsArr}/>
                }
            </div>
        </div>

    </>
}