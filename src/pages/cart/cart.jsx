import React, { useEffect, useState } from "react"
import AdjustRoundedIcon from '@mui/icons-material/AdjustRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import Button from '@mui/material/Button';
import './cart.css'
import Header from "../header/header";
import PinDropRoundedIcon from '@mui/icons-material/PinDropRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import CustomerDetails from "../customerdetails/customerdetails";
import { getcart } from "../../services/bookservice";


const Cart = (props) => {

    const [bookobj, setbookObj] = useState([])

   

    useEffect(() => {
        getcart()
            .then((response) => {
                console.log(response)
                setbookObj(response.data.data)
                localStorage.setItem("cartid",Number(response.data.data[0].cartId))
                const cartid=localStorage.getItem("cartid")
                console.log(cartid)
            

            })
            .catch((error) => {
                console.log(error)
            })


    }, [])

    console.log(bookobj)


    const [open, setOPen] = useState(false);

    const placeorder = () => {
        setOPen(true)
    }


    return (
        <div>
            <Header />


            <div className="Containercart">
                <div className="row1">
                    My cart (1)
                </div>
                <div className="item9">
                    <div className="location">
                        <PinDropRoundedIcon className="drop" /> MKS Atotech LLP..  <ArrowDropDownRoundedIcon className="arrow" />
                    </div>
                </div>
                <div className="row2" >
                    {
                        bookobj.map(bookcart => (

                            <div style={{width:'20vw', height:'20vh', rowGap : '10%', position: 'relative', display:'flex'}} >


                                <div className="Imgi">
                                    <img src="/images/image 11.png" width="70px" />
                                </div>
                                <div className="item00">

                                    <div className="bookrow">
                                        <b>
                                            {bookcart.bookName}

                                        </b>
                                    </div>
                                    <div className="row3">
                                        <b>
                                        {bookcart.author}
                                        </b>
                                    </div>
                                    <div className="row4">
                                        Rs.{bookcart.price}
                                        <span className="bookcost">Rs {bookcart.discountPrice}</span>

                                    </div>
                                </div>


                                <div className="row5">
                                    <span className="icon1"><AdjustRoundedIcon /></span>
                                    <div className="numbers">1</div>
                                    <span className="icon2"><AddCircleOutlineRoundedIcon /></span>
                                    <button className="remove">Remove</button>

                                </div>

                            </div>


                        ))
                    }

                </div>
                <div className="row6">
                    {
                        open ? <CustomerDetails /> :

                            <div>
                                <Button id="btn-1" variant="contained" onClick={placeorder} >Place Order</Button>

                                <div className="item5" style={{ width: '60vw', height: '10vh', left: '-457%', position: 'absolute', top: '192%', border: '1px solid rgb(230, 221, 221)' }}>
                                    <div className="ad" style={{ left: '3%', position: 'absolute', top: '27%' }} >
                                        Address Details </div>
                                </div>

                                <div className="item6" style={{ width: '60vw', height: '10vh', left: '-457%', position: 'absolute', top: '420%', border: '1px solid rgb(230, 221, 221)' }}>
                                    <div className="os" style={{ left: '3%', position: 'absolute', top: '27%' }}>
                                        Order summery</div>
                                </div>


                            </div>

                    }
                </div>

            </div>



        </div>


    )
}

export default Cart