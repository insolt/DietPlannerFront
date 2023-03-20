import React, {SyntheticEvent, useEffect, useState, PropsWithChildren} from "react";
import {Link} from "react-router-dom";
import {MealIdNameEntity, MealIdPlannerPositionId} from 'types';
import {MealChoice} from "./../../components/MealChoice/MealChoice";
import {RecipeSummary} from "./../../components/RecipeSummary/RecipeSummary";
import {WeekSummary} from "./../../components/WeekSummary/WeekSummary";
import "./Planner.css";


export const Planner = () => {
    const [mealsList, setMealsList] = useState<MealIdNameEntity[]>([]);
    const [planName, setPlanName] = useState<string>('');
    const [chosenMeals, setChosenMeals] = useState<MealIdPlannerPositionId[]>([]);


    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:3001/meal/all');
            const data = await response.json();
            setMealsList(data);
        })();
    }, [])


    const chooseMeal = (e: any) => {
        const filteredMeals = [...chosenMeals].filter(el => el.plannerPositionId !== Number(e.target.dataset.id))
        setChosenMeals(
            [
                ...filteredMeals,
                {
                    mealId: e.target.value,
                    plannerPositionId: Number(e.target.dataset.id),
                }
            ]
               .filter(el => el.mealId !== 'Choose meal...'))
    }

    console.log('Wybrane', chosenMeals);

    const savePlan = (e: any) => {
        e.preventDefault();
        const mealPlannerData = [...chosenMeals].map(el => (
            {
                ...el,
                planName,
            }
        ));
        console.log('Do wysylki', mealPlannerData);
        for (let mealPlan of mealPlannerData) {
            (async () => {
                await fetch(`http://localhost:3001/plan`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(mealPlan),
                });

            })();
        }
    }

    return <>
        <form onSubmit={savePlan}>
            {
                (mealsList.length > 0) ?
                    <div className="wrapper">
                        <div>
                            <h4>Monday</h4>
                            <MealChoice plannedMealId={1} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                            <MealChoice plannedMealId={2} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                            <MealChoice plannedMealId={3} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                            <MealChoice plannedMealId={4} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                            <MealChoice plannedMealId={5} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                        </div>
                        <div>
                            <h4>Tuesday</h4>
                            <MealChoice plannedMealId={6} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                            <MealChoice plannedMealId={7} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                            <MealChoice plannedMealId={8} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                            <MealChoice plannedMealId={9} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                            <MealChoice plannedMealId={10} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                        </div>
                        <div>
                            <h4>Wednesday</h4>
                            <MealChoice plannedMealId={11} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                            <MealChoice plannedMealId={12} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                            <MealChoice plannedMealId={13} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                            <MealChoice plannedMealId={14} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                            <MealChoice plannedMealId={15} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                        </div>
                        <div>
                            <h4>Thursday</h4>
                            <MealChoice plannedMealId={16} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                            <MealChoice plannedMealId={17} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                            <MealChoice plannedMealId={18} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                            <MealChoice plannedMealId={19} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                            <MealChoice plannedMealId={20} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                        </div>
                        <div>
                            <h4>Friday</h4>
                            <MealChoice plannedMealId={21} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                            <MealChoice plannedMealId={22} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                            <MealChoice plannedMealId={23} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                            <MealChoice plannedMealId={24} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                            <MealChoice plannedMealId={25} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                        </div>
                        <div>
                            <h4>Saturday</h4>
                            <MealChoice plannedMealId={26} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                            <MealChoice plannedMealId={27} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                            <MealChoice plannedMealId={28} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                            <MealChoice plannedMealId={29} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                            <MealChoice plannedMealId={30} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                        </div>
                        <div>
                            <h4>Sunday</h4>
                            <MealChoice plannedMealId={31} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                            <MealChoice plannedMealId={32} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                            <MealChoice plannedMealId={33} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                            <MealChoice plannedMealId={34} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                            <MealChoice plannedMealId={35} mealsList={mealsList} onChooseMeal={chooseMeal}/>
                        </div>
                    </div> :
                    <h4>Please wait, data loading...</h4>
            }
            <hr/>
            <input
                type="text"
                name="planName"
                placeholder="Plan's name..."
                value={planName}
                onChange={e => setPlanName(e.target.value)}
            />
            <button type="submit">Save plan</button>
            <button>
                <Link to="/shop">Create shopping list</Link>
            </button>
        </form>
        <hr/>
        <div className="summary">
            <RecipeSummary {...chosenMeals}/>
            <WeekSummary {...chosenMeals}/>
        </div>
    </>
}