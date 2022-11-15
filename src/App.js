import Headers from "./pages/header";
import "./App.css";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Event from "./components/Event";
import EventForm from "./pages/eventForm";
import EventDetail from "./components/eventDetail";
import EditEventForm from "./pages/editEventForm";
import Service from "./components/service";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Headers />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/event" element={<Event />} />
        <Route path="/form" element={<EventForm />} />
        <Route path ="/editForm/:id" element={<EditEventForm/>} />
        <Route path="/eventDetail/:id" element={<EventDetail />}></Route>
        <Route path="/eventDetail/:id" element={ <Navigate to="/event" /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
