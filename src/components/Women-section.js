import React, {useEffect, useState} from "react";
import FooterHome from "./Footer-home";
import NavbarSection from "./Navbar-section";
import { useSelector,useDispatch } from "react-redux";
import {increment, decrement} from '../redux/actions/counterActions'
import { getAllBarang } from '../redux/actions/getBarangActions'
import { useParams } from "react-router-dom";


export default function WomenSection(){
    //bikin array, berisikan angka acak, cek apakah angka pertama lebih kecil dari angka selanjutnya, jika lebih kecil tukar
    const counter= useSelector(state=>state.reducer)
    const getAllBarangResult = useSelector(state => state.getBarangReducers)
    const dispatch = useDispatch()
    const id = useParams()
    useEffect(()=>{
        dispatch(getAllBarang(id.id))
    },[])
    
    function getValue(e){  
        e.preventDefault() 
        let inputData= document.getElementById('try').value
        let tampung= inputData
        if(!tampung){
            return alert('please fill your identity')
        }else{
            return console.log(tampung);
        }
    }
    return(
        <div>
            <NavbarSection/>
            <h1>hasil</h1>
            <h1>{counter}</h1>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>

            {getAllBarangResult.loading?(
                <h2>loading</h2>
                ):getAllBarangResult.error?(
                    <h2>{getAllBarangResult.error}</h2>
                ):(
            <div>
                {getAllBarangResult &&
                getAllBarangResult.users &&
                getAllBarangResult.users.result.map((user,id)=>
                    <div className="mk">
                        <p key={user}>{user.username}</p>
                        <p key={id}>{user.password}</p>
                    </div>
                )}
            </div>
            )}
            <form onSubmit={getValue}>
                <input id="try"/>
                <button type='submit'>click</button>
                <textarea  id="try1"/>
            </form>
            <FooterHome id={id}></FooterHome>
        </div>
    )
}