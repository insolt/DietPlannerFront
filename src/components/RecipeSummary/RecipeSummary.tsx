import React, {useEffect, useState} from "react";
import {IngredientEntity, InstructionEntity, MealEntity} from "types";
import "./RecipeSummary.css";


type Props = {
    mealId: string,
    plannerPositionId: number,
}

export const RecipeSummary = (props: Props) => {
    const [mealData, setMealData] = useState<MealEntity[]>();
    const [ingredientData, setIngredientData] = useState<IngredientEntity[]>();
    const [instructionData, setInstructionData] = useState<InstructionEntity[]>();


    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:3001/meal/${props.mealId}`);
            const data = await response.json();
            setMealData(data);
        })();
    },[props])


    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:3001/ingredient/getSet/${props.mealId}`);
            const data = await response.json();
            setIngredientData(data);
            console.log('skaldniki', data);
        })();
    },[props])


    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:3001/instruction/getSet/${props.mealId}`);
            const data = await response.json();
            setInstructionData(data);
            console.log('instrukcje', data);
        })();
    },[props])



    return <>
     <div className="recipe-summary">
         <div className="left-panel">
             <p>Recipe <span>{mealData ? mealData[0].recipeName : 'Data loading...'}</span></p>
             <p>Ingredients</p>
             <ul>
             {
                 (ingredientData && ingredientData.length > 0) ? (
                     ingredientData.map((el, i) => <li key={i}>{el.ingredientName} - {el.ingredientAmount} {el.ingredientUnit}</li>)
                 ) : (
                     <p>Data loading...</p>
                 )
             }
             </ul>
         </div>

         <div className="right-panel">
             <p>Energy/kcal <span>{(ingredientData && ingredientData.length  > 0) ? ingredientData.reduce((acc, prev) => acc + prev.ingredientEnergy, 0) : 'Data loading...'}</span></p>
             <p>Operations</p>
                 <ul>
                     {
                         (instructionData && instructionData.length  > 0) ? (
                             instructionData
                                 .sort((a, b) => a.instructionOrderNumber - b.instructionOrderNumber)
                                 .map((el, i) => <li key={i}>{el.instructionOrderNumber}. {el.instructionName}</li>)
                         ) : (
                             <p>Data loading...</p>
                         )
                     }
                 </ul>
         </div>
     </div>
    </>
}