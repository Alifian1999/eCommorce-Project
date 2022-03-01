import React from "react";
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";


export default function NavbarSection(){
    const counter= useSelector(state=>state.reducer)
    
    return(
        <div className="navbar-section-container">
            <div className='navbar-container-b'>
                <div className='navbar-left-side'>
                    <Link to='/' className='menu-left-side-a-section'>Ecommerce</Link>
                    <span className='menu-left-side' >Shop</span>
                    <span className='menu-left-side' >Stories</span>
                    <span className='menu-left-side'>About</span>

                    <div className='menu-left-side'>
                        <label htmlFor="search-box" className='search-box'><img src='/images/project/search-m.svg' alt='' /></label>
                        <input id='search-box' placeholder='Search'/>
                    </div>
                </div>

                <div className='navbar-right-side'>
                    <div className='menu-right-side-main'>
                        <p className='menu-right-side-main-child-a-section'><img src='/images/project/cart-m.svg' alt='' /></p>
                        <p className='menu-right-side-main-child'>{counter}</p>
                    </div>
                    <span className='menu-right-side'>Sign In</span>
                    <Link to='/sign-up' className='menu-right-side'>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}