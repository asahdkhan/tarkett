import React from 'react';
import {
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
// import { styles as classes } from './styles.styles';

const RoomOptions = () => {
  const [age, setAge] = React.useState('');

  const handleChangeSelect = (event) => {
    setAge(event.target.value);
  };

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const CustomExpandIcon = () => {
    return (
      <Box
        sx={{
          '.Mui-expanded & > .collapsIconWrapper': {
            display: 'none',
          },
          '.expandIconWrapper': {
            display: 'none',
          },
          '.Mui-expanded & > .expandIconWrapper': {
            display: 'block',
          },
        }}
      >
        <div className="expandIconWrapper">
          <RemoveIcon />
        </div>
        <div className="collapsIconWrapper">
          <AddIcon />
        </div>
      </Box>
    );
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Box className="OptionSidebar">
          <Box className="Logo">
            <img src={require('../../assets/images/tarkett-logo.png')} alt="" />
            <CloseIcon className="OptionCloseIcon" />
          </Box>
          <Box className="OptionHeading">Make Your Selections</Box>
          <Box className="OptionAccording">
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
            >
              <AccordionSummary
                expandIcon={<CustomExpandIcon />}
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>COLOR</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box className="ColorSelectionContainer">
                  <Box className="ColorSelectionContent">
                    <Box className="ColorSelectionThumbnail">
                      <img
                        src={require('../../assets/images/solitude.png')}
                        alt=""
                      />
                    </Box>
                    <Typography className="ColorSelectionTitle">
                      Solitude 1905
                    </Typography>
                  </Box>
                  <Box className="ColorSelectionContent">
                    <Box className="ColorSelectionThumbnail">
                      <img
                        src={require('../../assets/images/abalone.png')}
                        alt=""
                      />
                    </Box>
                    <Typography className="ColorSelectionTitle">
                      Abalone 1909
                    </Typography>
                  </Box>
                  <Box className="ColorSelectionContent">
                    <Box className="ColorSelectionThumbnail">
                      <img
                        src={require('../../assets/images/alabaster.png')}
                        alt=""
                      />
                    </Box>
                    <Typography className="ColorSelectionTitle">
                      Alabaster 1902
                    </Typography>
                  </Box>
                  <Box className="ColorSelectionContent">
                    <Box className="ColorSelectionThumbnail">
                      <img
                        src={require('../../assets/images/haylo.png')}
                        alt=""
                      />
                    </Box>
                    <Typography className="ColorSelectionTitle">
                      Haylo 4171
                    </Typography>
                  </Box>
                  <Box className="ColorSelectionContent">
                    <Box className="ColorSelectionThumbnail">
                      <img
                        src={require('../../assets/images/powder-gray.png')}
                        alt=""
                      />
                    </Box>
                    <Typography className="ColorSelectionTitle">
                      Powder Gray 1903
                    </Typography>
                  </Box>
                  <Box className="ColorSelectionContent">
                    <Box className="ColorSelectionThumbnail">
                      <img
                        src={require('../../assets/images/steele.png')}
                        alt=""
                      />
                    </Box>
                    <Typography className="ColorSelectionTitle">
                      Steele 1906
                    </Typography>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
            >
              <AccordionSummary
                expandIcon={<CustomExpandIcon />}
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography>INSTALLATION METHOD</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box className="ColorSelectionContainer">
                  <Box className="ColorSelectionContent">
                    <Box className="ColorSelectionThumbnail ColorSelectionOpacity">
                      <img
                        src={require('../../assets/images/monolithic.png')}
                        alt=""
                      />
                    </Box>
                    <Typography className="ColorSelectionTitle">
                      Monolithic
                    </Typography>
                  </Box>
                  <Box className="ColorSelectionContent">
                    <Box className="ColorSelectionThumbnail ColorSelectionOpacity">
                      <img
                        src={require('../../assets/images/quarter-turn.png')}
                        alt=""
                      />
                    </Box>
                    <Typography className="ColorSelectionTitle">
                      Quarter Turn
                    </Typography>
                  </Box>
                  <Box className="ColorSelectionContent">
                    <Box className="ColorSelectionThumbnail ColorSelectionOpacity">
                      <img
                        src={require('../../assets/images/brick.png')}
                        alt=""
                      />
                    </Box>
                    <Typography className="ColorSelectionTitle">
                      Brick
                    </Typography>
                  </Box>
                  <Box className="ColorSelectionContent">
                    <Box className="ColorSelectionThumbnail ColorSelectionOpacity">
                      <img
                        src={require('../../assets/images/ashlar.png')}
                        alt=""
                      />
                    </Box>
                    <Typography className="ColorSelectionTitle">
                      Ashlar
                    </Typography>
                  </Box>
                  <Box className="ColorSelectionContent">
                    <Box className="ColorSelectionThumbnail ColorSelectionOpacity">
                      <img
                        src={require('../../assets/images/random.png')}
                        alt=""
                      />
                    </Box>
                    <Typography className="ColorSelectionTitle">
                      Random
                    </Typography>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel3'}
              onChange={handleChange('panel3')}
            >
              <AccordionSummary
                expandIcon={<CustomExpandIcon />}
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography>ROOM</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box className="ColorSelectionContainer">
                  <Box className="ColorSelectionContent">
                    <Box className="ColorSelectionThumbnail">
                      <img
                        src={require('../../assets/images/room-scene-thumb-1.png')}
                        alt=""
                      />
                    </Box>
                    <Typography className="ColorSelectionTitle">
                      Lobby
                    </Typography>
                  </Box>
                  <Box className="ColorSelectionContent">
                    <Box className="ColorSelectionThumbnail">
                      <img
                        src={require('../../assets/images/room-scene-thumb-1.png')}
                        alt=""
                      />
                    </Box>
                    <Typography className="ColorSelectionTitle">
                      Office
                    </Typography>
                  </Box>
                  <Box className="ColorSelectionContent">
                    <Box className="ColorSelectionThumbnail">
                      <img
                        src={require('../../assets/images/room-scene-thumb-1.png')}
                        alt=""
                      />
                    </Box>
                    <Typography className="ColorSelectionTitle">
                      Home
                    </Typography>
                  </Box>
                  <Box className="ColorSelectionContent">
                    <Box className="ColorSelectionThumbnail">
                      <img
                        src={require('../../assets/images/room-scene-thumb-1.png')}
                        alt=""
                      />
                    </Box>
                    <Typography className="ColorSelectionTitle">
                      Open Office
                    </Typography>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel4'}
              onChange={handleChange('panel4')}
            >
              <AccordionSummary
                expandIcon={<CustomExpandIcon />}
                aria-controls="panel4d-content"
                id="panel4d-header"
              >
                <Typography>SIZE</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box className="ColorSelectionContainer">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Select Size
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      placeholder="Select"
                      onChange={handleChangeSelect}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel5'}
              onChange={handleChange('panel5')}
            >
              <AccordionSummary
                expandIcon={<CustomExpandIcon />}
                aria-controls="panel5d-content"
                id="panel5d-header"
              >
                <Typography>STYLE</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default RoomOptions;
