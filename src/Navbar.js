import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(){
    return(
        <div>
            <div className='navbar-container-a'>
                <p>USD</p>
                <p>FREE SHIPPING ON ALL HERMAN MILLER! FEB. 25–28. </p>
                <p>Support</p>
            </div>
            <div className='navbar-container-b'>
                <div className='navbar-left-side'>
                    <Link to='/' className='menu-left-side-a'>Ecommerce</Link>
                    <span className='menu-left-side' >Shop</span>
                    <span className='menu-left-side' >Stories</span>
                    <span className='menu-left-side'>About</span>

                    <div className='menu-left-side'>
                        <label for="search-box" className='search-box'><img src='/images/project/search-m.svg' alt='' /></label>
                        <input id='search-box' placeholder='Search'/>
                    </div>
                </div>

                <div className='navbar-right-side'>
                    <div className='menu-right-side-main'>
                        <p className='menu-right-side-main-child-a'><img src='/images/project/cart-m.svg' alt='' /></p>
                        <p className='menu-right-side-main-child'>3</p>
                    </div>
                    <span className='menu-right-side'>Sign In</span>
                    <Link to='/sign-up' className='menu-right-side-a'>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}