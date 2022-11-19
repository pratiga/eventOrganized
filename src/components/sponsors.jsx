/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useState, useEffect } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';

const sponsors = () => {
  const [sponsor, setSponsor] = useState([]);
  const url = "https://sponsored-by.herokuapp.com/sponsors";
  useEffect(() => {
    getSponsor();
  }, []);

  function getSponsor() {
    axios
      .get(url)
      .then((response) => {
        setSponsor(response.data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <div className="col-large-9">
        {sponsor.map((value) => {
          return (
            <div className="containers" key={value.id}>
              <div className="row-1">
                <div className="image-event">
                  <img src={value.image_url} alt="images" />
                </div>
                <div className="media">
                  <span className="facebook url"><FacebookIcon/></span>
                  <span className="website url"><InstagramIcon/></span>
                  <span className="twitter url"><LanguageIcon/></span>
                  <span className="instagram url"><TwitterIcon/></span>
                </div>
                <div className="row-2">
                  <h2 className="name-event">{value.name}</h2>
                  <p className="location">{value.headquarter_location}</p>
                  <p className="short-desc">{value.short_description}</p>
                </div>
                
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default sponsors;
