import React from "react";
import { useLocation } from "react-router-dom";

const Channel = () => {
    const location = useLocation();
    useEffect(() => {
        first;

        return () => {
            second;
        };
    }, [third]);

    console.log(location);
    return (
        <div>
            <h1>{location.pathname}</h1>
            <h1>Hello this is for testing</h1>
        </div>
    );
};

export default Channel;
