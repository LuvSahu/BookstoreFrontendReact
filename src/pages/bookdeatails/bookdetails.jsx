import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';

import './bookdetails.css'
import { addtocart, addtowishlist, getcart, updatetocart } from "../../services/bookservice";
import AdjustRoundedIcon from '@mui/icons-material/AdjustRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const BookDetails = (props) => {

    const [clickcart, setClickCart] = useState(false)
    const [bookobj, setbookObj] = useState([])


    const counter = () => {
        // setClickCart(true)
    }

    const [clickwishlist, setClickWishlist] = useState(false)

    const counter1 = () => {
        // setClickWishlist(true)

    }

    const addcart = () => {
        setClickCart(true)
       

        let id = {
            bookID: props.bookdetails.bookId
        }
        console.log(id)

        addtocart(id)
            .then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })


    }


    const addwishlist = () => {
        setClickWishlist(true)

        let wishid = {
            bookID: props.bookdetails.bookId
        }

        addtowishlist(wishid)
            .then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })


    }

    // const [updatecartobj,  setupdateCartobj] = useState({quantity:{count}})
    // const updatecart = () => {
    //     console.log(updatecartobj)

    //     const newquantity = () => {
    //         // setupdateCartobj(prevCount => prevCount + 1)
    // }


    //     updatetocart(updatecartobj)
    //     .then((response) => {
    //         console.log(response)
    //     }).catch((error) => {
    //         console.log(error)
    //     })

    // }

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

    const [count , setCount] = useState(1)


    const increment = () => {
            setCount(prevCount => prevCount + 1)
            console.log(bookobj.bookName)
            let qntyobj = {
                BookQuantity : count,
                bookId: props.bookdetails.bookId,
                // bookId : bookobj.bookId,
                cartId: bookobj.cartId
                // cartId : props.bookdetails.bookId
                
                
            }
            console.log(qntyobj)

        updatetocart(qntyobj)
        .then((response) => {
           console.log(response)
       }).catch((error) => {
           console.log(error)
       })
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1)

        let qntyobjone = {
            BookQuantity : count,
            bookId: props.bookdetails.bookId

        }
        console.log(qntyobjone)

    updatetocart(qntyobjone)
    .then((response) => {
       console.log(response)
   }).catch((error) => {
       console.log(error)
   })

   
    }

    return (
        <div className="container1">
            <div className="smallbook">
                <img className="selectimgs" src="images/image 11.png" alt="" />
            </div>
            <div className="smallbook1">
                <img className="selectimgs1" src="images/image 14.png" alt="" />
            </div>
            <div className="bookone">
                <img className="imgs" src="images/image 11.png" alt="" />
            </div>
            <div className="btns">
                {
                    clickcart ?

                        <div className="row51">
                            <span className="icon11"><RemoveCircleOutlineIcon onClick={decrement} /></span>
                            <div className="numbers1">{count}</div>
                            <span className="icon24"><AddCircleOutlineRoundedIcon onClick={increment} /></span>
                        </div>

                        :

                        <div>
                            <Button variant="contained" id="tag-btn" onClick={addcart} >ADD TO CART</Button>
                        </div>
                }

                {
                    clickwishlist ?

                        <div>
                            <Button variant="contained" id="wish-btn">ADDED WISH</Button>
                        </div>

                        :

                        <div>
                            <Button variant="contained" id="wish-btn" onClick={addwishlist}>❤  WISHLIST</Button>
                        </div>
                }


            </div>
            <div className="details">
                <div className="Textone">
                    <h1 className="bookNameone">{props.bookdetails.bookName}</h1>
                    <p className="authorone">{props.bookdetails.author}</p>
                    <div className="ratings">
                        <button className="ratingone">{props.bookdetails.totalRating}  ✩</button>
                        <p className="totalratings">(20)</p>
                    </div>
                    <h3 className="priceone">Rs. {props.bookdetails.price}</h3>
                    {/* <h6>RS 2000</h6> */}
                </div>

                <div className="description">
                    <hr id="line1" />
                    {/* <p className="lineone">------------------------------------------------------------------------------------------------------</p> */}
                    <p className="bookDetails">*Book Deatil </p>
                    <p className="paragraph"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum laboriosam, animi in... Nesciunt rerum ipsum?
                        Fuga unde quibusdam iste porro, architecto, sit velit earum odit..... Nostrum suscipit labore quam?Lorem ipsum dolor
                        sit amet consectetur adipisicing elit.......  Quisquam earumearum itaque repellendus earum! nissimos ut.itaque repellendus earum...
                    </p>
                    <hr id="line2" />
                    {/* <p className="linetwo">-------------------------------------------------------------------------------------------------------</p> */}
                </div>

                <div className="feedback">
                    <h3 className="cF">Customer Feedback</h3>
                    <div className="ratingfeed">
                        <p className="oR">Overall rating</p>
                        <p className="star">✩ ✩ ✩ ✩ ✩</p>
                        <div className="searchbody1">
                            <input type="search" className="searchboxx1" placeholder="Write your review" />
                        </div>
                        <button className="submitbtn">Submit</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default BookDetails