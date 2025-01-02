import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

   let [watchlist,setWatchlist] = useState([])

   let handleWatchList = (movie) => {

       let newWatchList = [...watchlist,movie]
       localStorage.setItem('moviesApp',JSON.stringify(newWatchList))
       setWatchlist(newWatchList)
       console.log(newWatchList)

   }

   let handleRemoveWatchlist = (movie) => {

       let filteredWatchList = watchlist.filter((movieObj)=>{
         return movieObj._id != movie._id
       })    
       localStorage.setItem('moviesApp',JSON.stringify(filteredWatchList))
       setWatchlist(filteredWatchList)
       console.log('hi')
   }
   
   //LocalStorage

   useEffect(() => {
      
     let moviesFromLocalStorage = localStorage.getItem('moviesApp')
     if(!moviesFromLocalStorage){
      return
     }
     setWatchlist(JSON.parse(moviesFromLocalStorage))
   }, []);







  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies handleWatchList={handleWatchList} handleRemoveWatchlist={handleRemoveWatchlist} watchlist={watchlist}/>
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <>
                <WatchList watchlist={watchlist} handleRemoveWatchlist={handleRemoveWatchlist}/> 
                
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
//'eslint-disable no-unused-vars ':'true',
//API:ee60c990-24b1-4398-82f3-5ac557c6a692
