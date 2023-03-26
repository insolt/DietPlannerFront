import React, {useEffect, useState} from "react";
import {IngredientEntity, InstructionEntity, MealEntity, MealIngredientInstruction} from "types";
import "./RecipeSummary.css";


type Props = {
    mealId: string | undefined,
    plannerPositionId: number | undefined,
}

export const RecipeSummary = (props: Props) => {

    const [data, setData] = useState<MealIngredientInstruction>();


    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:3001/meal/${props.mealId}`);
            const data = await response.json();
            setData(data);
        })();
    },[props.mealId])



    return <>
     <div className="recipe-summary">
         <div className="left-panel">
             <p>Recipe <span>{data ? data.resultMeal[0].name : 'Data loading...'}</span></p>
             <p>Ingredients</p>
             <ul>
             {
                 (!data) ? (
                     <p>Data loading...</p>
                 ) : (
                     data.resultIngredient.map((el, i) => <li key={i}>{el.name} - {el.amount} {el.unit}</li>)
                 )
             }
             </ul>
         </div>

         <div className="right-panel">
            <p>Energy/kcal <span>{data ? data.resultIngredient.reduce((acc, prev) => acc + prev.energy, 0) : 'Data loading...'}</span></p>
             <p>Operations</p>
                 <ul>
                     {
                         (!data) ? (
                             <p>Data loading...</p>
                         ) : (
                             data.resultInstruction.map((el, i) => <li key={i}>{el.order_number}. {el.name}</li>)
                         )
                     }
                 </ul>
         </div>
     </div>
    </>
}