import Headers from "./pages/header";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Event from "./components/Event";
import EventForm from "./pages/eventForm";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Headers />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
        <Route path="/form" element={<EventForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
