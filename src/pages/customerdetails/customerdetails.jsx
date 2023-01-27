import React, { useState } from "react"
import './customerdetails.css'
import OrderSummery from "../ordersummery/ordersummery";
import Cart from "../cart/cart";
import { addaddress } from "../../services/bookservice";
// import TextField from '@material-ui/core/TextField';
import { Button, Radio, FormControl, FormLabel,RadioGroup,FormControlLabel } from "@material-ui/core";
import { TextField } from "@mui/material";


const cityRegex = /^[A-Z]{1}[a-z]{2,}$/;
const stateRegex = /^[A-Z]{1}[a-z]{2,}$/;
// const addressRegex = /^[A-Z]{1}[a-z]{2,}" "[A-Z]{1}[a-z]{2,}" "[A-Z]{1}[a-z]{2,}$/;
const CustomerDetails = () => {

    const [newopen, newsetOPen] = useState(false);
    const [errorobj, setErrorobj] = useState({cityBorder:false,cityHelper:"",stateBorder:false,stateHelper:""})

    const newcontinue = () => {
        // newsetOPen(true)
    }

    const [addressobj, setAddressobj] = useState({addressType:Number(1), fullAddress:"", city: "", state: "" })      //Use States

    const FullAddress = (event) => {
        setAddressobj((prevState) => ({ ...prevState, fullAddress: event.target.value }))

    }
    const City = (event) => {
        setAddressobj((prevState) => ({ ...prevState, city: event.target.value }))
    }

    const State = (event) => {
        setAddressobj((prevState) => ({ ...prevState, state: event.target.value }))

    }

    const Type = (event) => {
        setAddressobj((prevState) => ({ ...prevState, addressType: +event.target.value }))

    }

    const Fulladdress = () => {
        // console.log(addressobj)
        // let fulladdressTest = addressRegex.test(addressobj.fullAddress)
        let cityTest = cityRegex.test(addressobj.city)
        let stateTest = stateRegex.test(addressobj.state)

        // if (fulladdressTest === true) {
        //     setErrorobj((prevState) => ({ ...prevState, addressBorder: false, addressHelper: "" }))
        // }
        // else if (fulladdressTest === false) {
        //     setErrorobj((prevState) => ({ ...prevState, addressBorder: true, addressHelper: "Enter FullAddress" }))
        // }

        if (cityTest === true) {
            setErrorobj((prevState) => ({ ...prevState, cityBorder: false, cityHelper: "" }))
        }
        else if (cityTest === false) {
            setErrorobj((prevState) => ({ ...prevState, cityBorder: true, cityHelper: "Enter City"}))
       }

        if (stateTest === true) {
            setErrorobj((prevState) => ({ ...prevState, stateBorder: false, stateHelper: "" }))
        }
        else if (stateTest === false) {
            setErrorobj((prevState) => ({ ...prevState, stateBorder: true, stateHelper: "Enter State" }))
        }

        console.log(addressobj)

        if(cityTest === true && stateTest === true){
        newsetOPen(true)
        addaddress(addressobj)
        .then((response)=>{
           console.log(response)
        })

        .catch((error)=>{
            console.log(error)
         })
        }
    }


    return (
        <div className="Maincontainer">
            <div className="item15">
                Customer Details
                <Button variant="outlined" className="address">Add New address</Button>
            </div>

            {/* <div className="item4">

                <span className="rowfive">Full Name</span>
                <span className="rowsix">Mobile Number</span>
            </div> */}
            <div className="rowseven">
                <span className="row7">
                    <TextField  id="outlined-basic" label="Full Name" variant="outlined" size="small" />
                </span>
                <span className="row8">
                    <TextField id="outlined-basic" label="Mobile Number" variant="outlined" size="small" />
                </span>

            </div>

            {/* <div className="rowaddress">Address
            </div> */}
            <div className="row9">
                <TextField onChange={FullAddress} fullWidth label="Address" id="fullWidth" sx={{
                    width: 200,
                    maxWidth: '100%',
                }}
                />
                {/* <textarea rows='4' cols='72' value="" type="text" placeholder=" "></textarea> */}
            </div>

            <div className="row71">
                <span className="row81">
                    <TextField error={errorobj.cityBorder} helperText={errorobj.cityHelper} onChange={City} id="outlined-basic" label="City/Town" variant="outlined" size="small" />
                </span>
                <span className="row81">
                    <TextField error={errorobj.stateBorder} helperText={errorobj.stateHelper} onChange={State} id="outlined-basic" label="State" variant="outlined" size="small" />
                </span>

            </div>

            {/* <div className="rowten">Type</div>
            <div className="row10">
                <ul><FormControlLabel value="1" control={<Radio />} label="Home" /></ul>
                <ul><FormControlLabel value="2" control={<Radio />} label="Work" /></ul>
                <ul><FormControlLabel value="3" control={<Radio />} label="Other" /></ul>
            </div> */}

            <FormControl className="rowten">
                <FormLabel id="demo-radio-buttons-group-label" >Type:</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    name="radio-buttons-group"
                    id="row10"
                >
                    <FormControlLabel onChange={Type} value="3" control={<Radio />} label="Home" />
                    <FormControlLabel onChange={Type} value="2" control={<Radio />} label="Work" />
                    <FormControlLabel onChange={Type} value="1" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
            {/* <div className="row9">
                <textarea rows='4' cols='61' value="" ></textarea>
            </div> */}

            <div className="row11">
                {
                    newopen ? <OrderSummery /> : <Button id="btn-11" variant="contained" onClick={Fulladdress} >CONTINUE</Button>

                }
            </div>
        </div>
    )
}

export default CustomerDetails