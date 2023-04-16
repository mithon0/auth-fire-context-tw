import React, { useContext } from 'react';
import img from '../img/13.jpg'
import  { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {

    const {logInUser}=useContext(AuthContext);
    
    const logInHeandler =(event)=>{
        event.preventDefault()
        const email=event.target.email.value;
        const password=event.target.password.value;
        console.log(email,password);
        logInUser(email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            toast('LogIn Succesfully')

        })
        .catch(error=>{
            console.log(error);
            toast(error.message)
        })
    }

    return (
       
            <div className="hero min-h-screen ">
            
                <div className="hero-content grid grid-cols-1 md:grid-cols-2   ">
                    
                    <form onSubmit={logInHeandler} className="card flex-shrink-0   shadow-2xl bg-base-100">
                        <div className="card-body w-75">
                            <div className="form-control">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                    <div className=" ml-10 pl-12">
                       <img className=' w-96' src={img} alt="" />
                       <ToastContainer/>
                    </div>
                </div>
            </div>
        
    );
};

export default Login;