import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Views from "./components/Views";
import Form from "./components/Form";
import Edit from "./components/Edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/list" element={<Views />} />
        <Route path="/create" element={<Form />} />
        <Route path="/edit/:_id" element={<Edit />} />{" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
