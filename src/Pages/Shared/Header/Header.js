import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo.png';
import { AuthContext } from '../../../Contexts/UserContext';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    // console.log(user)
    const menuItems = <>
       <li><Link className='font-semibold' to='/'>Home</Link></li>
       <li><Link className='font-semibold' to='/totalservices'>Services</Link></li>
       <li><Link className='font-semibold' to='/blogs'>Blogs</Link></li>
       {
           user?.uid?
           <>
           
           <li><Link className='font-semibold' to='/reviews'>My Review</Link></li>
           <li><Link className='font-semibold' to='/addservice'>Add Service</Link></li>
           <li><Link className='font-semibold' onClick={logOut}>Log Out</Link></li>
           </>
           :
           <li><Link className='font-semibold' to='/login'>Login</Link></li>
       }
    </>
    return (
        <div className="navbar bg-base-100 mb-5 pt-12 ">
            <div className="">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl w-20">
                    <img  src={logo} alt=''/>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="avatar m-5">
            <div className="w-8 rounded">
                {
                    user?.photoURL?
                    <img src={user?.photoURL} alt="Tailwind-CSS-Avatar-component" />
                    :
                    <button><faUser></faUser></button>
                }
               
            </div>
            </div>
            
            <h1 className='ml-5'>{user?.displayName}</h1>
        </div>
    );
};

export default Header;