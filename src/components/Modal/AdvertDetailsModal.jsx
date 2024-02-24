import React from 'react';
import Modal from 'react-modal';
import { AdvTitle, AdvertImg, CLoseBtn, ModalWrapper, AdvSubDescr, IconClose, Description, AdvSubTitle, Btn, Condition } from './AdvertDetailsModal.styled';

Modal.setAppElement('#root');

export const AdvertDetailsModal = ({ advert , closeModal }) => {
    const { img, model, make, year, id, type, description, fuelConsumption, engineSize, accessories, city, country, mileage, rentalConditions, rentalPrice } = advert;

    const rentalConditionsArray = rentalConditions.split(/\n/);
    const rentalCond = rentalConditionsArray.filter(condition => condition.trim() !== '');
console.log(rentalCond);


    return (
        <ModalWrapper className="custom-modal">
            
            <CLoseBtn type="button" onClick={closeModal}>
            <IconClose />
                {/* <svg>
                    <use xlinkHref={`${sprite}#close`}></use>
                </svg> */}
            </CLoseBtn>
            <AdvertImg src={img} alt={model} ></AdvertImg>
            
                <AdvTitle>{make}  <span>{model}</span>,  {year}</AdvTitle>
                <AdvSubDescr>{city} | {country} | id: {id} | Year: {year} | Tupe: {type} | Fuel Consumption: {fuelConsumption} | Engine Size: {engineSize}</AdvSubDescr>
                <Description>{description}</Description>
                <AdvSubTitle>Accessories and functionalities:</AdvSubTitle>
                <AdvSubDescr>{accessories.join(" | ")}</AdvSubDescr>
                <AdvSubTitle>Rental Conditions:</AdvSubTitle>
                <div>
                <ul>
                     {rentalCond.map((condition, index) => (
                    <li key={index}>{condition}</li>
                     ))}
                </ul>
                <ul>
                    <Condition>Mileage: {mileage}</Condition>
                    <Condition>Price: {rentalPrice}</Condition>
                </ul>
                </div>
                <Btn type="button">Rental car</Btn>
            
        </ModalWrapper>
    )
}


