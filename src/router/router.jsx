import React, { useState } from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Cart from "../pages/cart/cart";
import CustomerDetails from "../pages/customerdetails/customerdetails";
import Dashboard from "../pages/dashboard/dashboard";
import Lander from "../pages/lander/lander";
import Wishlist from "../pages/mywishlist/wishlist";
import Order from "../pages/orderplaced/order";
import OrderSummery from "../pages/ordersummery/ordersummery";

const BookRouter = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Lander/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/order" element={<Order/>}/>
                    <Route path="/customer" element={<CustomerDetails/>}/>
                    <Route path="/ordersummery" element={<OrderSummery/>}/>
                    <Route path="/wishlist" element={<Wishlist/>}/>

                    

                    


                </Routes>
            </Router>
        </div>

    )

}

export default BookRouter