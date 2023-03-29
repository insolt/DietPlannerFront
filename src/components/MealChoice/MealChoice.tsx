import React, {SyntheticEvent} from "react";
import {MealEntity} from "types";

interface Props {
    plannedMealId: number,
    mealsList: MealEntity[],
    onChooseMeal: (e: SyntheticEvent) => void,
}

export const MealChoice = (props: Props) => {

    const {plannedMealId, mealsList, onChooseMeal} = props




    return <>
        <select
            name="meal-select"
            data-id={plannedMealId}
            onChange={e => onChooseMeal(e)}
        >
            <option value={0}>Choose meal...</option>
            {
                    [...mealsList].map((el, i) => (
                        <option
                            value={el.id}
                            key={i}
                        >
                            {el.recipeName}
                        </option>
                    ))
            }
        </select>
    </>
}