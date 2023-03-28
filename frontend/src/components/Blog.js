import { Avatar, CardContent, CardMedia, Typography, Card } from '@mui/material'
import React  from 'react'

const Blog = () => {
  return (
    <div><Card sx={{width:"40%", margin: "auto", mt: 2, padding: 2, boxShadow: "5px 5px 10px #ccc",
    ":hover:":{
    boxShadow: "10px 10px 20px #ccc"
    },
    }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="194"
      image="/static/images/cards/paella.jpg"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
   
  </Card></div>
  )
}

export default Blog