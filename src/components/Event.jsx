import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/event.css";
import StarIcon from "@mui/icons-material/Star";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { Link } from "react-router-dom";
const Event = () => {
  const [event, setEvent] = useState([]);
  // var count = 0;
  useEffect(() => {
    axios
      .get("https://sponsored-by.herokuapp.com/events")
      .then((res) => {
        // console.log(count++);
        console.log(res.data);
        setEvent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="col-large-12">
      <div className="col-large-9">
      
        {event.map((value) => {
          return (
            <Link to={`/eventDetail/${value.id}`}>
              <div className="containers">
                <div className="image-event">
                  <img src={value.image_url} alt="images" />
                </div>
                <div className="row-1">
                  <h2 className="name-event">{value.name}</h2>
                  <p className="short-desc">{value.short_description}</p>
                </div>
                <div className="row-2"></div>
              </div>
            </Link>
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
