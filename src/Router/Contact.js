import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
            <h2>Other contact</h2>
            <Link to="company">Company</Link>
            <Link to="/channel"> Channel</Link>
            <Outlet />
        </div>
    );
};

export default Contact;
