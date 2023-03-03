import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./DataStore.css";

const DataStore = () => {
    const [data, setData] = useState([]);
    function userData() {
        axios
            .get("https://63c5833be1292e5bea251ca2.mockapi.io/CRUDAPI")
            .then(response => {
                console.log(response, "eponse");
                setData(response.data);
            });
    }
    useEffect(() => {
        userData();
    }, []);

    const deleteHandler = id => {
        axios
            .delete(`https://63c5833be1292e5bea251ca2.mockapi.io/CRUDAPI/${id}`)
            .then(() => {
                userData();
            });
    };
    const editHandler = (id, name, age, email) => {
        localStorage.setItem("Id", id);
        localStorage.setItem("Name", name);
        localStorage.setItem("Age", age);
        localStorage.setItem("Email", email);
    };
    return (
        <div>
            <table className="table">
                <thead className="table__head">
                    <tr className="table__heads">
                        <th className="id">ID</th>
                        <th className="name">Name</th>
                        <th className="age">Age</th>
                        <th className="email">Email</th>
                        <th className="action">Action</th>
                    </tr>
                </thead>
                {data.map(values => {
                    return (
                        <>
                            <tbody>
                                <tr className="table__row">
                                    <th>{values.id}</th>
                                    <td className="map-name">{values.name}</td>
                                    <td className="map-age">{values.age}</td>
                                    <td className="map-email">
                                        {values.email}
                                    </td>
                                    <td>
                                        <Link to="/update">
                                            <button
                                                className="edit-button"
                                                onClick={() =>
                                                    editHandler(
                                                        values.id,
                                                        values.name,
                                                        values.age,
                                                        values.email
                                                    )
                                                }>
                                                Edit
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            className="delete-button"
                                            onClick={() =>
                                                deleteHandler(values.id)
                                            }>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </>
                    );
                })}
            </table>
            <Link to="/">
                <button className="back__button">Back</button>
            </Link>
        </div>
    );
};

export default DataStore;
