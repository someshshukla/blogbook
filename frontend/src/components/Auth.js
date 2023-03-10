import { TextField, Box, Button, Typography } from '@mui/material';
import React, { useState, useDispatch } from 'react';
import axios from "axios";



const Auth = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    name:"",
    email:"",
    password:""
  });
  const [isSignup, setIsSignUp] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  };

  const sendRequest = async (type="login") => {
    const res = await axios.post(`http://localhost:5000/api/user/${type}`, {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password
    }).catch(err=>console.log(err));

    const data = await res.data;
    return data;

    
  }

  

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(inputs);

    if(isSignup){
      sendRequest("signup").then(()=>dispatch(authActions.login())).then(data=>console.log(data))
    } else {
      sendRequest().then(()=>dispatch(authActions.login())).then(data=>console.log(data))
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box display="flex"
        maxWidth={400}
         flexDirection={'column'}
         alignItems={"center"}
         justifyContent={'center'}
         boxShadow="10px 10px 20px #ccc"
         padding={3}
         margin='auto'
         marginTop={5}
         borderRadius={5}
        >
 <Typography variant='h4' padding={3} textAlign='center'>Login</Typography>
{ isSignup && 
          <TextField 
          name='name' 
          onChange={handleChange} 
          value={inputs.name} 
          placeholder='Name' 
          margin='normal'/>
}         <TextField 
          name='email' 
          onChange={handleChange} 
          value={inputs.email} 
          type={"email"} 
          placeholder='Email' 
          margin='normal'/>
          <TextField name='password' 
          onChange={handleChange} 
          value={inputs.password} 
          type={"password"} 
          placeholder='password' 
          margin='normal'/>
          <Button type='submit'
          variant='contained' 
          sx={{marginTop: 3}}>
            Submit
          </Button>
          <Button sx={{marginTop: 3}} onClick={()=>setIsSignUp(!isSignup)}>{isSignup ? "Login" : "Signup"}</Button>
        </Box>
      </form>
    </div>
  )
}

export default Auth;