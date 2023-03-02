import React from 'react'
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar sx={{background:'#4267B2'}}>
      <Toolbar>
        <Typography variant ="h4">blogbook</Typography>
        <Box display = "flex" marginLeft="auto">
          <Button sx={{ margin:1, borderRadius: 10 }} color="warning">Login</Button>
          <Button sx={{ margin:1, borderRadius: 10 }} color="warning">Signup</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
