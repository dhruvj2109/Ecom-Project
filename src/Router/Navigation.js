import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate();
    const aboutHandler = () => {
        navigate("/About");
    };
    return (
        <div>
            <Link to="/">
                <h3>Home</h3>
            </Link>
            <Link to="/about">
                <h3>About</h3>
            </Link>
            <Link to="/users/dhruv">Dhruv</Link>
            <Link to="/users/mohan">Mohan</Link>
            <button onClick={aboutHandler}>Click</button>
        </div>
    );
};

export default Navigation;
