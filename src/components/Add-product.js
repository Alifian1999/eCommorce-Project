import React,{useState} from "react";
import NavbarSection from "./Navbar-section";
import FooterHome from "./Footer-home";

export function AddProduct(){
    let [itemName,setItemName]=useState('')
    let [Description,setDescription]=useState('')
    let [Image,setImage]=useState('')
    let [Price,setPrice]=useState('')


    function onSubmit(e){
        e.preventDefault()
        let data={
            itemName,
            Description,
            Image,
            Price
        }
        console.log(data);
    }
    return (
        <div>
            <NavbarSection/>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="itemName">Item Name</label>
                    <input onChange={e=>setItemName(e.target.value)} id="itemName"/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input onChange={e=>setDescription(e.target.value)} id="description"/>
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <input onClick={setImage} id="image" type='file'/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input onChange={e=>setPrice(e.target.value)} id="price"/>
                </div>
                <button type="submit">klik</button>
            </form>



                <div>
                <h1>{itemName}</h1>
                <p>{Description}</p>
                <img src={Image} />
                <p>{Price}</p>
                </div>
                
            
            <FooterHome/>
        </div>
    )
}
