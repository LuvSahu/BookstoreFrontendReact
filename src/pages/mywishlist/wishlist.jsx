import React, { useEffect } from 'react'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { getwishlist } from '../../services/bookservice';
import BookDetails from '../bookdeatails/bookdetails';
import Header from "../header/header";


const useStyle = makeStyles({
    container: {
        display:'flex',
        flexDirection:'column', 
        width: '80vw',
        marginTop:'10px',
        border: '',
        position: 'relative',
        left: '150px',
        
    },
    header2: {
        width: '90%',
        height: '5vh',
        marginLeft:'20px',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor:'',
        
    },
    container2: {
        display:'flex',
        flexDirection:'column', 
        width: '80vw',
        height:'10vh',
        marginTop:'0px',
        border: '1px solid black',
        position: 'relative',
        left: '150px',
        backgroundColor:'#F5F5F5',
        alignItems:'flex-start'
        
    },row2:{
        display:'flex',
        flexDirection:'row',
        marginLeft:'40px',
        marginTop:'20px',
        border:''
    },
    item2:{
        display:'flex',
        flexDirection:'column',
        marginLeft:'30px',
        border:' '
    },
    row3:{
        marginTop:'10px',
        display:'flex',
        alignItems:'flex-start'
    },
})

export default function Wishlist() {
    const  classes = useStyle()
    const [wishlist,setwishlist] = useState([])

    useEffect(() => {
        getwishlist().then((response) => {
            console.log(response)
            setwishlist(response.data.data)
        }).catch((response) => {
            console.log(response)
        })
    },[])

  return (
    <>
    <Header/>
    <Box className={classes.container}>
        <Box className={classes.header2}>
            Home/My profile
        </Box>
        <br></br>
    </Box>
    <Box className={classes.container2}>
        <Box className={classes.header2}>
            <h3>My Wishlist</h3>
        </Box>
    </Box>
        <div>
                    {
                        wishlist.map((bookwish) => <BookDetails bookwish={bookwish} />)
                    }
                    
        </div>
    
    </>
    
  )
}
