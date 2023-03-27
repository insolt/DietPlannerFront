import React from "react";
import {NavLink, Link} from "react-router-dom";
import "./Header.css"


export const Header = () => {
    return <>
        <p className="title">Hi {<b><i>user</i></b>}, welcome to personal meals planner</p>
        <hr/>
        <div className="header">
            <NavLink to="/nplan" className="navlink">Add new plan</NavLink>
            <NavLink to="/aplan" className="navlink">Alter existing plan</NavLink>
            <NavLink to="/nrecipe" className="navlink">Add new recipe</NavLink>
            <NavLink to="/arecipe" className="navlink">Alter existing recipe</NavLink>
            <NavLink to="/shopping" className="navlink">Create shopping list</NavLink>
        </div>
        <hr/>
    </>
}
