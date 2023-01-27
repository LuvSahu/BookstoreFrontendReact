 import axios from "axios";

 export const LoginApi = (data) => {
   //  console.log("before")
    let response = axios.post('https://localhost:44362/api/User/Login',data)
   //  console.log("after")
    return response;
 }

 export const SignupApi = (data) =>  {
    let respone = axios.post('https://localhost:44362/api/User/Register',data)
    return respone;
 }