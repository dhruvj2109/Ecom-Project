import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Update.css";

const Update = () => {
    const [id, setId] = useState(0);
    const [nameEdit, setNameEdit] = useState("");
    const [ageEdit, setAgeEdit] = useState("");
    const [emailEdit, setEmailEdit] = useState("");

    const navigation = useNavigate();

    const nameEditHandler = event => {
        setNameEdit(event.target.value);
    };
    const ageEditHandler = event => {
        setAgeEdit(event.target.value);
    };
    const emailEditHandler = event => {
        setEmailEdit(event.target.value);
    };

    useEffect(() => {
        setId(localStorage.getItem("Id"));
        setNameEdit(localStorage.getItem("Name"));
        setAgeEdit(localStorage.getItem("Age"));
        setEmailEdit(localStorage.getItem("Email"));
    }, []);

    const updateHandler = event => {
        event.preventDefault();
        axios
            .put(`https://63c5833be1292e5bea251ca2.mockapi.io/CRUDAPI/${id}`, {
                name: nameEdit,
                age: ageEdit,
                email: emailEdit,
            })
            .then(() => {
                navigation("/datastore");
            });
    };
    return (
        <form onSubmit={updateHandler} className="update-form">
            <div className="update-form__name">
                <label> Name</label>
                <input
                    type="text"
                    placeholder="Update Name"
                    onChange={nameEditHandler}
                    value={nameEdit}
                />
            </div>
            <div className="update-form__age">
                <label> Age</label>
                <input
                    type="number"
                    placeholder="Update Age"
                    onChange={ageEditHandler}
                    value={ageEdit}
                />
            </div>
            <div className="update-form__email">
                <label> Email</label>
                <input
                    type="email"
                    placeholder="Update Email"
                    onChange={emailEditHandler}
                    value={emailEdit}
                />
            </div>
            <button className="update-form__button">Update</button>
        </form>
    );
};

export default Update;
