import React, { useState, useEffect } from "react";
import "../Styles/home.css";
import axios from "axios";
import StarIcon from "@mui/icons-material/Star";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import CircleIcon from "@mui/icons-material/Circle";
import BlurCircularIcon from '@mui/icons-material/BlurCircular';
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Home = () => {
  const [event, setEvent] = useState([]);
  useEffect(() => {
    axios
      .get("https://sponsored-by.herokuapp.com/events")
      .then((res) => {
        console.log(res.data);
        setEvent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <>
      <div class="home">
        <div class="container-home">
          <div class="details">
            <h4 class="title">What can we do for you?</h4>
          </div>
        </div>
        <div class="container-search">
          <div class="search-button">
            <div class="b-type">
              <BlurCircularIcon />
              <span>Event</span>
              <BlurCircularIcon/>
              <span>Sponcer</span>
            </div>
            <div class="s-button">
              <span>Search by location, postcode or keyword</span>
            </div>
            <div class="region">
              <SearchIcon />
              <p>select region</p>
            </div>
            <div class="button-s">
              <button>Search</button>
            </div>
          </div>
        </div>
        
      
        
        <div className="latest-event">
          <h3>Latest Events</h3>
          <button>View All Property</button>
        </div>

        <div className="event">
        <Slider {...settings}>
          {event.map((value) => {
            return (
              <div className="event-list">
                <Link to={`/eventDetail/${value.id}`}>
                  <div className="images">
                    <img src={value.image_url} alt="images" />
                  </div>
                </Link>
                <div className="detail">
                  <span className="name">{value.name}</span>
                  <br />
                  <span className="location">{value.location}</span>
                  <br />
                  <span className="date">Date: {value.date}</span>
                </div>
                <div className="icon">
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
            );
          })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Home;
