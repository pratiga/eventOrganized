import React, { useState, useEffect } from "react";
import "../Styles/home.css";
import "../Styles/slider.scss";
import axios from "axios";
import StarIcon from "@mui/icons-material/Star";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import BlurCircularIcon from "@mui/icons-material/BlurCircular";
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

  const slider = React.useRef(null);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      >
        NEXT
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      >
        BACK
      </div>
    );
  }
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows: false,
          dots: false,
        },
      },

      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          initialSlide: 2,
        },
      },
    ],

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
              <BlurCircularIcon />
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
          <h1 className="event-title">Latest Events</h1>
          <button className=" btn event-button">View All Property</button>
        </div>

        <div className="event">
          
          <Slider ref={slider} {...settings}>
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
          <div style={{ margin: 20 }}>
            <button
              className=" btns prev-button"
              onClick={() => slider?.current?.slickPrev()}
            >
              Prev
            </button>
            <button
            className=" btns next-button"
              style={{ marginLeft: 20 }}
              onClick={() => slider?.current?.slickNext()}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
