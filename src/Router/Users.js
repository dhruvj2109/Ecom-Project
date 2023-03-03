import React from "react";
import { useParams } from "react-router-dom";

const Users = () => {
    const params = useParams();
    const { name } = params;
    return (
        <div>
            <p>This is {name}'s Page</p>
        </div>
    );
};

export default Users;
