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



// export const CarsCard = ({ advert }) => {
//     const {
//       id,
//       img,
//       year,
//       make,
//       price,
//       city,
//       country,
//       rentalCompany,
//       carClass,
//       type,
//       model,
//       functionalities,
//     } = advert;
  
//     return (
//       <CardContainer>
//         <div>
//           <img src={img} alt={`${make} ${model}`} />
//           <button type="button">
//             <span>Button Text</span>
//           </button>
//         </div>
//         <div>
//           <div>
//             <h2>{make}</h2>
//           </div>
//           <div>
//             <h2>{model}</h2>
//           </div>
//           <div>
//             <h2>{year}</h2>
//           </div>
//           <div>
//             <h2>{price}</h2>
//           </div>
//         </div>
//         <div>
//           <p>
//             {city} | {country} | {rentalCompany} | {carClass} | {type} | {model} |{" "}
//             {id} | {functionalities.join(", ")}
//           </p>
//         </div>
  
//         <button type="button">Load more</button>
//       </CardContainer>
//     );
//   };