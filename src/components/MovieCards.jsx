import React from "react";

function MovieCards({ movie , poster, title , handleWatchList , handleRemoveWatchlist , watchlist}) {

    
  function doesContains(movie) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i]._id == movie._id) {
        return true
      }
      
    }
    return false
    
  }
 

  return (
    <div
      className="h-[50vh] w-[160px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end pb-2"
      style={{backgroundImage: `url(${poster})`}}>
          
       {doesContains(movie)?(

           <div
           onClick={() => handleRemoveWatchlist(movie)}
           className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
           >&#10060;</div>

       ):(

           <div 
            onClick={() => handleWatchList(movie)} 
            className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
           > &#128525;</div>

       )}
        
        
      
      

      
    

       <div className="text-white text-sm w-full p-2 text-center bg-gray-900/60">
         {title}
       </div>
    </div>
  );
}

export default MovieCards;
