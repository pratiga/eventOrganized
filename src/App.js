import Headers from "./header/Navbar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Event from "./components/Event";
import EventForm from "./pages/eventForm";
import SponserForm from "./pages/sponserForm";
import EventDetail from "./components/eventDetail";
import EditEventForm from "./pages/editEventForm";
import Sponsors from "./components/sponsors";
import SponsorDetail from "./components/sponsorDetail";
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
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/eventForm" element={<EventForm />} />
        <Route path="/sponserForm" element={<SponserForm />} />
        <Route path="/editForm/:id" element={<EditEventForm />} />
        <Route path="/eventDetail/:id" element={<EventDetail />}></Route>
        <Route path="/sponsorDetail/:id" element={<SponsorDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
