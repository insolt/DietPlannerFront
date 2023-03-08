import React, {useEffect, useState} from "react";
import "./Main.css";

interface User {
    name: string;
}

export const Main = (props: User) => {
    const [meals, setMeals] = useState([]);
    // @TODO potrzebna: nazwa zalogowanego uzytkownika
    // @TODO potrzebna: tablica posilkow

    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:3001/meal/all');
            const data = await response.json();
            setMeals(data);
        })();
    }, [])

    const arr: string[] = ['wartosc 1', 'wartosc 2', 'wartosc 3', 'wartosc 4', 'wartosc 5'];

    return <>
        <p className="title">Hi {props.name}, welcome to personal meals planner</p>
        <hr />
        <form>
            <div>
                <p>Monday</p>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                        })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
            </div>
            <div>
                <p>Tuesday</p>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
            </div>
            <div>
                <p>Wednesday</p>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
            </div>
            <div>
                <p>Thursday</p>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
            </div>
            <div>
                <p>Friday</p>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
            </div>
            <div>
                <p>Saturday</p>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
            </div>
            <div>
                <p>Sunday</p>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
                <select name="meal-selector">
                    <option selected>choose your value</option>
                    {meals.map((el, i) => {
                        return <option key={i} value={el}>{el}</option>
                    })
                    }
                </select>
            </div>
        </form>
        <hr />
    </>
}