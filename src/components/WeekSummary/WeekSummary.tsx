import React from "react";
import { MealIdPlannerPositionId } from "types";
import "./WeekSummary.css";


export const WeekSummary = (props: MealIdPlannerPositionId[]) => {
    const chosenMeals = props;
    const mondayKcal: number = 350;
    const tuesdayKcal: number = 0;
    const wednesdayKcal: number = 0;
    const thursdayKcal: number = 0;
    const fridayKcal: number = 0;
    const saturdayKcal: number = 0;
    const sundayKcal: number = 0;

    for (let elem in chosenMeals) {

    }


    return <div className="week-summary">
        <table>
            <tr>
                <td><b>Week summary</b></td><td><b>Energy</b></td>
            </tr>
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

        </table>

    </div>
}