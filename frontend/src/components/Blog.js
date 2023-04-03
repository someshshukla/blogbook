import { Avatar, CardContent, CardMedia, Typography, Card } from '@mui/material'
import React  from 'react'

const Blog = ({title,description, image, userName}) => {
  return (
    <div><Card sx={{width:"40%", margin: "auto", mt: 2, padding: 2, boxShadow: "5px 5px 10px #ccc",
    ":hover:":{
    boxShadow: "10px 10px 20px #ccc"
    },
    }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          {userName}
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
      image={imageURL}
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
   
  </Card></div>
  )
}

export default Blog