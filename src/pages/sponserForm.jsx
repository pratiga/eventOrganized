/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useState } from "react";
import "../Styles/sponserForm.css";

const sponserForm = () => {
  const [sponser, setSponser] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [short_description, setShort_description] = useState("");
  const [img_url, setImg_url] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://sponsored-by.herokuapp.com/sponsor/", {
        short_description: short_description,
        name: name,
        image_url: img_url,
        website_url: website,
        twitter_url: twitter,
        events: [],
        description: description,
        headquarter_location: location,
        facebook_url: facebook,
        instagram_url: instagram,
      })
      .then((res) => {
        setSponser((sponsors) => [res.data, ...sponsors]);
        setShort_description("");
        setName("");
        setWebsite("");
        setTwitter("");
        setFacebook("");
        setInstagram("");
        setDescription("");
        setLocation("");
        setImg_url("");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="Sponser">
      <div className="form-title">
        <h3> Sponser Registration Form</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-body">
          <div className="name">
            <label>
              <b>Name:</b>
            </label>
            <input
              type="text"
              placeholder="enter name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
          <div className="images">
            <label>
              <b>Image_url :</b>
            </label>
            <input
              type="text"
              onChange={(e) => setImg_url(e.target.value)}
              value={img_url}
            />
          </div>
          <div className="short-description">
            <label>
              <b>Short-Description:</b>
            </label>
            <input
              type="text"
              placeholder="add infornmation"
              onChange={(e) => setShort_description(e.target.value)}
              value={short_description}
            />
          </div>

          <div className="location">
            <label>
              <b>Location:</b>
            </label>
            <input
              type="text"
              placeholder="enter location"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            />
          </div>
          <div className="website">
            <label>
              <b>Website-url:</b>
            </label>
            <input
              type="text"
              placeholder="enter address"
              onChange={(e) => setWebsite(e.target.value)}
              value={website}
            />
          </div>
          <div className="facebook">
            <label>
              <b>facebook-url:</b>
            </label>
            <input
              type="text"
              placeholder="enter address"
              onChange={(e) => setFacebook(e.target.value)}
              value={facebook}
            />
          </div>
          <div className="twitter">
            <label>
              <b>Twitter-url:</b>
            </label>
            <input
              type="text"
              placeholder="enter address"
              onChange={(e) => setTwitter(e.target.value)}
              value={twitter}
            />
          </div>
          <div className="instagram">
            <label>
              <b>Instagram-url:</b>
            </label>
            <input
              type="text"
              placeholder="enter address"
              onChange={(e) => setInstagram(e.target.value)}
              value={instagram}
            />
          </div>
          <div className="message">
            <label>
              <b>Add Description:</b>
            </label>
            <textarea
              cols="80"
              rows="6"
              placeholder="enter Details"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className="form-submit">
            <button>SUBMITS</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default sponserForm;
