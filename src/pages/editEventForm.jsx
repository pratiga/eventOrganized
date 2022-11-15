import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditEventForm = () => {
  const nav = useNavigate();
  const [edit, setEdit] = useState([]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [img_url, setImg_url] = useState("");
  const [short_description, setShort_description] = useState("");
  const [organized_by, setOrganized_by] = useState("");
  const { id } = useParams();
  const url = `https://sponsored-by.herokuapp.com/event/${id}`;

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    fetch(url).then((result) => {
      result.json().then((resp) => {
        setEdit(resp);
        setName(resp.name);
        setLocation(resp.location);
        setDescription(resp.description);
        setShort_description(resp.short_description);
        setOrganized_by(resp.organized_by);
        setImg_url(resp.image_url);
      });
    });
  }
  const handleEdit = (e) => {
    e.preventDefault();
    axios
      .put(`https://sponsored-by.herokuapp.com/event/${id}`, {
        name: name,
        description: description,
        location: location,
        date: date,
        image_url: img_url,
        short_description: short_description,
        organized_by: organized_by,
        category: "string",
        sponsors: [],
      })
      .then((res) => {
        console.log(res.data);
        setEdit({ updatedAt: res.data.updatedAt });
        alert("sucessfuly submited");
        setName("");
        setLocation("");
        setDescription("");
        setOrganized_by("");
        setShort_description("");
        setDate("");
        setImg_url("");
        nav("/event");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <div className="App">
      <form onSubmit={handleEdit}>
        <div className="container">
          <center>
            <h1> Event Registeration Form</h1>
          </center>
          <hr />
          <label>
            <b> Name</b>{" "}
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

          <label>
            <b>location</b>
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
            <b>organizer</b>
          </label>
          <input
            type="text"
            placeholder="Enter organizer"
            onChange={(e) => setOrganized_by(e.target.value)}
            value={organized_by}
            required
          />
          <br />
          <label>
            <b>image_url</b>
          </label>
          <input
            type="text"
            placeholder="Enter photo"
            onChange={(e) => setImg_url(e.target.value)}
            value={img_url}
            required
          />
          <br />
          <input
            type="date"
            value={date}
            placeholder="Date"
            onChange={(e) => setDate(e.target.value)}
            size="10"
            required
          />
          <br />
          <label>
            <b>short_Descreption</b>{" "}
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
          <label for="">
            <b>organizer</b>
          </label>
          <input
            type="text"
            placeholder="Enter organizer"
            onChange={(e) => setOrganized_by(e.target.value)}
            value={organized_by}
            required
          />
          <br />
          <label>
            <b> Description :</b>
          </label>
          <textarea
            cols="80"
            rows="5"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          ></textarea>
          <button type="submit" className="registerbtn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditEventForm;
