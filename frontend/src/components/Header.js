import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Box, Button, Tabs, Tab } from '@mui/material';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


const Header = () => {
  const isLoggedIn = useSelector(state=> state.isLoggedIn);

  const [value, setvalue] = useState();
  return (
    <AppBar
    position='sticky'
    sx={{background:'#4267B2'}}>
      <Toolbar>
        <Typography variant ="h4">blogbook</Typography>
        { isLoggedIn && <Box display="flex" marginLeft={'auto'} marginRight={'auto'}>
          <Tabs textColor='inherit' value={value} onChange={(e, val)=>setvalue(val)}>
            <Tab LinkComponent={Link} to="/blogs" label="All Blogs"/>
            <Tab LinkComponent={Link} to="/myblogs" label="My Blogs"/>
          </Tabs>
        </Box>}
        <Box display = "flex" marginLeft="auto">
          { !isLoggedIn &&<Button LinkComponent={Link} to="/auth" sx={{ margin:1, borderRadius: 10 }} color="warning">Login</Button>}
          { !isLoggedIn &&<Button LinkComponent={Link} to="/auth" sx={{ margin:1, borderRadius: 10 }} color="warning">Signup</Button>}
          { isLoggedIn && <Button LinkComponent={Link} to="/auth" sx={{ margin:1, borderRadius: 10 }} color="warning">Logout</Button>}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
