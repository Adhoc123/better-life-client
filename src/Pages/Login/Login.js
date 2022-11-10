import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const Login = () => {
    const {signIn, providerLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider();

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, {replace: true});
        })
        .catch(err => console.error(err))
    }
    const handleGoogle = ()=>{
        // event.preventDefault();
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
        })
        .catch(err => console.error(err))
    }
    return (
        <div className="hero w-full">
        <div className="hero-content flex-col ">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
            <h1 className="text-5xl font-bold text-center">Login</h1>
            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type='submit' value='Login'/>
                </div>
            </form>
            <p className='text-center'>New to this site? <Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link></p>
            <p className='text-center text-blue-600 font-bold m-5'><button onClick={handleGoogle} className='btn btn-outline btn-info'>Google Login</button></p>
            </div>
        </div>
        </div>
    );
};

export default Login;