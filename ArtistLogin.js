import React from 'react'
import { Typography, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TableRow, TableCell, Table,Button,Box } from '@mui/material'
import {useState,useEffect} from 'react'


function ArtistLogin() {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [data,setData]=useState(null)
    
      useEffect(()=>{
          fetch("http://localhost:4000/artistLogin",
          {
              method:'GET'
          }).then((response)=>response.json())
          .then((actualData)=>{
              console.log(actualData)
              setData(actualData)
              console.log("Data:",data);
          })
          .catch((err)=>console.log(err))
      },[])

  return (
    <div class="card">
      
      <h1><b>ARTIST LOGIN</b></h1>
             <Box sx={{ width:'500px',marginTop:'50px',marginLeft:'400px',marginRight:'200px',border:'5px solid grey',backgroundColor:'lightgrey'}}>
            <Table >
                
            <br/><br/>
                <TableRow>
                <TableCell><Typography variant="h6" >Email ID :</Typography></TableCell>
                <TableCell> <TextField id="outlined-basic" label="Enter Email ID" variant="outlined"></TextField></TableCell>
                <br />  <br />
                </TableRow>

                <TableRow>
                <TableCell> <Typography variant="h6" >Password :</Typography></TableCell>
                <TableCell><TextField id="outlined-basic" label="Enter Password" variant="outlined"></TextField></TableCell>
               </TableRow>
               <br />  

               {
      data && data.map(
          (obj)=>{
             return  <TableRow>
                  <TableCell>{obj.email}</TableCell>
                  <TableCell>{obj.password}</TableCell>
                 
              </TableRow>
          }
      )
      }


             
                
            
            </Table>
            <Button variant="contained" >LOGIN</Button>
            <br />  <br /> 

            </Box>

    </div>
  )
}

export default ArtistLogin
