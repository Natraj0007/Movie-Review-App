import React from 'react'

function Pagination({pageNo , nextPage , prevPage}) {
  return (
    <div className='bg-gray-400 p-4 mt-8 flex justify-center'>
        <div onClick={prevPage} className='px-8 hover:cursor-pointer flex items-center'><i className="fa-solid fa-arrow-left"></i></div>
        <div className='flex items-center justify-center'><p>{pageNo}</p></div>
        <div onClick={nextPage} className='px-8 hover:cursor-pointer flex items-center'><i className="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination