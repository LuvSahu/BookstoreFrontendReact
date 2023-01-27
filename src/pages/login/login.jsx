import React from "react";
import logo from '../../assests/Onlineshopping.png'
import './login.css'
// import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import { LoginApi } from "../../services/userservice";
import Signup from "../signup/signup";
import TextField from '@material-ui/core/TextField';


const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


const Login = () => {


    const [loginobj, setLoginobj] = useState({ email: "", password: "" })      //Use States
    const [regexobj, setRegexobj] = useState({ emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: "" })
    const Email = (event) => {
        // setloginobj({ Email: event.target.value })
        setLoginobj((prevState) => ({ ...prevState, email: event.target.value }))
        // console.log(event.target.value)
    }

    const Password = (event) => {
        setLoginobj((prevState) => ({ ...prevState, password: event.target.value }))

    }

    const logIn = () => {
        console.log(loginobj)
        let emailTest = emailRegex.test(loginobj.email)
        let passwordTest = passwordRegex.test(loginobj.password)
        if (emailTest === true) {
            setRegexobj((prevState) => ({ ...prevState, emailBorder: false, emailHelper: "" }))
        }
        else if (emailTest === false) {
            setRegexobj((prevState) => ({ ...prevState, emailBorder: true, emailHelper: "Enter Email" }))
        }

        if (passwordTest === true) {
            setRegexobj((prevState) => ({ ...prevState, passwordBorder: false, passwordHelper: "" }))
        }
        else if (passwordTest === false) {
            setRegexobj((prevState) => ({ ...prevState, passwordBorder: true, passwordHelper: "Enter Password" }))
        }

        if(emailTest === true && passwordTest === true){
            LoginApi(loginobj)
            .then((respone)=>{
                console.log(respone)
                localStorage.setItem('token',respone.data.data)
            })
            .catch((error)=>{
                console.log(error)
            })
                
            

            
        }
    }
    return (


        <div className="form-head1">

            <form id="login" className="input-group">
                
                    <TextField onChange={Email} error={regexobj.emailBorder} helperText={regexobj.emailHelper} id="outlined-basic" className="input-field" label="Email" variant="outlined" size="small" color="error" />
                    <TextField onChange={Password} error={regexobj.passwordBorder} helperText={regexobj.passwordHelper} id="outlined-basic" className="input-field1" label="Password" variant="outlined" size="small" color="error" />
                    <Button onClick={logIn} variant="contained" id="submit-btn">Log In</Button>
                    <h2><strong>OR</strong></h2>
                    <div className="choose-btn">
                        <div>
                            <button type="submit" className="facebook-btn" >Facebook</button>
                        </div>
                        <div>
                            <button type="submit" className="google" >Google</button>
                        </div>
                    </div>
            </form>


        </div>

    )
}

export default Login