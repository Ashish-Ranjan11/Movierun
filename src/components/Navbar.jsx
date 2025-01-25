import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='bg-[#0a0a0a] text-xl font-semibold'>
            <div className='mx-[mx-4rem] flex gap-4'>
                <Link to='/' className='text-white hover:text-grey-300'>Home</Link>
                <Link to='/watchlist' className='text-white hover:tet-grey-300'>Watchlist</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar