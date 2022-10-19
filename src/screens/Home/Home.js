import React from 'react';
import { Box, Typography } from '@mui/material';
import { styles as classes } from './Home.styles';
import RoomOptions from '../../components/RoomOptions';

const Home = () => {
  return (
    <Box sx={classes.main}>
      <Typography variant="h3">Home</Typography>
      <RoomOptions />
    </Box>
  );
};

export default Home;
