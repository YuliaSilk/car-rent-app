import React, { useState } from "react";
import Modal from 'react-modal';
import { CarImg, CardContainer, ImgContainer, CarTitle, CarDescription, DescriptionContainer, LearnMoreBtn, TitleContainer, FavBtn, HeartSvg } from "./CarsCard.styled";
import { AdvertDetailsModal } from "components/Modal/AdvertDetailsModal";

// export const CarsCard = ({ advert: { id, img, year, make, rentalPrice, city, country, rentalCompany, carClass, type, model, functionalities } }) => {
     

//          const [isModalOpen, setIsModalOpen] = useState(false);
export const CarsCard = ({ advert: initialAdvert }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [advert, setAdvert] = useState(initialAdvert);

         const openModal = () => {
          setIsModalOpen(true);
        };
      
        const closeModal = () => {
          setIsModalOpen(false);
        };
      

 return (
    <CardContainer>
        <ImgContainer>
        <CarImg src={advert.img} alt={advert.model}  />
        <FavBtn type="button">
            
            <HeartSvg />
              {/* <use xlinkHref={`${sprite}#close`}></use> */}
           
        </FavBtn>
        </ImgContainer>
        <TitleContainer>
            <div>
             <CarTitle>{advert.make}  <span>{advert.model}</span>,  {advert.year}</CarTitle>  
            </div>
            <div>
              <CarTitle>{advert.rentalPrice}</CarTitle>  
            </div>
        </TitleContainer>
        <DescriptionContainer>
            <CarDescription> {advert.city}  |  {advert.country}  |  {advert.rentalCompany}  |  {advert.carClass}  |  {advert.type}  |  {advert.model}  |  {advert.id}  |  {advert.functionalities} </CarDescription>
            
        </DescriptionContainer>
        

        <LearnMoreBtn type="button" onClick={openModal}>Learn more</LearnMoreBtn>
        <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                overlayClassName={'modal-overlay'}
                className={'modal-content'}
                closeTimeoutMS={300}
              >
        <AdvertDetailsModal advert={advert} closeModal={closeModal} />
            </Modal>
    </CardContainer>
 )   
}


