import React from "react";
import Form from "./Components/Form";
import "./App.css";
import DataStore from "./Components/DataStore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Update from "./Components/Update";
import Navigation from "./Router/Navigation";
import Home from "./Router/Home";
import About from "./Router/About";
import Users from "./Router/Users";
import Contact from "./Router/Contact";
import Channel from "./Router/Channel";
import Company from "./Router/Company";
import HomePage from "./Practice/Home";
import NavigationBar from "./Practice/Navigation";
import UserForm from "./Practice/Form";
import AboutUs from "./Practice/About";

const App = () => {
    return (
        <div className="app">
            {/* <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Form />}></Route>
                    <Route path="/datastore" element={<DataStore />}></Route>
                    <Route path="/update" element={<Update />}></Route>
                </Routes>
            </BrowserRouter> */}
            {/* <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/users/:name" element={<Users />} />
                    <Route path="/contact/" element={<Contact />}>
                        <Route path="company" element={<Company />} />
                    </Route>
                    <Route path="/channel" element={<Channel />} />

                    <Route />
                </Routes>
            </BrowserRouter> */}

            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/navigationbar" element={<NavigationBar />} />
                    <Route path="/about" element={<AboutUs />}></Route>
                    <Route path="/userform" element={<UserForm />} />
                    <Route />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
