import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const { user,logOut } = useContext(AuthContext);

    const logOutHandler=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.error(error))
    };

    return (
        <div>
            <div className="navbar bg-base-200">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-3xl">My <span className=' text-red-700'>Dream</span></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                    <li>{
                            user ? <div className="dropdown  dropdown-left">
                                <label tabIndex={0} className="btn m-1">Profile</label>
                                <div tabIndex={0} className="dropdown-content card card-compact w-100 p-2 shadow bg-primary text-primary-content">
                                    <div className="card-body">
                                        <h3 className="card-title">{user.email}</h3>
                                        <button onClick={logOutHandler} className='btn btn-primary'>logOut</button>
                                    </div>
                                </div>
                            </div> : <Link to="/login">LogIn</Link>
                        }
                        </li>
                        <li><Link to="/">Home</Link></li>
                        
                        <li><Link to="/register">Register</Link></li>
                       
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;