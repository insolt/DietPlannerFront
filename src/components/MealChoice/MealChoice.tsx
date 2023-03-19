import React, {SyntheticEvent, useEffect, useState, PropsWithChildren, FC} from "react";
import {MealIdNameEntity} from "types";

interface Props {
    plannedMealId: number,
    mealsList: MealIdNameEntity[],
    onChooseMeal: (e: SyntheticEvent) => void,
}

export const MealChoice: FC<PropsWithChildren<Props>> = ({plannedMealId, mealsList, onChooseMeal}: Props) => {


    return <>
        <select
            name="meal-select"
            data-id={plannedMealId}
            onChange={e => onChooseMeal(e)}
        >
            <option>Choose meal...</option>
            {
                    [...mealsList].map((el, i) => (
                        <option
                            value={el.id}
                            key={i}
                        >
                            {el.name}
                        </option>
                    ))
            }
        </select>
    </>
}