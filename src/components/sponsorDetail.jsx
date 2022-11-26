/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import "../Styles/sponsorDetail.css"
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "@mui/material";

const sponsorDetail = () => {
  let content = null;
  const { id } = useParams();
  const url = `https://sponsored-by.herokuapp.com/sponsor/${id}`;
  const [sponsor, setSponsor] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data);
      setSponsor(response.data);
    });
  }, [url]);

  if (sponsor) {
    content = (
      <div className="sponsor">
        <div className="sponsor-image">
          <img src={sponsor.image_url} alt="images" />
        </div>
        <div className="media">
          <Link href={sponsor.facebook_url}>
            <span className="facebook url">
              <FacebookIcon />
            </span>
          </Link>
          <Link href={sponsor.website_url}>
            <span className="website url">
              <LanguageIcon />
            </span>
          </Link>
          <Link href={sponsor.twitter_url}>
            <span className="twitter url">
              <TwitterIcon />
            </span>
          </Link>
          <Link href={sponsor.instagram_url}>
            <span className="instagram url">
              <InstagramIcon />
            </span>
          </Link>
        </div>
        <div className="row-1">
          <h1>{sponsor.name}</h1>
          <span>{sponsor.headquarter_location}</span>
        </div>
        <div className="row-2">
          <p>{sponsor.short_description}</p>
          <p>{sponsor.description}</p>
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default sponsorDetail;
