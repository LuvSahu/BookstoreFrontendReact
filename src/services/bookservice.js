import axios from "axios";

const header = {
    headers : {
        Authorization : `Bearer ${localStorage.getItem('token')}`
    }
}

export const GetAllBooks = () =>  {
    let respone = axios.get('https://localhost:44362/api/Book/GetAllBooks',header)
    return respone;
 }

 export const addtocart = (data) => {
    let response = axios.post("https://localhost:44362/api/Cart/AddBookTOCart",data,header);
    return response;
}

export const addtowishlist = (data) => {
    let response = axios.post("https://localhost:44362/api/WishList/AddTOWishList",data,header);
    return response;
}

export const getcart = () => {
    let response = axios.get("https://localhost:44362/api/Cart/GetAllBooksInCart",header);
    return response;
}

export const getwishlist = () => {
    let response = axios.get("https://localhost:44362/api/WishList/GetAllWishList",header);
    return response;
}

export const getorder = () => {
    let response = axios.get("https://localhost:44362/api/Order/GetAllOrders",header);
    return response;
}

export const updatetocart = (data) => {
    let response = axios.put("https://localhost:44362/api/Cart/UpdateCartItem",data,header);
    return response;
}

export const addaddress = (data) =>  {
    let respone = axios.post('https://localhost:44362/api/Address/AddAddress',data,header)
    return respone;
 }


 export const addorder = (data) =>  {
    let respone = axios.post('https://localhost:44362/api/Order/AddOrder',data,header)
    return respone;
 }

 export const getaddress = () => {
    let response = axios.get("https://localhost:44362/api/Address/GetAllAddress",header);
    return response;
}

 