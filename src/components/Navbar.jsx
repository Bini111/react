import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
            <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">
            MyWebsite
          </div>
          <ul className="flex space-x-6 text-gray-600">
            <li>
            <Link to='/' className='hover:text-blue-500'>Home</Link>
            </li>

            <li><Link to='/aboutus' className='hover:text-blue-500'>aboutus</Link></li>
            <li><Link to='/contactus' className='hover:text-blue-500'>contactus</Link></li>
            <li><Link to='/services' className='hover:text-blue-500'>services</Link></li>
            <li><Link to='/products' className='hover:text-blue-500'>product</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
