import React, { useState } from "react";
import BookDetails from "../bookdeatails/bookdetails";
import './books.css'

const Books = (props) => {

    // const allbook = () => {
    //          props.bookdetail()
    //          localStorage.setItem("bookid",props.book.bookID)
    // }
    return (
        <div className="bookcontainer">
        
        <div className="book1" >
            <img src="images/image 11.png" alt="" />
            <div className="Text">
                <h4 className="bookName"> {props.book.bookName}</h4>
                <p className="author">{props.book.author}</p>
                <p className="rating">{props.book.totalRating} ✩</p>
                <p className="price">RS. {props.book.price}</p>
            </div>

        </div>
        </div>
    )
}



export default Books