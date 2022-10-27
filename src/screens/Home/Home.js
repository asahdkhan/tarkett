import React from 'react';
import { Box, Grid, img } from '@mui/material';
import { styles as classes } from './Home.styles';
import RoomOptions from '../../components/RoomOptions';

const Home = () => {
  return (
    // <Box sx={classes.main}>
    //   <Typography variant="h3">Home</Typography>
    //   <RoomOptions />
    // </Box>

    <Grid container spacing={0}>
      <Box className="SideContainer">
        <RoomOptions />
      </Box>
      <Grid item xs={12}>
        <Box className="MainContainer">
          <Box className="RoomScene">
            <img
              src={require('../../assets/images/room-scene-1.png')}
              alt=""
              className="MainRoomImg"
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
