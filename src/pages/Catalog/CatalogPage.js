import { LoadMoreBtn } from "components/Button/ButtonLoadMore";
import { CarsList } from "components/CarsList/CarsList";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAdverts } from "../../redux/cars/operations";

export const Catalog = () => {

    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    
    const toLoadMore = () => {
        dispatch(fetchAdverts({ page: currentPage + 1, limit: 12}));
        setCurrentPage(prevPage => prevPage + 1); 
    }
return (
    <>
    <CarsList/>
    {/* {adverts.lendht > 0 && page !== totalPage &&( */}
        <LoadMoreBtn onClick={toLoadMore}/>
    {/* ) } */}
    
    </>
)

}