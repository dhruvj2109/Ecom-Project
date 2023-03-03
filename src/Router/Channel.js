import React from "react";
import { useLocation } from "react-router-dom";

const Channel = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>{location.pathname}</h1>
        </div>
    );
};

export default Channel;
