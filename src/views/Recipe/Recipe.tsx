import React, {SyntheticEvent, useState} from "react";
import {IngredientEntityFront, InstructionEntityFront, MealEntity} from 'types';
import {apiUrl} from "../../config/api";
import "./Recipe.css";

type Props = { alterRecipe: MealEntity[], alterIngredients: IngredientEntityFront[], alterInstructions: InstructionEntityFront[], };

export const Recipe = (props: Props) => {
    const {alterRecipe, alterIngredients, alterInstructions} = props;

    const [recipeName, setRecipeName] = useState<string>(alterRecipe[0].recipeName);
    const [ingredientsArr, setIngredientsArr] = useState<IngredientEntityFront[]>(alterIngredients);
    const [instructionsArr, setInstructionsArr] = useState<InstructionEntityFront[]>(alterInstructions);

    const [ingredientName, setIngredientName] = useState<string>('');
    const [ingredientAmount, setIngredientAmount] = useState<number>(0);
    const [ingredientUnit, setIngredientUnit] = useState<string>('');
    const [ingredientEnergy, setIngredientEnergy] = useState<number>(0);
    const [instructionName, setInstructionName] = useState<string>('');
    const [instructionOrderNumber, setInstructionOrderNumber] = useState<number>(1);


    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        (async () => {
            //adding recipe name to DB and receiving its ID
            const mealResponse = await fetch(`${apiUrl}/meal`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    recipeName,
                }),
            })
            const mealData = await mealResponse.json();

            //adding all ingredients to DB along with recipe ID
            if (mealData.id) {
                for (let ingredient of ingredientsArr) {
                    const ingredientResponse = await fetch(`${apiUrl}/ingredient`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            ...ingredient,
                            mealId: mealData.id,
                        }),
                    });
                }
            }

            //adding all instructions to DB along with recipe ID
            if (mealData.id) {
                for (let instruction of instructionsArr) {
                    const instructionResponse = await fetch(`${apiUrl}/instruction`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            ...instruction,
                            mealId: mealData.id,
                        }),
                    })
                }
            }
        })();
        setRecipeName('');
        setIngredientsArr([]);
        setInstructionsArr([]);
    }


    //adding ingredient to ingredients' array
    const addIngredient = () => {

        const ingredient: IngredientEntityFront = {
            name: ingredientName,
            amount: ingredientAmount,
            unit: ingredientUnit,
            energy: ingredientEnergy,
        };

        setIngredientsArr(prev => (
            [
                ...prev,
                ingredient,
            ]
        ))

        //inputs' clearance
        setIngredientName('');
        setIngredientAmount(0);
        setIngredientUnit('');
        setIngredientEnergy(0);
    }


    //adding instruction to instructions' array
    const addInstruction = (e: SyntheticEvent) => {

        const instruction: InstructionEntityFront = {
            name: instructionName,
            orderNumber: instructionOrderNumber,
        }
        setInstructionsArr(prev => (
            [
                ...prev,
                instruction,
            ]
        ))

        //inputs' clearance
        setInstructionName('');
        setInstructionOrderNumber(prev => ++prev);
    }


    const editIngredient = (e: any) => {
        setIngredientsArr(prev => (prev.filter((el, i) => i !== Number(e.target.dataset.id))));
        setIngredientName(e.target.dataset.name);
        setIngredientAmount(Number(e.target.dataset.amount));
        setIngredientUnit(e.target.dataset.unit);
        setIngredientEnergy(Number(e.target.dataset.energy));
    }

    const removeIngredient = (e: any) => {
        setIngredientsArr(prev => (prev.filter((el, i) => i !== Number(e.target.dataset.id))));
    }

    const editInstruction = (e: any) => {
        setInstructionsArr(prev => (prev.filter((el, i) => i !== Number(e.target.dataset.id))));
        setInstructionName(e.target.dataset.name);
        setInstructionOrderNumber(Number(e.target.dataset.number));
    }

    const removeInstruction = (e: any) => {
        setInstructionsArr(prev => (prev.filter((el, i) => i !== Number(e.target.dataset.id))));
    }



    return <>
        <div>
            <form className="submit-form" onSubmit={handleSubmit}>
                <label><b>Recipe name</b></label>
                <input
                    type="text"
                    name="recipeName"
                    maxLength={50}
                    value={recipeName}
                    placeholder="recipe name"
                    onChange={e => setRecipeName(e.target.value)}
                />
                <input type="submit" value="Save recipe"/>
            </form>
        </div>
        <hr/>
        <div className="ingredient-wrapper">
            <div className="form">
                <form className="ingredient-form">
                    <legend><b>Ingredient</b>
                        <br/><br/>
                        <div className="elementForm">
                            <label>Name</label>
                            <input
                                type="text"
                                name="ingredientName"
                                maxLength={50}
                                value={ingredientName}
                                onChange={e => setIngredientName(e.target.value)}
                            />
                        </div>
                        <br/>
                        <div className="elementForm">
                            <label>Amount</label>
                            <input
                                type="number"
                                name="ingredientAmount"
                                value={ingredientAmount}
                                onChange={e => setIngredientAmount(Number(e.target.value))}
                            />
                        </div>
                        <br/>
                        <div className="elementForm">
                            <label>Unit</label>
                            <input
                                type="text"
                                name="ingredientUnit"
                                maxLength={20}
                                value={ingredientUnit}
                                onChange={e => setIngredientUnit(e.target.value)}
                            />
                        </div>
                        <br/>
                        <div className="elementForm">
                            <label>Energy</label>
                            <input
                                type="number"
                                name="ingredientEnergy"
                                value={ingredientEnergy}
                                onChange={e => setIngredientEnergy(Number(e.target.value))}
                            />
                        </div>kcal
                    </legend>
                    <input type="button" value="Add ingredient" onClick={addIngredient}/>
                </form>
            </div>
            <div className="ingredient-list">
                <ul>
                    {
                        ingredientsArr.length > 0 ? ingredientsArr.map((el, i) => (
                            <li key={i}>
                                {el.name} {el.amount} {el.unit} - {el.energy} kcal
                                <button
                                    data-id={i}
                                    data-name={el.name}
                                    data-amount={el.amount}
                                    data-unit={el.unit}
                                    data-energy={el.energy}
                                    onClick={editIngredient}>Edit
                                </button>
                                <button
                                    data-id={i}
                                    onClick={removeIngredient}>Delete
                                </button>
                            </li>
                        )) : ''
                    }
                </ul>
            </div>
        </div>
        <hr/>
        <div className="instruction-wrapper">
            <div className="form">
                <form className="instruction-form">
                    <legend>
                        <b>Instruction</b>
                        <br/><br/>
                        <div className="elementForm">
                            <label>Order number</label>
                            <input
                                type="number"
                                name="instructionOrderNumber"
                                value={instructionOrderNumber}
                                onChange={e => setInstructionOrderNumber(Number(e.target.value))}
                            />
                        </div>
                        <br/>
                        <div className="elementForm">
                            <label>Instruction</label>
                            <input
                                type="text"
                                name="instructionName"
                                maxLength={100}
                                value={instructionName}
                                onChange={e => setInstructionName(e.target.value)}
                            />
                        </div>
                    </legend>

                    <input type="button" value="Add instruction" onClick={addInstruction}/>
                </form>
            </div>
            <div className="instruction-list">
                <ul>
                    {
                        instructionsArr.length > 0 ? instructionsArr
                            .sort((a, b) => a.orderNumber - b.orderNumber)
                            .map((el, i) => (
                                <li key={i}>
                                    {el.orderNumber}. {el.name}
                                    <button
                                        data-id={i}
                                        data-name={el.name}
                                        data-number={el.orderNumber}
                                        onClick={editInstruction}>Edit
                                    </button>
                                    <button
                                        data-id={i}
                                        onClick={removeInstruction}>Delete
                                    </button>
                                </li>
                            )) : ''
                    }
                </ul>
            </div>
        </div>
        <hr/>
    </>
}
