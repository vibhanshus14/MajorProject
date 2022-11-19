import React,{useState} from 'react'
import { CardContent, Grid, TextField, Typography,Card, Button  } from '@mui/material'
export default function CardsForm() {
    const [testName,setTestName]=useState("")
    const [discription,setDescription]=useState("")
    const [price,setPrice]=useState("")

    const getTestDetails=async(event)=>{
        event.preventDefault()
        console.log("in Methode");
        const result=await fetch("http://localhost:4000/createNewPost",{
          method:'POST',
          body:JSON.stringify({testName,discription,price}),
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
          <Grid>
          <Grid container spacing={1}>
            <Grid sm={8} item>
            <TextField sm={12} label="  Name" placeholder='Enter  Name Here' variant='outlined' required onChange={(e)=>setTestName(e.target.value)} fullWidth/>
            </Grid>
            <Grid sm={12} item>
            <TextField label=" Art Form" placeholder='Enter  Art Form Here' variant='outlined' required onChange={(e)=>setDescription(e.target.value)} fullWidth/>
            </Grid>
            <Grid sm={12} item>
            <TextField label="  Art Details" placeholder='Enter  Art Details Here' variant='outlined' required onChange={(e)=>setDescription(e.target.value)} fullWidth/>
            </Grid>
            <Grid sm={4} item>
            <Button type="submit" varient="contained,outlined" color="success" fullWidth>Submit</Button>
          </Grid>
            </Grid>
            </Grid>
            </form>
            </CardContent>
            </Card>
    </div>
  )
}


