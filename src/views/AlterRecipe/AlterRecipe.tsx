import React, {useEffect, useState} from "react";
import {MealEntity, MealIngredientInstruction} from "types";
import {MealChoice} from "../../components/MealChoice/MealChoice";
import {Recipe} from "../Recipe/Recipe";
import "./AlterRecipe.css";



export const AlterRecipe = () => {
    const [mealsList, setMealsList] = useState<MealEntity[]>([]);
    const [data, setData] = useState<MealIngredientInstruction>();
    const [alterRecipeOfMealId, setAlterRecipeOfMealId] = useState<string>('');


    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:3001/meal/all');
            const data = await response.json();
            setMealsList(data);
        })();
    }, [])


    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:3001/meal/${alterRecipeOfMealId}`);
            const data = await response.json();
            setData(data);
            console.log(data)
        })();
    }, [alterRecipeOfMealId])


    const chooseMeal = (e: any) => {
        const alterMealId = ([...mealsList].filter(el => el.id === e.target.value));
        setAlterRecipeOfMealId(alterMealId[0].recipeName);
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
                    (!data) ?
                        <h4>Choose recipe to alter...</h4> :
                        <Recipe resultMeal={data.resultMeal} resultIngredient={data.resultIngredient} resultInstruction={data.resultInstruction}/>
                }
            </div>
        </div>

    </>
}