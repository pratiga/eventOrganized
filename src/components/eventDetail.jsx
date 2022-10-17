/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../Styles/eventDetali.css'

const eventDetail = () => {
  const { id } = useParams()
  console.log(id)
  const url = `https://sponsored-by.herokuapp.com/event/${id}`;
  const [event, setEvent] = useState(null)
  
  let content = null
  useEffect(() => {
    axios.get(url)
      .then(response => {
          setEvent(response.data)
      })
  }, [url])
  
  if(event){
    content = 
    <div className='eventDetail'>
    <div className='image-event'>
      <img src={event.image_url} alt="images"/>
    </div>
    <div className='details-box'>
      <p className='name'>{event.name}</p>
      <span className='location'>{event.location}</span>
      <span className='date'>{event.date}</span>
      <p>{event.description}</p>
    </div>
      

      
    </div>
  }
  return (
    <div>
      {content}
    </div>
  )
}

export default eventDetail
