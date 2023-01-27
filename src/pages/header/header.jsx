import React from "react";
import './header.css'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { SvgIcon } from "@mui/material";
// import { SvgIcon } from "@material-ui/core";


const Header = () => {
    return (

        <div className="head">
            <div className="book">
                <img className="imgmargin" src="images/book.png" alt="" height="23px" width="31px" />
                <span className="store">Book Store</span>
            </div>

            <div className="searchbody">
                <img src="images/search.png" id="searchimg" height="25px" width="25px" />
                <input type="search" className="searchboxx" placeholder="Search..." />
            </div>


            <div className="icons">
                <div className="user">
                    <div className="btn12">
                        <PersonIcon/>
                    </div>
                    {/* <img className="btn1" src="images/user.png" alt="" /> */}
                    <span className="profile">Profile</span>
                </div>

                <div className="cart">
                    <div className="btn12">
                        <ShoppingCartIcon/>
                    </div>
                    {/* <img className="btn1" src="images/cart.png" alt="" /> */}
                    <span className="carts">Cart</span>
                </div>

            </div>

        </div>

    )
}

export default Header