import React,{useState} from "react";
import Navbar from "./Navbar";
import FooterHome from "./Footer-home";
import { useDispatch } from "react-redux";
import { LoginController } from "../redux/actions/loginActions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SignIn(){
    const navigate = useNavigate()
    const dispatch=useDispatch()
    let [username,setUsername]=useState('')
    let [password,setPassword]=useState('')


    function submitHandler(e){
        e.preventDefault()
        dispatch(LoginController({username,password,navigate}))
    }
    
    return(
        <div>
            <Navbar/>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Username</label>
                    <input placeholder="username" onChange={e=>setUsername(e.target.value)} required/>
                </div>
                <div>
                    <label>Password</label>
                    <input placeholder="password" onChange={e=>setPassword(e.target.value)} required/>
                </div>
                <button type="submit">click me</button>
            </form>
            <FooterHome/>
        </div>
    )
}