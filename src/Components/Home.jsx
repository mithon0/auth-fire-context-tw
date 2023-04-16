import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Home = () => {
    const {user,logOut} =useContext(AuthContext);
    const logOutHandler = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    };

    return (
        <div className='m-10 p-10 rounded border'>
            <h1 className=' m-4 text-5xl text-center'>Well come to Home </h1>
            <h2 className=' m-2 text-2xl text-center'>Thanks you for register and log in our wesite </h2>
            <h3 className='m-2 text-2xl text-center'>Your email is: <span className=' bg-red-800 text-white'>{user.email}</span></h3>
            <div className=' text-center m-4'>
                <button onClick={logOutHandler} className='btn btn-primary '>logOut</button>
                </div>
        </div>
    );
};

export default Home;