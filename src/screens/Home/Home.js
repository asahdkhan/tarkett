import React, { useRef, useState } from 'react';
import { Box, Grid } from '@mui/material';
import RoomOptions from '../../components/RoomOptions';
import RoomScene from '../../components/RoomScene';
import html2canvas from 'html2canvas';
import { data } from '../../const';

const Home = () => {
  const [i, si] = useState('');
  const [roomOptions, setOptions] = useState({
    // colorSrc: require(`../../assets/images/TH_TC_2ndPower_Electricity.jpg`),
    colorSrc: require(`../../assets/images/demo-tile.jpg`),
    installation: 'monolithic',
    shape: '24X24',
  });
  const [roomData, setRoomData] = useState({
    ...data[2],
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

  const handleRoomData = (data) => {
    setRoomData(data);
  };

  const takeScreenshot = () => {
    const oldCanvas = document.getElementById('renderRoomScene');
    const body = document.querySelector('body');

    html2canvas(body).then((canvas) => {
      let croppedCanvas = document.createElement('canvas');
      let croppedCanvasContext = croppedCanvas.getContext('2d');

      croppedCanvas.width = 1585;
      croppedCanvas.height = 1026;

      croppedCanvasContext.drawImage(
        canvas,
        0,
        0,
        1585,
        1026,
        0,
        0,
        1585,
        1026,
      );

      console.log('croppedCanvas', croppedCanvas.toDataURL());
      si(croppedCanvas.toDataURL());
    });
  };

  return (
    <Grid id="whole-roomScene" container spacing={0}>
      <img src={i} alt="screen capture" />
      <Box className="SideContainer">
        <RoomOptions
          onChange={handleOptions}
          onChangeRoomScene={handleRoomData}
          roomOptions={roomOptions}
          roomData={roomData}
          ref={childRef}
        />
      </Box>
      <Grid item xs={12}>
        <Box className="MainContainer">
          <Box
            className="RoomScene"
            onClick={() => {
              childRef.current.openDrawer();
            }}
          >
            <RoomScene
              roomData={roomData}
              finishes={roomOptions.colorSrc}
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
