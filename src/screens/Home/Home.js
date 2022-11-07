import React, { useRef, useState } from 'react';
import { Box, Grid, img } from '@mui/material';
import { styles as classes } from './Home.styles';
import RoomOptions from '../../components/RoomOptions';
import RoomScene from '../../components/RoomScene';
import RoomSceneImage from '../../assets/images/1_Lobby_Area.png';

const Finishes = {
  surface: [
    {
      perspective: [
        [0.21607142857142858, 0.6321014892443464],
        [-0.6046428571428571, 1.0159955874241589],
        [0.7882142857142858, 0.6332046332046332],
        [1.6282142857142856, 1.0137892995035853],
      ],

      inchToPixelFactor: 6.5,
      // height: '336',
      // width: '282',
    },
  ],
};

const Home = () => {
  const [roomOptions, setOptions] = useState({
    colorSrc: require(`../../assets/images/TH_TC_Braided_SiltedClay.jpg`),
    installation: 'monolithic',
    shape: '24X24',
  });

  const childRef = useRef();

  const handleOptions = (data) => {
    setOptions((previousState) => {
      return {
        ...previousState,
        ...data,
      };
    });
  };

  return (
    <Grid container spacing={0}>
      <Box className="SideContainer">
        <RoomOptions
          onChange={handleOptions}
          roomData={roomOptions}
          ref={childRef}
        />
      </Box>
      <Grid item xs={12}>
        <Box className="MainContainer">
          <Box
            className="RoomScene"
            onClick={() => childRef.current.openDrawer()}
          >
            <RoomScene
              roomScene={RoomSceneImage}
              finishes={{ src: roomOptions.colorSrc, ...Finishes }}
              installation={roomOptions.installation}
              shape={roomOptions.shape}
              angle={0}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
