import "./App.css";
import MainPage from "./component/MainPage";
import NavBar from "./component/NavBar/index";
import Skills from "./component/Skills";
import Projects from "./component/Projects/index";
import Contact from "./component/Conact/index";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
