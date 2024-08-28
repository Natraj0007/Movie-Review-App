import Logo from '../images/logo1.jpg'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
      <img className='w-[50px] rounded-full' src={Logo} alt="logo" />
      <Link to="/" className='text-blue-500 text-2xl font-bold'>Movies</Link>
      <Link to="/watchlist" className='text-blue-500 text-2xl font-bold'>WatchList</Link>
    </div>
  )
}

export default Navbar