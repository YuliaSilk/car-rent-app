import React, { Suspense, lazy } from "react";
import { useEffect } from "react"; 
import { useDispatch} from "react-redux";
import { fetchAdverts } from "../redux/cars/operations";
// import { Route, Routes } from "react-router-dom";
import { Layout } from "components/Layout";
import { BrowserRouter as Routes, Route } from 'react-router-dom';

// import { HomePage } from "pages/HomePage";
// import { CatalogPage } from "pages/Catalog/CatalogPage";
// import { Favorite }from "pages/Favorite";

const HomePage = lazy(() => import('../pages/Home/HomePage'));
const CatalogPage = lazy(() => import('../pages/Catalog/CatalogPage'));
// const FavoritePage = lazy(() => import('../pages/Favorite/FavoritesPage'));


export const App = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdverts({ page:1, limit:12 }))
  }, [dispatch])

  return (
    <Suspense fallback={<div>Loading...</div>}>
    
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route index path="/" element={<HomePage/>}/>
      <Route path="/catalog" element={<CatalogPage/>}/>
      {/* <Route path="/favorites" element={<FavoritePage/>}/> */}
      <Route path="*" element={<HomePage />}/>

    </Routes>
    
    </Suspense>

  );
};
