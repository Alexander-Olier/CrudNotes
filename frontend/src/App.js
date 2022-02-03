import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Views from "./components/Views";
import Form from "./components/Form";
import Edit from "./components/Edit";
import Delete from "./components/Delete";

function App() {
  let location = useLocation();
  console.log(location.pathname);
  let background = location.state && location.state.background;

  return (
    <div>
      <Routes location={background || location}>
        <Route exact path="/" children={<Form />} />
        <Route path="/list" children={<Views />} />
        <Route path="/edit/:_id" children={<Form />} />
        <Route path="/delete/:_id" children={<Delete />} />
      </Routes>
      {background && <Route path="/edit/:_id" children={<Edit />} />}
    </div>
  );
}

export default App;
