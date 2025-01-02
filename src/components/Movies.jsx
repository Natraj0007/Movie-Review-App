import { React, useEffect, useState } from "react";
import MovieCards from "./MovieCards";
import Pagination from "./Pagination";
import axios from "axios";

function Movies({handleWatchList , handleRemoveWatchlist , watchlist}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  // useEffect Start
    useEffect(() => {
    const options = {
      method: "GET",
      url: `https://movies-api14.p.rapidapi.com/movies?page=${pageNo}`,
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        "x-rapidapi-host": "movies-api14.p.rapidapi.com",
      },
    };

    // API request
    axios.get(options.url, { headers: options.headers }).then(function (res) {
      setMovies(res.data.movies);
      //console.log(res.data.movies);
      
    });

   
 }, [pageNo]);

  //Pagination Start

  //Next Page

  function nextPage() {
    setPageNo(pageNo + 1);
  }

  //Previous Page

  function prevPage() {
    if (pageNo === 1) {
      setPageNo(pageNo);
    } else {
      setPageNo(pageNo - 1);
    }
  }

  //Pagination End

  // useEffect End

  //   HTML PART
  return (
    <div className="p-5">
      <div className="text-2xl m-5 font-bold text-center">Trending movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-6">
        {movies.map((movie, index) => {
          return <MovieCards key={index} movie={movie} poster={movie.poster_path} title={movie.original_title} handleWatchList={handleWatchList} handleRemoveWatchlist={handleRemoveWatchlist} watchlist={watchlist}/>;
        })}
      </div>
      <Pagination pageNo={pageNo} nextPage={nextPage} prevPage={prevPage} />
    </div>
  );
}

export default Movies;

/*
https://movies-api14.p.rapidapi.com/movies?x-rapidapi-key=619d9c55cdmshae2d6a652e257dap1dba50jsn40900b214f63&x-rapidapi-host=movies-api14.p.rapidapi.com
*/
