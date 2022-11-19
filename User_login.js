import React from 'react'
import { Typography, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TableRow, TableCell, Table,Button,Box } from '@mui/material'

function User_login() {
  return (
    <div class="card">
      <br/>
      <h1><b>USER LOGIN</b></h1>
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
             
                
            
            </Table>
            <Button variant="contained" >LOGIN</Button>
            <br />  <br /> 

            </Box>

    </div>
  )
}

export default User_login
