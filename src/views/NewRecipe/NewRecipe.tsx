import React, {SyntheticEvent, useState} from "react";
import {IngredientEntity, InstructionEntity} from 'types';


export const NewRecipe = () => {
    const [recipeName, setRecipeName] = useState<string>('');
    const [ingredientName, setIngredientName] = useState<string>('');
    const [ingredientAmount, setIngredientAmount] = useState<number>(0);
    const [ingredientUnit, setIngredientUnit] = useState<string>('');
    const [ingredientEnergy, setIngredientEnergy] = useState<number>(0);
    const [instructionName, setInstructionName] = useState<string>('');
    const [instructionOrderNumber, setInstructionOrderNumber] = useState<number>(0);
    const [ingredientsArr, setIngredientsArr] = useState<IngredientEntity[]>([]);
    const [instructionsArr, setInstructionsArr] = useState<InstructionEntity[]>([]);


    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        (async () => {
            //dodanie nazwy przepisu do BD i pobranie jego ID
            const mealResponse = await fetch('http://localhost:3001/meal', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    recipeName,
                }),
            })
            const mealData = await mealResponse.json();

            //dodanie skladnika do bazy danych wraz z ID przepisu
            if (mealData.id) {
                for (let ingredient of ingredientsArr) {
                    const ingredientResponse = await fetch('http://localhost:3001/ingredient', {
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

            //dodanie wszystkich instruckcji do BD wraz z ID przepisu
            if (mealData.id) {
                for (let instruction of instructionsArr) {
                    const instructionResponse = await fetch('http://localhost:3001/instruction', {
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


    //dodawanie skladnika do tablicy skladnikow
    const addIngredient = (e: SyntheticEvent) => {

        const ingredient = {
            ingredientName,
            ingredientAmount,
            ingredientUnit,
            ingredientEnergy,
        }
        setIngredientsArr(prev => (
            [
                ...prev,
                ingredient,
            ]
        ))

        //wyzerowanie inputow
        setIngredientName('');
        setIngredientAmount(0);
        setIngredientUnit('');
        setIngredientEnergy(0);
    }


    //dodawanie instrukcji do tablicy instrukcji
    const addInstruction = (e: SyntheticEvent) => {

        const instruction = {
            instructionName,
            instructionOrderNumber,
        }
        setInstructionsArr(prev => (
            [
                ...prev,
                instruction,
            ]
        ))

        //wyzerowanie inputow
        setInstructionName('');
        setInstructionOrderNumber(0);
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
            <form onSubmit={handleSubmit}>
                <label><b>Recipe name</b></label>
                <input
                    type="text"
                    name="recipeName"
                    maxLength={50}
                    value={recipeName}
                    onChange={e => setRecipeName(e.target.value)}
                />
                <input type="submit" value="Save recipe"/>
            </form>
        </div>
        <hr/>
        <div>
            <form>
                <legend><b>Ingredient</b>
                    <br/>
                    <label>name</label>
                    <input
                        type="text"
                        name="ingredientName"
                        maxLength={50}
                        value={ingredientName}
                        onChange={e => setIngredientName(e.target.value)}
                    />
                    <br/>
                    <label>amount</label>
                    <input
                        type="number"
                        name="ingredientAmount"
                        value={ingredientAmount}
                        onChange={e => setIngredientAmount(Number(e.target.value))}
                    />
                    <br/>
                    <label>units</label>
                    <input
                        type="text"
                        name="ingredientUnit"
                        maxLength={20}
                        value={ingredientUnit}
                        onChange={e => setIngredientUnit(e.target.value)}
                    />
                    <br/>
                    <label>energy</label>
                    <input
                        type="number"
                        name="ingredientEnergy"
                        value={ingredientEnergy}
                        onChange={e => setIngredientEnergy(Number(e.target.value))}
                    />kcal
                </legend>
                <input type="button" value="Add ingredient" onClick={addIngredient}/>
            </form>
        </div>
        <hr/>
        <div>
            <form>
                <legend><b>Instruction</b><br/>
                    <label>number</label>
                    <input
                        type="number"
                        name="instructionOrderNumber"
                        value={instructionOrderNumber}
                        onChange={e => setInstructionOrderNumber(Number(e.target.value))}
                    />
                    <br/>
                    <label>action</label>
                    <input
                        type="text"
                        name="instructionName"
                        maxLength={100}
                        value={instructionName}
                        onChange={e => setInstructionName(e.target.value)}
                    /></legend>
                <input type="button" value="Add instruction" onClick={addInstruction}/>
            </form>
        </div>
        <div>
            <ul>
                {
                    ingredientsArr.length > 0 ? ingredientsArr.map((el, i) => (
                        <li key={i}>
                            {el.ingredientName} {el.ingredientAmount} {el.ingredientUnit} - {el.ingredientEnergy} kcal
                            <button
                                data-id={i}
                                data-name={el.ingredientName}
                                data-amount={el.ingredientAmount}
                                data-unit={el.ingredientUnit}
                                data-energy={el.ingredientEnergy}
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
        <div>
            <ul>
                {
                    instructionsArr.length > 0 ? instructionsArr
                        .sort((a, b) => a.instructionOrderNumber - b.instructionOrderNumber)
                        .map((el, i) => (
                            <li key={i}>
                                {el.instructionOrderNumber}. {el.instructionName}
                                <button
                                    data-id={i}
                                    data-name={el.instructionName}
                                    data-number={el.instructionOrderNumber}
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
    </>
}
