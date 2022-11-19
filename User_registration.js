// import React from 'react'
import React, { useState } from 'react'
import { Typography, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TableRow, TableCell, Table, Box, Button } from '@mui/material'




function User_registration() {
    const [userName, setUserName] = useState("");
    const [gender, setGender] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const getUser = async (event) => {
        let result = await fetch("http://localhost:4000/userRegister",
            {
                method: 'POST',
                body: JSON.stringify({ userName, gender, mobileNumber, email, password, confirmPassword }),
                headers: { 'Content-type': 'application/json' }
            })

        result = await result.json()
    }



    return (
        <div class="card">
            <h1><b>USER REGISTRATION</b></h1>
            <Box sx={{ width: '500px', marginTop: '50px', marginLeft: '400px', border: '5px solid grey', backgroundColor: 'lightgrey' }}>
                <Table >
                    <TableRow>
                        <TableCell><Typography variant="h6" >User Name:</Typography></TableCell>
                        <TableCell><TextField id="outlined-basic" label="Enter Your Name" variant="outlined"
                            name='userName'
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}></TextField></TableCell>
                        <br />  <br />
                    </TableRow>


                    <TableRow>

                        <TableCell> <Typography variant="h6" >Gender :</Typography></TableCell>
                        <TableCell>
                            <FormControl>



                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"

                                    name='gender'
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                // name="radio-buttons-group"
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>

                            </FormControl>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell> <Typography variant="h6" >Mobile Number:</Typography></TableCell>
                        <TableCell> <TextField id="outlined-basic" label="Enter Mobile Number" variant="outlined"

                            name='mobileNumber'
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}></TextField></TableCell>
                        <br />  <br />
                    </TableRow>

                    <TableRow>
                        <TableCell><Typography variant="h6" >Email ID :</Typography></TableCell>
                        <TableCell> <TextField id="outlined-basic" label="Enter Email ID" variant="outlined"

                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}></TextField></TableCell>
                        <br />  <br />
                    </TableRow>

                    <TableRow>
                        <TableCell> <Typography variant="h6" >Password :</Typography></TableCell>
                        <TableCell><TextField id="outlined-basic" label="Enter Password" variant="outlined"

                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}></TextField></TableCell>
                        <br />  <br /></TableRow>

                    <TableRow>
                        <TableCell><Typography variant="h6" > Confirm Password :</Typography></TableCell>
                        <TableCell><TextField id="outlined-basic" label="Enter Confirm Password" variant="outlined"

                            name='confirmPassword'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}></TextField></TableCell>

                    </TableRow>

                    <br />


                </Table>

                <Button variant="contained" onClick={(e) => getUser(e)} >Register</Button>
                <br />  <br />
            </Box>
            <br />



        </div>
    )
}


export default User_registration
