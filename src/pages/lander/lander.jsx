import React, { Component, useState } from "react"
import logo from '../../assests/Onlineshopping.png'
import Login from "../login/login"
import Signup from "../signup/signup"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './lander.css'

const Lander = () => {

    const logSign = () => {
        seTtoggle(true)

    }

    const [toggle, seTtoggle] = useState(false)

    const signlog = () => {
        seTtoggle(false)
    }

    return (

        <div className="component">
            <div className="form-head">
                <div className="btn">
                    <button onClick={signlog} type="button" className="toggle-btn" ><strong>LOGIN</strong></button>
                    <button onClick={logSign} type="button" className="toggle-btn" id="sign" ><strong>SIGNUP</strong></button>
                </div>
                <div>
                    {
                        toggle ? <Signup /> : <Login />

                    }
                </div>
            </div>
            <div className="containter">
                <div className="header">
                    <div className="img-box">
                        <img className="img1" src={logo} alt="" />
                        <span className="text-online"><strong>ONLINE BOOK SHOPPING</strong></span>
                    </div>
                </div>
            </div >




        </div>


    )
}

export default Lander











