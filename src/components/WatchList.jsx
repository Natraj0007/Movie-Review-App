import { useState } from "react";
import Logo from "../images/logo1.jpg";

function WatchList({ watchlist , handleRemoveWatchlist}) {

  const [search, setSearch] = useState('');

  let handleSearch = (e) => {
    
    setSearch(e.target.value)

  }


  return (
    <>
      {/*Genre div*/}
      {/* <div className="flex justify-center flex-wrap m-4">
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-4">
          Action
        </div>
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl text-white font-bold">
          Action
        </div>
      </div> */}

      {/*Search bar*/}
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] bg-gray-300 rounded-lg outline-none"
        />
      </div>

      {/* Movie Table*/}
      <div className="rounded-lg overflow-hidden border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>Release Date</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchlist.filter((movie)=>{
              return movie.title.toLowerCase().includes(search.toLocaleLowerCase())
            }).map((movie,index) => {
              return    <tr key={index}>
              <td className="flex items-center px-6 py-4">
                <img src={`${movie.backdrop_path}`} alt="" className="h-[6rem] w-[10rem]" />
                <div className="mx-10">{movie.title}</div>
              </td>
              <td>{movie.release_date}</td>
              <td>{movie.genres.map((genre)=>{
                return <p>{genre}</p>
              })}</td>
              <td className="text-red-800" ><button onClick={()=>handleRemoveWatchlist(movie)}>Delete</button></td>
            </tr>
            })}
         
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
