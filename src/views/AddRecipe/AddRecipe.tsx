import React, {SyntheticEvent, useState} from "react";
import {IngredientEntity, InstructionEntity, MealIngredientEntity, MealInstructionEntity} from 'types';

export const AddRecipe = () => {
    const [recipeName, setRecipeName] = useState<string>('');
    const [ingredientName, setIngredientName] = useState<string>('');
    const [ingredientAmount, setIngredientAmount] = useState<number>(0);
    const [ingredientUnit, setIngredientUnit] = useState<string>('');
    const [ingredientEnergy, setIngredientEnergy] = useState<number>(0);
    const [ingredientsForm, setIngredientsForm] = useState<IngredientEntity[]>([]);
    const [instructionName, setInstructionName] = useState<string>('');
    const [instructionOrderNumber, setInstructionOrderNumber] = useState<number>(0);
    const [instructionsForm, setInstructionsForm] = useState<InstructionEntity[]>([]);
    const [mealIngredientData, setMealIngredientData] = useState<MealIngredientEntity>({
        mealDataId: '',
        ingredientDataId: '',
    });
    const [mealInstructionData, setMealInstructionData] = useState<MealInstructionEntity>({
        mealDataId: '',
        instructionDataId: '',
    });

    const addIngredient = (e: SyntheticEvent) => {
        setIngredientsForm(prev => (
            [...prev,
                {
                    ingredientName,
                    ingredientAmount,
                    ingredientUnit,
                    ingredientEnergy,
                },
            ]
        ))
        setIngredientName('');
        setIngredientAmount(0);
        setIngredientUnit('');
        setIngredientEnergy(0);
    }

    const addInstruction = (e: SyntheticEvent) => {
        setInstructionsForm(prev => (
            [...prev,
                {
                    instructionOrderNumber,
                    instructionName,
                },
            ]
        ))
        setInstructionName('');
        setInstructionOrderNumber(0);
    }


    const editIngredient = (e: any) => {
        setIngredientsForm(prev => (prev.filter((el, i) => i !== Number(e.target.dataset.id))));
        setIngredientName(e.target.dataset.name);
        setIngredientAmount(Number(e.target.dataset.amount));
        setIngredientUnit(e.target.dataset.unit);
        setIngredientEnergy(Number(e.target.dataset.energy));
    }

    const removeIngredient = (e: any) => {
        setIngredientsForm(prev => (prev.filter((el, i) => i !== Number(e.target.dataset.id))));
    }

    const editInstruction = (e: any) => {
        setInstructionsForm(prev => (prev.filter((el, i) => i !== Number(e.target.dataset.id))));
        setInstructionName(e.target.dataset.name);
        setInstructionOrderNumber(Number(e.target.dataset.number));
    }

    const removeInstruction = (e: any) => {
        setInstructionsForm(prev => (prev.filter((el, i) => i !== Number(e.target.dataset.id))));
    }


    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();

        (async () => {
            //Saves recipe name to DB
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
            const mealDataId = mealData.id;
            setMealIngredientData(prev => (
                {
                    ...prev,
                    mealDataId,
                })
            )


            //Saves ingredients and links meals with ingredients
            for (let ingredient of ingredientsForm) {
                const ingredientResponse = await fetch('http://localhost:3001/ingredient', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(ingredient),
                })
                const ingredientData = await ingredientResponse.json();
                const ingredientDataId = ingredientData.id;
                setMealIngredientData(prev => (
                    {
                        ...prev,
                        ingredientDataId,
                    })
                )

                const mealIngredientResponse = await fetch('http://localhost:3001/meal-ingredient', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(mealIngredientData),
                })
            }


            //Saves instructions to DB
            for (let instruction of instructionsForm) {
                const instructionResponse = await fetch('http://localhost:3001/instruction', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(instruction),
                })
                const instructionData = await instructionResponse.json();
                const instructionDataId = instructionData.id;
                setMealInstructionData(prev => (
                    {
                        ...prev,
                        instructionDataId,
                    })
                )

                const mealInstructionResponse = await fetch('http://localhost:3001/meal-instruction', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(mealInstructionData),
                })

            }

        })();
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
                <input type="submit" value="Save recipe" />
            </form>
        </div>
        <hr />
        <div>
            <form>
                <legend><b>Ingredient</b>
                <br />
                <label>name</label>
                <input
                    type="text"
                    name="ingredientName"
                    maxLength={50}
                    value={ingredientName}
                    onChange={e => setIngredientName(e.target.value)}
                />
                <br />
                <label>amount</label>
                <input
                    type="number"
                    name="ingredientAmount"
                    value={ingredientAmount}
                    onChange={e => setIngredientAmount(Number(e.target.value))}
                />
                <br />
                <label>units</label>
                <input
                    type="text"
                    name="ingredientUnit"
                    maxLength={20}
                    value={ingredientUnit}
                    onChange={e => setIngredientUnit(e.target.value)}
                />
                <br />
                <label>energy</label>
                <input
                    type="number"
                    name="ingredientEnergy"
                    value={ingredientEnergy}
                    onChange={e => setIngredientEnergy(Number(e.target.value))}
                />kcal</legend>
                <input type="button" value="Add ingredient" onClick={addIngredient}/>
            </form>
        </div>
        <hr />
        <div>
            <form>
                <legend><b>Instruction</b><br />
                <label>number</label>
                <input
                    type="number"
                    name="instructionOrderNumber"
                    value={instructionOrderNumber}
                    onChange={e => setInstructionOrderNumber(Number(e.target.value))}
                />
                <br />
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
                    ingredientsForm ? ingredientsForm.map((el, i) => <li
                        key={i}
                    >{el.ingredientName} {el.ingredientAmount} {el.ingredientUnit} - {el.ingredientEnergy} kcal
                        <button
                            data-id={i}
                            data-name={el.ingredientName}
                            data-amount={el.ingredientAmount}
                            data-unit={el.ingredientUnit}
                            data-energy={el.ingredientEnergy}
                            onClick={editIngredient}>Edit</button>
                        <button data-id={i} onClick={removeIngredient}>Delete</button>
                    </li>) : ''
                }
            </ul>
        </div>
        <div>
            <ul>
                {
                    instructionsForm ? instructionsForm
                        .sort((a, b) => a.instructionOrderNumber - b.instructionOrderNumber)
                        .map((el, i) => <li
                        key={i}
                    >{el.instructionOrderNumber}. {el.instructionName}
                        <button
                            data-id={i}
                            data-name={el.instructionName}
                            data-number={el.instructionOrderNumber}
                            onClick={editInstruction}>Edit</button>
                        <button data-id={i} onClick={removeInstruction}>Delete</button>
                    </li>) : ''
                }
            </ul>
        </div>
    </>
}
