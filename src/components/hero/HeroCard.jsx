import React from 'react'
import {Link} from "react-router-dom"
import "./HeroCard.css"

export const HeroCard = ({
         id,
        superhero, 
        publisher, 
        alter_ego,
        first_appearance,
        characters
}) => {
 

  return (
    <div className='col'>  
      <div className='cards'>

        <div className='row no-gutters'>
            <div className='col-4'>
          <img src={`/assets/${id}.jpg`} className="card-img" alt={superhero}/>
           </div>

           <div className='col-8'>
             <div className='card-body'>
                <h5 className='card-title'>{superhero}</h5>
                <p className='card-text'>{alter_ego}</p>

                {
                  (alter_ego !== characters) && <p className='text-light'>{characters}</p>  
                
                }

                <p className='text-light'>
                   <small className='text-light'>{first_appearance}</small>
                </p>

                <Link to={`/hero/${id}`}>
                  Mas...
                </Link>

             </div>
           </div>
        </div>
        
     </div>
   </div>
  )
}
