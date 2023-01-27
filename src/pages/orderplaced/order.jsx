import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { getorder } from '../../services/bookservice';
import Header from "../header/header";
import { makeStyles } from '@mui/styles';


const useStyle = makeStyles({
  container:{
    display:'flex',
    flexDirection:'column',
    marginLeft:'40vw',
    marginTop:'20vh',
    width:'20vw',
    border:''
  },
  item1:{
    display:'flex',
    flexDirection:'row',
    width:'17vw',
    backgroundColor:'',
    marginLeft:'15px'
  },
  item2:{
    display:'flex',
    flexDirection:'column'
  },
  Container2:{
    display:'flex',
    flexDirection:'column',
    border:'1px solid black',
    width:'40vw',
    marginLeft:'30vw',
    backgroundColor:'#DCDCDC'
    
  },
  item3:{
    display:'flex',
    flexDirection:'row',
    marginLeft:'60px',
    marginRight:'40px'
  },
  item4:{
    display:'flex',
    flexDirection:'row',
    marginLeft:'80px',
    marginRight:'40px'
  },
  item5:{
    display:'flex',
    flexDirection:'row',
    marginLeft:'60px',
  },
  row1:{
    display:'flex',
    flexDirection:'row',
    marginTop:'20px',
    marginBottom:'10px',
    backgroundColor:'#DCDCDC'
  },
  row2:{
    display:'flex',
    flexDirection:'row',
    borderTop:'1px solid',
    height:'10vh'
  },
  item6:{
    display:'flex',
    flexDirection:'column',
    borderRight:'1px solid',
    borderBottom:'none',
    marginLeft:'0px',
    width:'14vw',
    height:'10vh',
    backgroundColor:'white'
  }
})

const Order = ()  => {
  const  classes = useStyle() 
  const [orderobj, setorderobj] = useState({ orderId:Number(0) })
  const navigate = useNavigate();

  const todashboard =() => {
    navigate('/dashboard')
  }

    useEffect(() => {
      getorder().then((response) => {
        console.log(response)
        const orderid=response.data.data[0].orderId
        console.log(orderid)
        setorderobj({
          orderId:response.data.data[0].orderId
        })
      }).catch((response) => {
        console.log(response)
      })     
    },[])
  return (
    <div>
    <Header/>
    <div className={classes.container}>
      <div className={classes.item1}>
        <h3>Order Placed Successfully</h3>
        </div>
      <br></br>
      <br></br>
      <div className={classes.item2}>
      Hurray!! Your order is confirmed <br></br>the order Id is {orderobj.orderId} save the order id for <br></br>further communication
      </div>
    </div>
    <br></br>
    <div className={classes.Container2}>
      <div className={classes.row1}>
        <div className={classes.item3}>
              Email us
        </div>
        <div className={classes.item4}>
              Contact us
        </div>
        <div className={classes.item5}>
              Address
        </div>
        </div>

        <div className={classes.row2}>
            <div className={classes.item6}>
              roy@gmail.com
            </div>
            <div className={classes.item6}>
              9874561230
            </div>
            <div className={classes.item6}>
              25-a,Bhagat Singh,Alwar
            </div>
        </div>
        
    </div>
    <br></br>
    <Button variant="contained" onClick={todashboard}>Continue Shopping</Button> 
    </div>
    
    
  )
}

export default Order