import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Views from "./components/Views";
import Edit from "./components/Edit";
import Create from "./components/Create";
import Header from "./components/min/Header";

function App() {

  return (
    <div>
      <Header />
      <Routes>
      <Route path="/" exact element={<Views />} />
        <Route path="add" element={<Create />} />
        <Route path="/edit/:_id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
