import React from "react";
import NavbarSection from "../Navbar-section";

export default function CartProduct(){
    return(
        <div>
            <NavbarSection></NavbarSection>
            <div>
                <h1>Checkout</h1>
                <div>
                    <p>Adress</p>
                    <p>Shipping</p>
                    <p>Payment</p>
                </div>
                <h3>Shipping Information</h3>
                <form>
                    <div>
                        <input placeholder="First Name"/>
                        <input placeholder="Last Name"/>
                    </div>
                    <input placeholder="Address"/>
                    <input placeholder="Apartment, Suit, etc (optional)"/>
                    <input placeholder="City"/>
                    <div>
                        <select>
                            <option>Country</option>
                        </select>
                        <select>
                            <option>City</option>
                        </select>
                        <input placeholder="Zipcode"/>
                    </div>
                    <input placeholder="Optional"/>
                    <div>
                        <input type='checkbox'/>
                        <span>Save contact information</span>
                    </div>
                    <button>Continue to Shipping</button>
                </form>
            </div>
            <div>
                <p>Your cart</p>
                <div>
                    <img src="/images/images-project/jacket.png" alt=""/>
                    <div>
                        <h1>Men’s winter jacket</h1>
                        <p>Size L</p>
                        <p>Quantity 1</p>
                        <div>
                            <p className="price">$99</p>
                            <p>Remove</p>
                        </div>
                    </div>
                    <p className="border-bottom"></p>
                </div>
                <div>
                    <img src="/images/images-project/jacket.png" alt=""/>
                    <div>
                        <h1>Men’s winter jacket</h1>
                        <p>Size L</p>
                        <p>Quantity 1</p>
                        <div>
                            <p className="price">$99</p>
                            <p>Remove</p>
                        </div>
                    </div>
                    <p className="border-bottom"></p>
                </div>
                
                <input />
                <div>
                    <div></div>
                    <div></div>
                    <p className="border-bottom"></p>
                    <div></div>
                </div>
            </div>
            
        </div>
    )
}