import React from "react";
import { Routes, Route } from "react-router-dom";
import Template from "./Template/Template";

const App = () => {
    return (
        <Routes>
            <Route path="/" component={<Template />} />
        </Routes>
    );
};

export default App;
