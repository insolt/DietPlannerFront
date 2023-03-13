import React, {useEffect, useState} from "react";
import "./Planner.css";

export interface MealTitleEntity {
    mealId: string;
    mealTitle: string;
}

export const Planner = () => {
    const [meals, setMeals] = useState<MealTitleEntity[]>([]);


    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:3001/meal/all');
            const data = await response.json();
            setMeals(data);
        })();
    }, [])

    console.log(meals);

    return <>
        <p className="title">Hi, welcome to personal meals planner</p>
        <hr />
        <form>
            <div>
                <p>Monday</p>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div>
                <p>Tuesday</p>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div>
                <p>Wednesday</p>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div>
                <p>Thursday</p>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div>
                <p>Friday</p>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div>
                <p>Saturday</p>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {meals.map((el, i) => {
                        return <option key={el.mealId} value={el.mealTitle}>{el.mealTitle}</option>
                    })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div>
                <p>Sunday</p>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
                <select name="meal-selector">
                    <option selected>your meal</option>
                    {
                        meals.map((el, i) => (
                            <option
                                key={el.mealId}
                                value={el.mealTitle}
                            >{el.mealTitle}
                            </option>
                        ))
                    }
                </select>
            </div>
        </form>
        <hr />
    </>
}