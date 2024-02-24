import React from "react";
import { useEffect } from "react"; 
import { useDispatch} from "react-redux";
import { fetchAdverts } from "./redux/cars/operations";
import { CarsList } from "components/CarsList/CarsList";
import { Route, Routes } from "react-router-dom";
import { Layout } from "components/Layout";
import Home from "pages/Home";
import { Catalog } from "pages/Catalog/Catalog";
// import Catalog from "./pages";
// import Favorite from "pages/Favorite";

// const [currentPage, setCurrentPage] = React.useState(1);

export const App = () => {
  
  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdverts({ page:1, limit:12 }))
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route index path="/" element={<Home/>}/>
      <Route path="/catalog" element={<Catalog/>}/>
      {/* <Route path="/favorites" element={<Favorite/>}/> */}
      <Route path="*" element={<Home />}/>

    </Routes>

  );
};

<div>
  
<CarsList/>
    </div>