/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "../Styles/eventDetali.css";
import "../Styles/slider.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const eventDetail = () => {
  let content= null
  const { id } = useParams();
  const url = `https://sponsored-by.herokuapp.com/event/${id}`;
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setEvent(response.data);
    });
  }, [url]);

  function getEvent() {
    axios.get("https://sponsored-by.herokuapp.com/events").then((response) => {
      setEvent(response.data);
    })
    .catch((err) => console.log(err));
  }

  function eventDelete(id, e) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    axios.delete(url).then((res) => {
        getEvent();
      })
      .catch((err) => console.log(err));
       getEvent();
  }

  if (event) {
    content = (
      <div className="eventDetail">
        <div className="image-event">
          <img src={event.image_url} alt="images" />
        </div>
        <div className="details-box">
          <p className="name">{event.name}</p>
          <span className="location">{event.location}</span>
          <span className="date">{event.date}</span>
          <p>{event.description}</p>
        </div>
        <div className="admin-view">
          <Link to={`/editForm/${event.id}`}>
            <EditIcon />
          </Link>
          <div className="delete" onClick={() => eventDelete(event.id)}>
            <DeleteIcon />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div>{content}</div>
    </>
  );
};

export default eventDetail;
