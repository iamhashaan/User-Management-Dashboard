import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-black md:p-3 flex justify-between items-center">
        <div className="text-white">
            <span className="text-2xl md:text-4xl font-extrabold tracking-wide">User Management Dashboard</span>
        </div>
        <div className="flex items-center space-x-4">
            
            <div className='flex justify-end'>
                <button className='bg-white text-black font-semibold px-4 py-4 rounded-lg mr-2 text-xl'>
                <Link to={'/'}>User Details</Link>
                </button>
                <button className='bg-white text-black font-semibold px-4 py-2 rounded-lg text-xl'>
                <Link to={'/createAccount'}>Account Creation</Link>
                </button>
            
            </div>
        </div>
    </div>
  );
};

export default Header;
