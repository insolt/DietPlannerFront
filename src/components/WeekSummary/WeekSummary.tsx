import React, {useEffect, useState} from "react";
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


    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:3001/ingredient/findAll/${props.mealId}`);
            const data = await response.json();
            setEnergyValue(data.reduce((acc: number, prev: IngredientEnergy) => acc + prev.energy, 0));
        })();
    }, [props.mealId]);







    return <div className="week-summary">
        <table>
            <thead>
                <tr>
                    <th className="tableCell" scope="col">Week summary</th>
                    <th className="tableCell" scope="col">{(!energyValue) ? 0 : energyValue} Kcal</th>
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