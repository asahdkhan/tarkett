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
        [0.21321428571428572, 0.63430777716492],
        [0.7889285714285714, 0.6321014892443464],
        [-0.6025, 1.0165471594043023],
        [1.6330357142857144, 1.014892443463872],
      ],

      inchToPixelFactor: 4,
      // height: '336',
      // width: '282',
    },
  ],
};

const Home = () => {
  const [roomOptions, setOptions] = useState({
    colorSrc: require(`../../assets/images/alabaster.png`),
    installation: 'brick',
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
