import { CarsCard } from "components/CarsCard/CarsCard";
import React from "react";
import { selectAdverts } from "../../redux/cars/selectors";
import {  useSelector } from "react-redux";
import { ListContainer } from "./CarsList.styled";
// import { fetchAdverts } from "../../redux/cars/operations";
// import { LoadMoreAdverts } from "../../redux/cars/actions";


export const CarsList = () => {
    const adverts = useSelector(selectAdverts);
    // const dispatch = useDispatch();
    // const [currentPage, setCurrentPage] = useState(1);
   
    // const toLoadMore = () => {
    //     setCurrentPage((prevPage) => prevPage + 1);
    //     dispatch(fetchAdverts({ page: currentPage + 1, limit: 12}));
    // }
    
    // const toLoadMore = () => {
    //     dispatch(fetchAdverts({ page: currentPage + 1, limit: 12}));
    //     setCurrentPage(prevPage => prevPage + 1); 
    // }
 
    return (
        <>
        <ListContainer>
            {adverts.map((advert) => (
                <li key={advert.id}>
                    <CarsCard advert={advert}/>
                </li>
            ))}
           {/* {adverts.lenght < totaiItems &&}  */}
           {/* <button type="button" onClick={toLoadMore}>Load more</button> */}
        </ListContainer>
        </>
    )
}


