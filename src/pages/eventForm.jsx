/* eslint-disable react-hooks/rules-of-hooks */
import "../Styles/eventForm.css";
import { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function eventForm() {
  const nav = useNavigate();
  const [events, setEvents] = useState([]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [short_description, setShort_description] = useState("");
  const [img_url, setImg_url] = useState("");
  const [organized_by, setOrganized_by] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://sponsored-by.herokuapp.com/event", {
        name: name,
        description: description,
        short_description: short_description,
        organized_by: organized_by,
        location: location,
        date: date,
        image_url: img_url,
        category: "string",
        sponsors: [],
      })
      .then((res) => {
        setEvents((events) => [res.data, ...events]);
        setName("");
        setLocation("");
        setDescription("");
        setDate("");
        setShort_description("");
        setImg_url("");
        setOrganized_by("");
        nav("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div class="container">
          <center>
            <h1> Event Registeration Form</h1>
          </center>
          <hr />
          <label>
            <b> Name:</b>{" "}
          </label>
          <input
            type="text"
            value={name}
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            size="15"
            required
          />
          <br />
          <label for="location">
            <b>location:</b>
          </label>
          <input
            type="text"
            placeholder="Enter location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            required
          />
          <br />
          <label for="">
            <b>organizer:</b>
          </label>
          <input
            type="text"
            placeholder="Enter organizer"
            onChange={(e) => setOrganized_by(e.target.value)}
            value={organized_by}
            required
          />
          <br />
          <label for="">
            <b>image_url:</b>
          </label>
          <input
            type="text"
            placeholder="Enter photo"
            onChange={(e) => setImg_url(e.target.value)}
            value={img_url}
            required
          />
          <br />
          <label>
            {" "}
            <b>short_Descreption: </b>
          </label>
          <input
            type="text"
            value={short_description}
            placeholder="Short Description"
            onChange={(e) => setShort_description(e.target.value)}
            size="15"
            required
          />
          <br />
          <label>Date :</label>
          <input
            type="date"
            value={date}
            placeholder="Date"
            onChange={(e) => setDate(e.target.value)}
            size="10"
            required
          />
          <br />
          <br />

          <textarea
            cols="80"
            rows="5"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          ></textarea>
          <br />
          <button type="submit" class="registerbtn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default eventForm;
