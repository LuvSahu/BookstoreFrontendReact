import React, { useEffect, useState } from "react";
import './ordersummery.css'
import Button from '@mui/material/Button';
import { addorder, getaddress, getcart, getorder } from "../../services/bookservice";
import { useNavigate } from 'react-router-dom';




const OrderSummery = () => {

    const [order, setorder] = useState([])
    const [address, setAddress] = useState([])
    const navigate = useNavigate();



    useEffect(() => {
        getcart().then((response) => {
            console.log(response)
            setorder(response.data.data)
        }).catch((response) => {
            console.log(response)
        })
    }, [])

    useEffect(() => {
        getaddress().then((response) => {
            console.log(response)
            setAddress(response.data.data)
        }).catch((response) => {
            console.log(response)
        })
    }, [])


    const checkoutbtn = () => {
        // getcart().then((response) => {
        //     console.log(response)
        //     localStorage.setItem("cartid",Number(response.data.data[0].cartId))
        //     const cartid=localStorage.getItem("cartid")
        let orderobj = {
            userId: order.userId,
            bookId: order.bookId,
            quantity: order.quantity,
            addressId: address.addressId
        }

        console.log(orderobj)
        addorder(orderobj).then((response) => {
            console.log(order)
            console.log(response)
        }).catch((response) => {
            console.log(response)
        })
        // }).catch((response) => {
        //     console.log(response)
        // })
        // navigate('/order')

    }
    return (
        <div className="orderContainer">
            <div className="itemone">
                Order Summery
            </div>

            <div className="rowtwo">
                {

                    order.map(bookorder => (

                        <div style={{ width: '30vw', height: '20vh', rowGap: '10%', position: 'relative', display: 'flex' }}>


                            <div className="Imgi1">
                                <img src="/images/image 11.png" width="70px" />
                            </div>
                            <div className="item21">

                                <div className="bookrow1">
                                    <b>
                                        {bookorder.bookName}

                                    </b>
                                </div>
                                <div className="row31">
                                    <b>
                                        {bookorder.author}
                                    </b>
                                </div>
                                <div className="row41">
                                    Rs.{bookorder.price}
                                    <span className="bookcost1">Rs 2000</span>

                                </div>
                            </div>

                        </div>
                    ))
                }


            </div>

            <div className="row12">
                <Button id="btn-13" variant="contained" onClick={checkoutbtn} >CHECKOUT</Button>
            </div>

        </div>

    )
}

export default OrderSummery