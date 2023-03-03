import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const nav = useNavigate();
    const navigationHandler = () => {
        nav("/navigationbar");
    };
    return (
        <div>
            <h3>Welcome to the home page</h3>
            <button onClick={navigationHandler}>Navigation</button>
        </div>
    );
};

export default HomePage;
