import React from "react";
import { useState } from "react";

export default function Cart(props){
    let [jumlah,beli]=useState(0)
    function beliBarang(){
        beli(prevBarang=>prevBarang+1)
    }
    function hapusBarang(){
       if(jumlah!==0){
           beli(prevBarang=>prevBarang-1)
       }else{
           beli(prevBarang=>prevBarang-0)
       }
    }
    return(
        <div>
            <button onClick={beliBarang}>+</button>
            <h1>{props.jumlah}</h1>
            <button onClick={hapusBarang}>-</button>
        </div>
    )
}