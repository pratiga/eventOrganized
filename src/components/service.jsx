import React from 'react'
import "../Styles/service.css"
import { services } from '../data/services'
const Service = () => {
  return (
    <div className='service'>
      {
        services.map((item) =>{
          return(
            <>
              <div className='service-box'>
                <div className='box-front'>
                  <h1>{item.title}</h1> 
                  <p>{item.short_text}</p>
                </div>
                <div className='box-back'>
                  <p>{item.description}</p>
                </div>
              </div>
            </>
          )
        })
      }
    </div>
  )
}

export default Service
