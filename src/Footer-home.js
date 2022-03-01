import React from "react";
import { Link } from "react-router-dom";

export default function FooterHome(){
    return(
        <div className="footer-home-container">
            <div className="footer-home-container-header">
                <h1>Sign up for our newsletter</h1>
                <p>Be the first to know about our special offers, 
                    new product launches, and events</p>
                <div className="email-address-container">
                    <input placeholder="Email Address"></input>
                    <Link className="tes" to='/sign-up'>Sign Up</Link>
                </div>
            </div>
            <div className="footer-home-container-menu">
                <h3>Shop</h3>
                <p><Link to='/women-section'>Women’s</Link></p>
                <p><Link to='/men-section'>Men’s</Link></p>
                <p>Kids’</p>
                <p>Shoes</p>
                <p>Equipment</p>
                <p>By Activity</p>
                <p>Gift Cards & Awards</p>
                <p>Sale</p>
            </div>
            <div className="footer-home-container-menu">
                <h3>Help</h3>
                <p>Help Center</p>
                <p>Order Status</p>
                <p>Size Chart</p>
                <p>Returns & Warranty</p>
                <p>Contact Us</p>
            </div>
            <div className="footer-home-container-menu">
            <h3>About</h3>
                <p>About Us</p>
                <p>Responsibility</p>
                <p>Technology & Innovation</p>
                <p>Explore our stories</p>
            </div>
        </div>
    )
}