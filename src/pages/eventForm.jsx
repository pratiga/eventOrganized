/* eslint-disable react-hooks/rules-of-hooks */
import "../Styles/eventForm.css";
import { useState } from "react";
import axios from "axios";

function eventForm() {
  const [events, setEvents] = useState([]);
  const [name, setName] = useState("");
  const[location, setLocation] = useState("");
  const[description, setDescription] = useState("")
  const[date, setDate] = useState("")
  const[short_description, setShort_description] = useState("")
  const[img_url, setImg_url] = useState("")
  const[organized_by, setOrganized_by] = useState("")


  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://sponsored-by.herokuapp.com/event", {
        //  id: Math.random() * 1000 ,
          name: name,
          description: description,
           short_description: short_description,
           organized_by:organized_by,
           location:location,
           date:date,
           image_url:img_url,
          
        // image_url: "string",
        //  description: "string",
         //short_description: "string",
         //organized_by: "string",
       // location: "string",
         category: "string",
         //date: "2022-10-13",
         sponsors: [],
      })
      .then((res) => {
        console.log(res.data)
        setEvents((events) => [res.data, ...events]);
        setName("");
        setLocation("");
        setDescription("");
        setDate("");
        setShort_description("");
        setImg_url("");
        setOrganized_by("");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div class="container">
          <center>
            <h1> Event Registeration Form</h1>
          </center>
          <hr />
          <label> Name </label>
          <input
            type="text"
            value={name}
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            size="15"
            required
          />
          <label> short_Descreption </label>
          <input
            type="text"
            value={short_description}
            placeholder="Short Description"
            onChange={(e) => setShort_description(e.target.value)}
            size="15"
            required
          />
          <label for="location">
            <b>location</b>
          </label>
          <input
            type="text"
            placeholder="Enter location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            required
          />
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
           <label for="">
            <b>image_url</b>
          </label>
          <input
            type="text"
            placeholder="Enter photo"
            onChange={(e) => setImg_url(e.target.value)}
            value={img_url}
            required
          />
          <input
            type="date"
            value={date}
            placeholder="Date"
            onChange={(e) => setDate(e.target.value)}
            size="10"
            required
          />
          Description :
          <textarea
            cols="80"
            rows="5"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
            ></textarea>
          <button type="submit" class="registerbtn">
            Submit
          </button>
        </div>
      </form> 
     
    </div>
  );
}

export default eventForm;

// /* eslint-disable react-hooks/rules-of-hooks */
// import React,{ useState } from "react";
// import "../Styles/eventForm.css";

// function eventForm() {

//   const [name, setName] = useState("");
//   const [message, setMessage] = useState("");

//   let handleSubmit = async (e) => {
//     e.preventDefault();
//     try{
//       let res = await fetch("https://sponsored-by.herokuapp.com/events",{
//         method: "POST",
//         body: JSON.stringify({
//           name:name,
//         }),
//       });
//       let resJson = await res.json();
//       if (res.status === 200) {
//         setName("");
//         setMessage("user created successfully");
//       } else {
//         setMessage("Some error occured");
//       }
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   return (
//     <div>
//       {/* <form>
//         <div class="container">
//           <center>
//             <h1> Event Registeration Form</h1>
//           </center>
//           <hr />
//           <label> Name </label>
//           <input
//             type="text"
//             name="name"
//             placeholder="name"
//             size="15"
//             required
//           />
//           <label> short_Descreption </label>
//           <input
//             type="text"
//             name="short_Description"
//             placeholder="Short Description"
//             size="15"
//             required
//           />
//           <label for="location">
//             <b>location</b>
//           </label>
//           <input
//             type="text"
//             placeholder="Enter location"
//             name="location"
//             required
//           />
//           <label for="">
//             <b>organizer</b>
//           </label>
//           <input
//             type="text"
//             placeholder="Enter organizer"
//             name="orgainzed_by"
//             required
//           />
//           <input
//             type="date"
//             name="phone"
//             placeholder="Date"
//             size="10"
//             required
//           />
//           Current Address :
//           <textarea
//             cols="80"
//             rows="5"
//             placeholder="Description"
//             value="description"
//             required
//           ></textarea>
//           <button type="submit" class="registerbtn">
//             Submit
//           </button>
//         </div>
//       </form> */}
//       <form onSubmit={handleSubmit}>
//       <label> Name </label>
//           <input
//             type="text"
//             value={name}
//             placeholder="name"
//             onChange={(e) => setName(e.target.value)}
//             size="15"
//             required
//           />
//           <button type="submit" class="registerbtn">
//             Submit
//           </button>
//           <div className="message">{message ? <p>{message}</p> : null}</div>
//       </form>
//     </div>
//   );
// };

// export default eventForm;
