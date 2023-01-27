import React from "react";
import logo from '../../assests/Onlineshopping.png'
// import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './signup.css'
import { useState } from "react";
import { SignupApi } from "../../services/userservice";
import TextField from '@material-ui/core/TextField';



// const Signu = (props) => {
//     const openLogin = () => {
//         props.logSign()
//     }
const nameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const mobileRegex = /^[6-9]{1}[0-9]{9}$/;


const Signup = () => {


    const [signupobj, setSignupobj] = useState({fullName:"", email: "", password: "",mobileNumber:"" })      //Use States
    const [regexobj, setRegexobj] = useState({ fullnameBorder:false, fullnameHelper:"", emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: "",mobileNumberBorder:false,mobileNumberHelper:"" })
    const FullName = (event) => {
        setSignupobj((prevState) => ({ ...prevState, fullName: event.target.value }))

    }
    const Email = (event) => {
        // setloginobj({ email: event.target.value })
        setSignupobj((prevState) => ({ ...prevState, email: event.target.value }))
        // console.log(event.target.value)
    }

    const Password = (event) => {
        setSignupobj((prevState) => ({ ...prevState, password: event.target.value }))

    }

    const Mobile = (event) => {
        setSignupobj((prevState) => ({ ...prevState, mobileNumber: event.target.value }))

    }

    const signUp = () => {
        console.log(signupobj)
        let fullnameTest = nameRegex.test(signupobj.fullName)
        let emailTest = emailRegex.test(signupobj.email)
        let passwordTest = passwordRegex.test(signupobj.password)
        let mobileTest = mobileRegex.test(signupobj.mobileNumber)

        if (fullnameTest === true) {
            setRegexobj((prevState) => ({ ...prevState, fullnameBorder: false, fullnameHelper: "" }))
        }
        else if (fullnameTest === false) {
            setRegexobj((prevState) => ({ ...prevState, fullnameBorder: true, fullnameHelper: "Enter FullName" }))
        }

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

        if (mobileTest === true) {
            setRegexobj((prevState) => ({ ...prevState, mobileNumberBorder: false, mobileNumberHelper: "" }))
        }
        else if (mobileTest === false) {
            setRegexobj((prevState) => ({ ...prevState, mobileNumberBorder: true, mobileNumberHelper: "Enter Mobile No" }))
        }

        if(fullnameTest === true && emailTest === true && passwordTest === true && mobileTest === true){
            SignupApi(signupobj)
            .then((response)=>{
               console.log(response)
            })

            .catch((error)=>{
                console.log(error)
             })
        }
        console.log(passwordTest)

    }

    return (

        <div className="form-head1">

            <form id="signup" className="input-group1">
                    <TextField onChange={FullName} error={regexobj.fullnameBorder} helperText={regexobj.fullnameHelper}id="outlined-basic" className="input-field" label="FullName" variant="outlined" size="small" color="error" />
                    <TextField onChange={Email} error={regexobj.emailBorder} helperText={regexobj.emailHelper} id="outlined-basic1" className="input-field" label="Email" variant="outlined" size="small" color="error" />
                    <TextField onChange={Password} error={regexobj.passwordBorder} helperText={regexobj.passwordHelper} id="outlined-basic2" className="input-field" label="Password" variant="outlined" size="small" color="error" />
                    <TextField onChange={Mobile} error={regexobj.mobileNumberBorder} helperText={regexobj.mobileNumberHelper}id="outlined-basic3" className="input-field" label="Mobile No" variant="outlined" size="small" color="error" />

                    <Button onClick={signUp} variant="contained" id="submit-btn" color="error">Sign Up</Button>
            </form>


        </div>
    )
}

export default Signup