import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/event.css";
import StarIcon from "@mui/icons-material/Star";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
const Event = () => {
  const [event, setEvent] = useState([]);
  const [edit, setEdit] = useState();
  // var count = 0;
  const url = "https://sponsored-by.herokuapp.com/events";
  useEffect(() => {
    getEvent();
  }, []);

  function getEvent() {
    axios
      .get(url)
      .then((response) => {
        setEvent(response.data);
      })
      .catch((err) => console.log(err));
  }

  function eventDelete(id, e) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    axios
      .delete(`https://sponsored-by.herokuapp.com/event/${id}`)
      .then((res) => {
        console.log("Deleted!!!");
        getEvent();
      })
      .catch((err) => console.log(err));
  }
  function eventEdit(item) {
    setEdit({ ...item });
  }
  return (
    <div className="col-large-12">
      <div className="col-large-9">
        {event.map((value) => {
          return (
            <div className="containers" key={value.id}>
              <Link to={`/eventDetail/${value.id}`}>
                <div className="image-event">
                  <img src={value.image_url} alt="images" />
                </div>
              </Link>
              <div className="row-1">
                <h2 className="name-event">{value.name}</h2>
                <p className="short-desc">{value.short_description}</p>
              </div>
              <div className="row-2">
                <div className="admin-view">
                  <div className="edit">
                    <Link to="/form">
                      <AddIcon />
                    </Link>
                  </div>
                  <div className="edit">
                    <Link to={`/editForm/${value.id}`}>
                      <EditIcon />
                    </Link>
                  </div>
                  <div className="delete" onClick={() => eventDelete(value.id)}>
                    <DeleteIcon />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="Event-collection">
        <h1 className="title">list of Events</h1>
        {event.map((value) => {
          return (
            <>
              <div className="list-event">
                <Link to={`/eventDetail/${value.id}`}>
                  <div className="image">
                    <img src={value.image_url} alt="images" />
                  </div>
                </Link>
                <div className="details">
                  <span className="name">{value.name}</span>
                  <br />
                  <span className="location">{value.location}</span>
                  <br />
                  <span className="date">Date: {value.date}</span>
                </div>
                <div className="icons">
                  <span>
                    <StarIcon />
                  </span>
                  <span>
                    <WatchLaterIcon />
                  </span>
                  <span>
                    <AutorenewIcon />
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Event;
