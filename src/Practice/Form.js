import React from "react";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
    const navigate = useNavigate();

    const backHandler = () => {
        navigate("/home");
    };
    return (
        <div>
            <form>
                <label>Name</label>
                <input type="text" />
                <label>Email id</label>
                <input type="text" placeholder="email" />
            </form>
            <button onClick={backHandler}>Back</button>
        </div>
    );
};

export default UserForm;
