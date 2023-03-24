import React, {useEffect, useState} from "react";
// import {IngredientEnergy} from "types";
import "./WeekSummary.css";

interface IngredientEnergy {
    energy: number,
}

type Props = {
    mealId: string | undefined,
    plannerPositionId: number | undefined,
}

export const WeekSummary = (props: Props) => {

    const [energyValue, setEnergyValue] = useState<number>(0);
    const [mondayKcal, setMondayKcal] = useState<number>(0);
    const [tuesdayKcal, setTuesdayKcal] = useState<number>(0);
    const [wednesdayKcal, setWednesdayKcal] = useState<number>(0);
    const [thursdayKcal, setThursdayKcal] = useState<number>(0);
    const [fridayKcal, setFridayKcal] = useState<number>(0);
    const [saturdayKcal, setSaturdayKcal] = useState<number>(0);
    const [sundayKcal, setSundayKcal] = useState<number>(0);
    // const [lastlyChosenMealId, setLastlyChosenMealId] = useState<string>('');
    // const [lastlyChosenMealPositionId, setLastlyChosenMealPositionId] = useState<number>(0);

    // const chosenMealsArray = Object.values(props);
    // if (chosenMealsArray.length > 0) {
    //     setLastlyChosenMealId(chosenMealsArray[chosenMealsArray.length - 1].mealId);
    //     setLastlyChosenMealPositionId(chosenMealsArray[chosenMealsArray.length - 1].plannerPositionId);
    // }


    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:3001/ingredient/findAll/${props.mealId}`);
            const data = await response.json();
            setEnergyValue(data.reduce((acc: number, prev: IngredientEnergy) => acc + prev.energy, 0));
        })();
    }, [props.mealId]);




    // if (lastlyChosenMealPositionId >= 1 && lastlyChosenMealPositionId <=5) {
    //     setMondayKcal(prev => prev + energyValue);
    // } else if (lastlyChosenMealPositionId >= 6 && lastlyChosenMealPositionId <= 10) {
    //     setTuesdayKcal(prev => prev + energyValue);
    // } else if (lastlyChosenMealPositionId >= 11 && lastlyChosenMealPositionId <= 15) {
    //     setWednesdayKcal(prev => prev + energyValue);
    // } else if (lastlyChosenMealPositionId >= 16 && lastlyChosenMealPositionId <= 20) {
    //     setThursdayKcal(prev => prev + energyValue);
    // } else if (lastlyChosenMealPositionId >= 21 && lastlyChosenMealPositionId <= 25) {
    //     setFridayKcal(prev => prev + energyValue);
    // } else if (lastlyChosenMealPositionId >= 26 && lastlyChosenMealPositionId <= 30) {
    //     setSaturdayKcal(prev => prev + energyValue);
    // } else setSundayKcal(prev => prev + energyValue);


    return <div className="week-summary">
        <table>
            <thead>
                <tr>
                    <td><b>Week summary</b></td><td><b>{(!energyValue) ? 0 : energyValue} Kcal</b></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Monday</td><td>{mondayKcal} kcal</td>
                </tr>
                <tr>
                    <td>Tuesday</td><td>{tuesdayKcal} kcal</td>
                </tr>
                <tr>
                    <td>Wednesday</td><td>{wednesdayKcal} kcal</td>
                </tr>
                <tr>
                    <td>Thursday</td><td>{thursdayKcal} kcal</td>
                </tr>
                <tr>
                    <td>Friday</td><td>{fridayKcal} kcal</td>
                </tr>
                <tr>
                    <td>Saturday</td><td>{saturdayKcal} kcal</td>
                </tr>
                <tr>
                    <td>Sunday</td><td>{sundayKcal} kcal</td>
                </tr>
            </tbody>
        </table>

    </div>
}