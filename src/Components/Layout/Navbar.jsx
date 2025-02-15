import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import MenuNavLinks from '../MenuNavLinks/MenuNavLinks';


const Navbar = () => {

    const [isMenu, setIsMenu] = useState(false)

    const handleMenubar = () => {
        setIsMenu(!isMenu)
    }

  return (
    <div className='bg-white border-b'>
        <div className='flex justify-between items-center p-3'>
            <div className='flex items-center gap-2
            '>
                <button>
                <IoMdMenu className='text-3xl' onClick={() => handleMenubar()} /> 
                </button>
                <h1 className='font-bold text-lg'>FullstackSage</h1>
            </div>
            <div className='flex items-center gap-4'>
                <p>Sign Up</p>
                <IoSearch className='text-2xl' />
            </div>
        </div>

        {isMenu && <MenuNavLinks setIsMenu={setIsMenu} isMenu={isMenu} />}
    </div>
  )
}

export default Navbar