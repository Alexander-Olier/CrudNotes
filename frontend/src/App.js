import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Views from "./components/Views";
import Form from "./components/Form";
import Edit from "./components/Edit";
import Delete from "./components/Delete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/list" element={<Views />} />
        <Route path="/create" element={<Form />} />
        <Route path="/edit/:_id" element={<Edit />} />
        <Route path="/delete/:_id" element={<Delete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
