import React from "react";
import { CardContainer } from "./CarsCard.styled";

export const CarsCard = ({ advert }) => 
        { const {
          id,
           img,
           year,
           make,
           price,
           city,
           country,
           rentalCompany,
           carClass,
           type,
           model,
           functionalities,
         } = advert; 
 return (
    <CardContainer>
        <div>
        <image src={img} alt={`${make} ${model}`}/>
        <button type="button">
            <span><svg>
                </svg></span>
        </button>
        </div>
        <div>
            <div>
             <h2>{make}, {model}, {year}</h2>  
            </div>
            
            <div>
              <h2>{price}</h2>  
            </div>
        </div>
        <div>
            <p> {city} | {country} | {rentalCompany} | {carClass} | {type} | {model} | {id} | {functionalities} </p>
            
        </div>
        

        <button type="button">Load more</button>
    </CardContainer>
    
 )   
}
