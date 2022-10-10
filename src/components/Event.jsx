import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Styles/event.css'
import StarIcon from '@mui/icons-material/Star';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AutorenewIcon from '@mui/icons-material/Autorenew';

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
    <>
      <div className="Event-collection">
        <h1 className="title">list of Events</h1>
        {event.map((value) => {
          return (
            <>
              <div className="list-event">
                <div className="image">
                  <img src={value.image_url} alt="images" />
                </div>
                <div className="details">
                  <span className="name">{value.name}</span><br/>
                  <span className="location">{value.location}</span><br/>
                  <span className="date">Date: {value.date}</span>
                </div>
                <div className="icons">
                  <span><StarIcon/></span>
                  <span><WatchLaterIcon/></span>
                  <span><AutorenewIcon /></span>
                </div>
              </div>
            </>
          );
        })}
        <div>
          <h1>loremThiago from Brazil shares how our Computer Professionals Master's helped him get into the Computer Vision field:
"MIU provides all the tools and resources needed for a successful IT career. Their financial aid makes costs affordable, and the career preparation is excellent. I made valuable friends for many countries and have learned greatly from your experience. I had excellent professors in career advisors who have supported me in improving both my technical and soft skills leading to mThiago from Brazil shares how our Computer Professionals Master's helped him get into the Computer Vision field:
"MIU provides all the tools and resources needed for a successful IT career. Their financial aid makes costs affordable, and the career preparation is excellent. I made valuable friends for many countries and have learned greatly from your experience. I had excellent professors in career advisors who have supported me in improving both my technical and soft skills leading to mThiago from Brazil shares how our Computer Professionals Master's helped him get into the Computer Vision field:
"MIU provides all the tools and resources needed for a successful IT career. Their financial aid makes costs affordable, and the career preparation is excellent. I made valuable friends for many countries and have learned greatly from your experience. I had excellent professors in career advisors who have supported me in improving both my technical and soft skills leading to m</h1>
        </div>
      </div>
    </>
  );
};

export default Event;
