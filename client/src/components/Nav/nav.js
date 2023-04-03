/* eslint-disable no-unused-vars */
import React, {useContext} from 'react';
import './nav.css';
import { NavLink, useLocation } from 'react-router-dom';
import myCauseContext from '../../providers/myCauseContext';
import Auth from '../../utils/auth';




const LoggedInNav = () => (
    <>
        <NavLink to='/' className="links" >Home</NavLink>
        <NavLink to='/causes' className="links" >Partners</NavLink>
        <NavLink to='/addcause' className="links" >Add Cause</NavLink>
        <button className='btn btn-light' onClick={() => Auth.logout()}>Logout</button>
        <h3>{Auth.getProfile().email}</h3>
    </>
);

const LoggedInWithCauseNav = () => (
    <>
        <NavLink to='/' className="links" >Home</NavLink>
        <NavLink to='/causes' className="links" >Partners</NavLink>
        <NavLink to='/my-cause' className="links">My Cause</NavLink>
        <button className='btn btn-light' onClick={() => Auth.logout()}>Logout</button>
        <h3>{Auth.getProfile().email}</h3>
    </>
);

const LoggedOutNav = () => (
    <>
        <NavLink to='/' className="links" >Home</NavLink>
        <NavLink to='/causes' className="links" >Partners</NavLink>
        <NavLink to='/login' className="links">Login</NavLink>
        <NavLink to='/signup' className="links">Sign Up</NavLink>
    </>
);

export default function Nav() {
    const location = useLocation();
    const isOnHome = location.pathname === '/';
    const { myCause } = useContext(myCauseContext);

    return (
        <nav className="nav background" style={{ position: isOnHome ? 'absolute' : '', backgroundColor: isOnHome ? '' : '#237A74' }} >
            <div className="navDiv">
                <h1 className="navH1">Partner for Good.</h1>
                <div className="navLinks" >
                    {Auth.loggedIn() && myCause.ifCause ? <LoggedInWithCauseNav /> : (Auth.loggedIn() ? <LoggedInNav/> : <LoggedOutNav />)}
                    
                </div>
            </div>

        </nav>
    )
}