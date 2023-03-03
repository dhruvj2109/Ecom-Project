import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <div>
            <Link to="/userform">
                <p>Form</p>
            </Link>
            <p>collection</p>
            <p>About</p>
        </div>
    );
};

export default NavigationBar;
