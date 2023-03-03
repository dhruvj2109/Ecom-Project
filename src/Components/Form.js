import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Form.css";

const Form = () => {
    const [nameAdded, setNameAdded] = useState("");
    const [ageAdded, setAgeAdded] = useState("");
    const [emailAdded, setEmailAdded] = useState("");

    const nameHandler = event => {
        setNameAdded(event.target.value);
    };

    const ageHandler = event => {
        setAgeAdded(event.target.value);
    };

    const emailHandler = event => {
        setEmailAdded(event.target.value);
    };

    const submitHandler = event => {
        axios.post("https://63c5833be1292e5bea251ca2.mockapi.io/CRUDAPI", {
            name: nameAdded,
            age: ageAdded,
            email: emailAdded,
        });
        alert("Form Successfully Submited");
        event.preventDefault();
        const data = {
            name: nameAdded,
            age: ageAdded,
            email: emailAdded,
        };
        setNameAdded("");
        setAgeAdded("");
        setEmailAdded("");
    };
    return (
        <div>
            <form className="form-cont" onSubmit={submitHandler}>
                <div className="form-cont__name">
                    <label className="name-label" style={{ height: "40px" }}>
                        Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        onChange={nameHandler}
                        value={nameAdded}
                    />
                </div>
                <div className="form-cont__age">
                    <label>Age</label>
                    <input
                        type="text"
                        placeholder="Enter Your age"
                        onChange={ageHandler}
                        value={ageAdded}
                    />
                </div>
                <div className="form-cont__email">
                    <label>Email id</label>
                    <input
                        type="email"
                        placeholder="Enter Your email"
                        onChange={emailHandler}
                        value={emailAdded}
                    />
                </div>
                <button className="add-button">Add</button>
                <Link to="/datastore">
                    <button className="show-button">View Details</button>
                </Link>
            </form>
        </div>
    );
};

export default Form;
