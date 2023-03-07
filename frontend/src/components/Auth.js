import { TextField, Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react'

const Auth = () => {
  const [state, setstate] = useState({
    name:"",email:"",password:""
  });
  const [isSignup, setIsSignUp] = useState(false);
  return (
    <div>
      <form>
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
{ isSignup &&<TextField placeholder='Name' margin='normal'/>
}          <TextField type={"email"} placeholder='Email' margin='normal'/>
          <TextField type={"password"} placeholder='password' margin='normal'/>
          <Button variant='contained' sx={{marginTop: 3}}>Submit</Button>
          <Button sx={{marginTop: 3}} onClick={()=>setIsSignUp(!isSignup)}>{isSignup ? "Login" : "Signup"}</Button>
        </Box>
      </form>
    </div>
  )
}

export default Auth;