import React, {useEffect, useState} from "react";
import "./WeekSummary.css";


interface IngredientEnergy {
    energy: number,
}

type Props = {
    mealId: string,
    plannerPositionId: number,
}

export const WeekSummary = (props: Props) => {

    const [data, setData] = useState<IngredientEnergy[]>();
    const [energyValue, setEnergyValue] = useState<number[]>(new Array(35).fill(0));
    const [mealPosition, setMealPosition] = useState<number>();

    const [monday, setMonday] = useState<number>(0);
    const [tuesday, setTuesday] = useState<number>(0);
    const [wednesday, setWednesday] = useState<number>(0);
    const [thursday, setThursday] = useState<number>(0);
    const [friday, setFriday] = useState<number>(0);
    const [saturday, setSaturday] = useState<number>(0);
    const [sunday, setSunday] = useState<number>(0);


    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:3001/ingredient/findOneEnergy/${props.mealId}`);
            const data = await response.json();
            setData(data);
            setMealPosition(props.plannerPositionId);
            console.log(data);

        })();
    }, [props]);


    useEffect(() => {
        const energySum = setTimeout(() => {
            if (data && mealPosition) {
                const singleMealEnergy = data.reduce((acc, prev) => acc + prev.energy, 0);
                const arr = [...energyValue];
                arr[mealPosition - 1] = singleMealEnergy;

                setEnergyValue(arr);
            }
        }, 500);

        return () => clearTimeout(energySum);

    }, [props, data, mealPosition]);


    useEffect(() => {
        const energyDisplay = setTimeout(() => {
            if (energyValue) {
                setMonday(energyValue.slice(0, 5).reduce((acc, prev) => acc + prev, 0))
                setTuesday(energyValue.slice(5, 10).reduce((acc, prev) => acc + prev, 0))
                setWednesday(energyValue.slice(10, 15).reduce((acc, prev) => acc + prev, 0))
                setThursday(energyValue.slice(15, 20).reduce((acc, prev) => acc + prev, 0))
                setFriday(energyValue.slice(20, 25).reduce((acc, prev) => acc + prev, 0))
                setSaturday(energyValue.slice(25, 30).reduce((acc, prev) => acc + prev, 0))
                setSunday(energyValue.slice(30, 34).reduce((acc, prev) => acc + prev, 0))
            }

        }, 500);

        return () => clearTimeout(energyDisplay);

    }, [energyValue]);


    return <div className="week-summary">
        <table>
            <thead>
                <tr>
                    <th className="tableCell" scope="col">Week summary</th>
                    <th className="tableCell" scope="col">Kcal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Monday</td><td>{monday}</td>
                </tr>
                <tr>
                    <td>Tuesday</td><td>{tuesday}</td>
                </tr>
                <tr>
                    <td>Wednesday</td><td>{wednesday}</td>
                </tr>
                <tr>
                    <td>Thursday</td><td>{thursday}</td>
                </tr>
                <tr>
                    <td>Friday</td><td>{friday}</td>
                </tr>
                <tr>
                    <td>Saturday</td><td>{saturday}</td>
                </tr>
                <tr>
                    <td>Sunday</td><td>{sunday}</td>
                </tr>
            </tbody>
        </table>

    </div>
}