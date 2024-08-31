import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='fixed top-0 left-0 w-full text-white py-2  font-Kanit z-50'>
            <ul className="flex items-center justify-between w-full px-4">
                <li className="text-3xl font-bold "><Link to="/home">Jobsek</Link></li>
                {/* <div className="flex items-center space-x-14 font-bold  text-2xl">
                    <li className='cursor-pointer'><a href='#home'>Home</a></li>
                    <li className='cursor-pointer'><a href='#about'>About</a></li>
                    <li className='cursor-pointer'><a href='#contact'>Contact</a></li>
                </div> */}
                <li className="flex items-center">
                   <Link to="/profile"> <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill='none'
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-8 h-8 cursor-pointer"
                        aria-label="User Icon">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg></Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
