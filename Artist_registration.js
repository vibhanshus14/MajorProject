//     import React, { useState } from 'react'
//     import { Typography, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TableRow, TableCell, Table, Button, Box } from '@mui/material'


//     export default function Artist_registration() {


//         const [artistName, setArtistName] = useState("");
//         const [artForm, setArtForm] = useState("");
//         const [gender, setGender] = useState("");
//         const [mobileNumber, setMobileNumber] = useState("");
//         const [email, setEmail] = useState("");
//         const [password, setPassword] = useState("");
//         const [confirmPassword, setConfirmPassword] = useState("");


// //     //already coomented
// //     // const getArtist = async(event) => {
// //     //     event.preventDefault();
// //     //     const data = new FormData(event.currentTarget);
// //     //     var Email = data.get('email');
// //     //     var Password = data.get('password');
// //     //     var ArtistName = data.get('artistName').trim();
// //     //     var Gender = data.get('gender'); 
// //     //     var MobileNumber = data.get('mobileNumber'); 
// //     //     var ArtForm = data.get('artForm').trim();
// //     //     var ConfirmPassword = data.get('confirmPassword');

// //     //     var valid = true;
// //     //     const nameReg = /^[a-zA-Z]{2,}/ ;
// //     //     if(!nameReg.test( ArtistName)){
// //     //         alert("Enter Valid First Name");
// //     //     }
      
// //     //     if(!nameReg.test(ArtForm)){
// //     //         alert("Enter Valid Last Name");
// //     //     }
   
       
       
// //     //    const regex =/^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,4}$/;
// //     //    if (!regex.test(Email)) {
// //     //     alert("Invalid Email");
// //     //     valid=false;
// //     //    }
// //     //    const passwordRegEx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// //     //    if(!passwordRegEx.test(Password)){
// //     //      alert("Weak Password");
// //     //      valid = false;
// //     //    }
   
// //     //    if(Password!=ConfirmPassword){
// //     //        alert("Confirm Password Not Matched")
// //     //        valid = false;
// //     //    }
// //    //till here
        
    

//     const getArtist = async (event) => {

//         event.preventDefault();
//         const data = new FormData(event.currentTarget);
//         var artistName = data.get('artistName');
        
//         // var valid = true;
//         const nameReg = /^[a-zA-Z]{2,}/ ;
//         if(!nameReg.test(artistName)){
//             console.log("error");
//             alert("Enter Valid First Name");
//         }
      
   
//         let result = await fetch("http://localhost:4000/artistRegister",
//             {
//                 method: 'POST',
//                 body: JSON.stringify({ artistName, artForm, gender, mobileNumber, email, password, confirmPassword }),
//                 headers: { 'Content-type': 'application/json' }
//             })

//         result = await result.json()
//  }
       



//     return (
//         <div class="card">
//             <h1><b>ARTIST REGISTRATION</b></h1>
//             <Box sx={{ width: '500px', marginTop: '50px', marginLeft: '400px', marginRight: '200px', border: '5px solid grey', backgroundColor: 'lightgrey' }}>
//                 <Table >
//                     <TableRow>
//                         <TableCell><Typography variant="h6" >Artist Name:</Typography></TableCell>
//                         <TableCell><TextField label="Enter Your Name" variant="outlined"
//                             name='artistName'
//                             value={artistName}
//                             required onChange={(e) => setArtistName(e.target.value)}></TextField></TableCell>
//                         <br />  <br />
//                     </TableRow>

//                     <TableRow>

//                         <TableCell><Typography variant="h6" >Art Form:</Typography> </TableCell>
//                         <TableCell><TextField id="outlined-basic" label="Enter Art Form" variant="outlined"
//                             name='artForm'
//                             value={artForm}
//                             onChange={(e) => setArtForm(e.target.value)}></TextField> </TableCell>
//                     </TableRow>
//                     <br />  <br />
//                     <TableRow>

//                         <TableCell> <Typography variant="h6" >Gender :</Typography></TableCell>
//                         <TableCell>
//                             <FormControl>



//                                 <RadioGroup
//                                     aria-labelledby="demo-radio-buttons-group-label"
//                                     defaultValue="female"
//                                     // name="radio-buttons-group"
//                                     name='gender'
//                                     value={gender}
//                                     onChange={(e) => setGender(e.target.value)}
//                                 >
//                                     <FormControlLabel value="female" control={<Radio />} label="Female" />
//                                     <FormControlLabel value="male" control={<Radio />} label="Male" />
//                                     <FormControlLabel value="other" control={<Radio />} label="Other" />
//                                 </RadioGroup>

//                             </FormControl>
//                         </TableCell>
//                     </TableRow>

//                     <TableRow>
//                         <TableCell> <Typography variant="h6" >Mobile Number:</Typography></TableCell>
//                         <TableCell> <TextField id="outlined-basic" label="Enter Mobile Number" variant="outlined"
//                             name='mobileNumber'
//                             value={mobileNumber}
//                             onChange={(e) => setMobileNumber(e.target.value)}></TextField></TableCell>
//                         <br />  <br />
//                     </TableRow>

//                     <TableRow>
//                         <TableCell><Typography variant="h6" >Email ID :</Typography></TableCell>
//                         <TableCell> <TextField id="outlined-basic" label="Enter Email ID" variant="outlined"
//                             name='email'
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}></TextField></TableCell>
//                         <br />  <br />
//                     </TableRow>

//                     <TableRow>
//                         <TableCell> <Typography variant="h6" >Password :</Typography></TableCell>
//                         <TableCell><TextField id="outlined-basic" label="Enter Password" variant="outlined"
//                             name='password'
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}></TextField></TableCell>
//                         <br />  <br /></TableRow>

//                     <TableRow>
//                         <TableCell><Typography variant="h6" > Confirm Password :</Typography></TableCell>
//                         <TableCell><TextField id="outlined-basic" label="Enter Confirm Password" variant="outlined"
//                             name='confirmPassword'
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}></TextField></TableCell>
//                         <br />  <br />

//                     </TableRow>
//                     <br />


//                 </Table>
//                 <Button variant="contained" onClick={(e) => getArtist(e)}>Register</Button>
//                 <br />  <br />

//             </Box>



//         </div>
//     )
//     } 

import React,{useState} from 'react'
import { CardContent, Grid, TextField, Typography,Card, Button  } from '@mui/material'
export default function CardsForm() {
    const [Name,setTestName]=useState("")
    const [artForm,setDescription]=useState("")
    const [mobileNumber,setNumber]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConPassword]=useState("")
    const [email,setEmail]=useState("")

    const getTestDetails=async(event)=>{
        event.preventDefault()
        console.log("in Methode");
        const result=await fetch("http://localhost:4000/artistRegister",{
          method:'POST',
          body:JSON.stringify({Name,artForm,mobileNumber,password,confirmPassword,email}),
          headers:{'Content-type':'application/json'}
        })
        result=await result.json()
        console.log(result);
      }
  return (
    <div>
      <Card className='Card'>
        <CardContent>
          <Typography gutterBottom variant='h5'>Upload Cards</Typography>
          <form onSubmit={(e)=>{getTestDetails(e)}}>
          <Grid container spacing={1}>
            <Grid sm={12} item>
            <TextField sm={12} label="Test Name" placeholder='Enter Test Name Here' variant='outlined' required onChange={(e)=>setTestName(e.target.value)} />
            </Grid>
             <Grid sm={12} item>
            <TextField label="Description" placeholder='Enter Description Here' variant='outlined' required onChange={(e)=>setDescription(e.target.value)} />
            </Grid> 
            <Grid sm={12} item>
            <TextField type='number' label="Price" placeholder='Enter number Here' variant='outlined' required onChange={(e)=>setNumber(e.target.value)} />
            </Grid>

            <Grid sm={12} item>
            <TextField type='password' label="pass" placeholder='Enter pass Here' variant='outlined' required onChange={(e)=>setPassword(e.target.value)} />
            </Grid>

            <Grid sm={12} item>
            <TextField type='password' label="con pass" placeholder='Enter con pass Here' variant='outlined' required onChange={(e)=>setConPassword(e.target.value)} />
            </Grid>

            <Grid sm={12} item>
            <TextField type='text' label="email" placeholder='Enter email Here' variant='outlined' required onChange={(e)=>setEmail(e.target.value)} />
            </Grid>
            <Grid sm={12} item>
            <Button type="submit" varient="contained,outlined" color="success" >Submit</Button>
          </Grid>
            </Grid>
            </form>
            </CardContent>
            </Card>
    </div>
  )
}







