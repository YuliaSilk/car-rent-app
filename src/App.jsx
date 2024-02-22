import { CarsCard } from "components/CarsCard/CarsCard";
import React from "react";
import { useEffect } from "react"; 
import { useDispatch, useSelector} from "react-redux";
import { fetchAdverts } from "./redux/cars/operations";
import { selectAdverts } from "./redux/cars/selectors";



export const App = () => {

  const adverts = useSelector(selectAdverts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdverts())
  }, [dispatch])

  return (
    <div>
  {adverts.map((advert) => (
        <CarsCard key={advert.id} advert={advert} />
      ))}

    </div>
  );
};