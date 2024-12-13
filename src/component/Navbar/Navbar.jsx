import React, { useState } from 'react'
import logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';
const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false)

  const toggleMenu=()=>{
     setShowMenu(!showMenu)    //it will toggle if the show menu is false it willbe true and if true it will be false
  }
     return (
    <div className='bg-white px-4 fixed w-full z-50 shadow-sm top-0 shadow-gray-400'>
      <div className='max-w-7xl mx-auto py-2 px-5 flex justify-between items-center'>
        <img src={logo} alt="" className='md:w-24 w-20'/>
        <div className='flex items-center gap-5'>
           <nav className='hidden md:block'>
            <ul className='flex items-center font-semibold text-xl gap-7'>
              <Link to='/'><li>Home</li></Link>
              <Link to='/mens'><li>Mens</li></Link>
              <Link to='/womens'><li>Womens</li></Link>
              <Link to='/kids'><li>Kids</li></Link>
              <Link to='/login'><li></li><button className='bg-red-500 text-white px-4 py-1 rounded-md'>Login</button></Link>
            </ul>
           </nav>
           <Link to='/cart' className='relative w-10'>
           <ShoppingCart/>
           <div className='bg-red-500 w-4 h-4 absolute -top-2 right-1 flex items-center justify-center rounded-full text-white '>0</div>
           </Link>
           {/* mobile humberger icon */}
           {showMenu ? (
             <HiMenuAlt1 onClick={toggleMenu} className='cursor-pointer transition-all md:hidden' size={30}/>
           ):(
            <HiMenuAlt3 onClick={toggleMenu} className='cursor-pointer transition-all md:hidden' size={30}/>
           )}
      </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
    </div>
  )
}

export default Navbar