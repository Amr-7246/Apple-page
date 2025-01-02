import React from 'react'
import {appleImg, bagImg, searchImg} from '../utils'
import {navLists} from '../constants'
import '../CSS/Navbar.css' 


const Navbar = () => {
  return (
    <>
        <header className='flex py-5 px-5 sm:px-10 w-full justify-between items-center'>
            <nav className='flex w-full screen-max-width'>
                <img src={appleImg} alt="apple imge" width={14} height={18} />
                <div className='flex justify-center flex-1 max-sm:hidden'>
                    {navLists.map((nav)=> (
                        <div key={nav} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>
                            {nav}
                        </div>
                    ))}
                </div>
                <div className='flex gap-7 items-baseline max-sm:justify-end max-sm:flex-1'>
                    <img src={searchImg} className='transition-all' alt="searchImg" width={18} height={18} />
                    <img src={bagImg} alt="bagImg"  width={18} height={18} />
                </div>
            </nav>
        </header>
    </>
  )
}

export default Navbar