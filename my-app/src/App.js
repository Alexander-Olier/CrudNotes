import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Views from "./components/list/Views";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/list" element={<Views />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
