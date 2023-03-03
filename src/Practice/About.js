import React from "react";
import { useLocation } from "react-router-dom";

const AboutUs = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <p>This is a {location.pathname} Page</p>
            <p>hello this is for duplicate branch</p>
        </div>
    );
};

export default AboutUs;
