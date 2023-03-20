import React, {useEffect, useState} from "react";
import { MealIdPlannerPositionId } from "types";
import "./RecipeSummary.css";


export const RecipeSummary = (props: MealIdPlannerPositionId[]) => {
    const chosenMeals = props;
    const [lastRecipe, setLastRecipe] = useState();

    const mylastRecipe = [];

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:3001/plan`);
            const data = response.json();
            setLastRecipe(data)
            console.log(data);
        })();
    },[chosenMeals])


    return <div className="recipe-summary">
        <div className="left-panel">
            <p><b>Recipe summary</b></p>
            <p>Ingredients</p>
            <table>
                {
                    mylastRecipe.map(el => (
                        <tr><td>{el.name}</td><td>{el.amount}</td><td>{el.unit}</td></tr>
                    ))
                }
            </table>
        </div>
        <div className="left-panel">
            <p><b>Energy/kcal</b>{
                mylastRecipe.reduce((acc, prev) => acc.energy + prev.energy, 0)
            }</p>
            <p>Operations</p>
            <table>
                {
                    mylastRecipe.map(el => (
                        <tr><td>{el.orderNo}</td><td>{el.operation}</td></tr>
                    ))
                }
            </table>
        </div>
    </div>
}