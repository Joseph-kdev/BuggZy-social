import React from "react";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material";




const Post = () => {
  return (
    <Box>
      <Card sx={{
        background: "#103D50",
        marginBottom:"5px",
        borderRadius:"10px",
        color:"white"
      }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "blur" }} aria-label="recipe" src="https://unsplash.com/photos/closeup-photography-of-woman-smiling-mEZ3PoFGs_k">
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="AnotherRandomJoe"
          subheader="September 14, 2023"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
          alt="Coffee and eggs"
        />
        <CardContent>
          <Typography variant="body2" color="white">
          A hearty breakfast spread that satisfies both sweet
          and savory cravings, paired with a steaming cup of rich coffee.
          Because every day deserves a delicious start! ☕🍳 #BreakfastMagic #CoffeeLover
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color:"red" }}/>} />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{
        background: "#103D50",
        marginBottom:"5px",
        borderRadius:"10px",
        color:"white"
      }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "blur" }} aria-label="recipe">

            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="BigGuy"
          subheader="June 14, 2023"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6"
          alt="Basketball"
        />
        <CardContent>
          <Typography variant="body2" color="white">
            Dribbling into autumn vibes with my favorite basketball,
            as the leaves crunch beneath each move. Nothing beats the
            rhythm of the game and the crisp air of fall on the court!
            🍂🏀 #AutumnHoops #BasketballDreams
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color:"red" }}/>} />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Post;