import React from "react";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { TambahActions,KurangActions } from "../redux/actions/hitungActions";

export default function Cart(props){
    const dispatch= useDispatch()
    const result= useSelector(state=>state.hitungReducers)
    console.log(result);


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

            <div>
                <h1>REDUX</h1>
                <h1>{result}</h1>
                <button onClick={()=>dispatch(TambahActions())}>+</button>
                <button onClick={()=>dispatch(KurangActions())}>-</button>
            </div>
        </div>
    )
}