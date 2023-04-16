import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-200">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-3xl">My <span className=' text-red-700'>Dream</span></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">LogIn</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;