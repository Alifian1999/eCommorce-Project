import React from "react";
import FooterHome from "./Footer-home";
import NavbarSection from "./Navbar-section";
import { useSelector,useDispatch } from "react-redux";
import {increment} from './actions/index'
import { decrement } from "./actions/index";

export default function WomenSection(){
    const counter= useSelector(state=>state.reducer)
    const dispatch=useDispatch()


    return(
        <div>
            <NavbarSection/>
            <h1>hasil</h1>
            <h1>{counter}</h1>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch({type:'hello'})}>yo</button>


            <FooterHome></FooterHome>
        </div>
    )
}