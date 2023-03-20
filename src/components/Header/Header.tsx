import React from "react";
import {Link} from "react-router-dom";
import "./Header.css"


export const Header = () => {
    return <>
        <p className="title">Hi {<b><i>user</i></b>}, welcome to personal meals planner</p>
        <hr/>
        <div className="header">
            <Link to="/nplan">New plan</Link>
            <Link to="/aplan">Alter existing plan</Link>
            <Link to="/nrecipe">Add recipe</Link>
            <Link to="/arecipe">Alter existing recipe</Link>
        </div>
        <hr/>
    </>
}
