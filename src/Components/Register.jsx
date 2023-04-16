import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [seePass, setSeePass] = useState(false);

    console.log(createUser);

    const registerHandler = (event) => {
        event.preventDefault();

        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name, email, password);


        createUser(email, password, name)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                toast('Register SuccessFully');
                from.reset();

            })
            .catch(error => {
                console.log(error);
                toast(error.message)

            })

    }
    const showPass = () => {
        if (!seePass) {
            setSeePass(true);
        } else {
            setSeePass(false);
        }
    }
    return (
        <div>
            <div className="hero min-h-screen ">

                <div className="hero-content grid grid-cols-1 md:grid-cols-2   ">

                    <div className="card flex-shrink-0   shadow-2xl bg-base-100">
                        <form onSubmit={registerHandler} className="card-body w-75">
                            <div className="form-control">
                                <h1 className="text-5xl font-bold">Please Register</h1>
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Enter Your Full Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={!seePass?"password":"text"} name='password' placeholder="Enter Strong Password" className="input input-bordered" />
                                <label className="cursor-pointer label">
                                    <span className="label-text">Show password</span>
                                    <input type="checkbox" onClick={showPass} className="checkbox checkbox-success" />
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                    <div className=" ml-10 pl-12">
                        <img className=' w-96' src="https://img.lovepik.com/element/45009/2311.png_300.png" alt="" />
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;