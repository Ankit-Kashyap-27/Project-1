import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import sun from "../assets/sun.svg"
import moon from "../assets/moon.svg"
import { Link } from 'react-router'


const Navbar = (props) => {


    return (
        <nav className={` ${props.mode ? "text-white bg-[#242424]" : "bg-green-200 "} py-2 h-[10vh] flex items-center  justify-between px-8`}>
            <div className=' gap-7  flex items-center '>
                <span className='text-3xl'>{props.title}</span>
                <ul>

                    <li className='text-lg  '>
                        <Link className='mx-3  duration-100 hover:border-b-2 hover:border-b-black ' to="/">home</Link>  
                        <Link className='mx-3  duration-100 hover:border-b-2 hover:border-b-black ' to="/About">About</Link>


                    </li>
                </ul>
            </div>
            <div className="mx-4">
                <div className={` transition-transform duration-500  ${props.mode ? 'bg-[#60676c]' : 'bg-[#60676c]'} rounded-full h-[5vh] w-[5vw] flex items-center `}>

                    <div onClick={props.handleSlide} className={`transition-transform duration-500 bg-[#f4f4ef] h-[5vh] 
                        w-[3vw] rounded-full flex justify-center items-center  
                        ${!props.mode ? ' translate-x-0 ' : 'translate-x-[2vw]'}`}>
                        <img className='size-6' src={props.mode ? moon : sun} alt="" />

                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar






