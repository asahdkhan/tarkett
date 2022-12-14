import React, { forwardRef, useImperativeHandle } from 'react';
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
  Button,
  Drawer,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { data } from '../../const';
// import { styles as classes } from './styles.styles';

const RoomOptions = forwardRef(
  ({ onChange, onChangeRoomScene, roomData, roomOptions }, ref) => {
    const { shape, colorSrc, installation } = roomOptions;

    const handleChangeSelect = (event) => {
      onChange({
        shape: event.target.value,
      });
    };

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

    const [state, setState] = React.useState({
      left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
      if (
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

    useImperativeHandle(ref, () => ({
      openDrawer() {
        setState({ ...state, ['left']: true });
      },
    }));

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
      <div>
        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Box className="ToggleHeader">
              <Box className="ToggleLogo">
                <img
                  src={require('../../assets/images/tarkett-logo.png')}
                  alt=""
                />
              </Box>
              <Button
                className="ToggleButton"
                onClick={toggleDrawer(anchor, true)}
              >
                <MenuIcon />
              </Button>
            </Box>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Box className="OptionSidebar">
                    <Box className="Logo">
                      <img
                        src={require('../../assets/images/tarkett-logo.png')}
                        alt=""
                      />
                      <Button
                        className="ToggleButton"
                        onClick={toggleDrawer(anchor, false)}
                      >
                        <CloseIcon />
                      </Button>
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
                            <Box
                              className={`ColorSelectionContent ${
                                colorSrc ===
                                  require('../../assets/images/TH_TC_2ndPower_Electricity.jpg') &&
                                'Active'
                              }`}
                              onClick={() =>
                                onChange({
                                  colorSrc: require('../../assets/images/TH_TC_2ndPower_Electricity.jpg'),
                                })
                              }
                            >
                              <Box className="ColorSelectionThumbnail">
                                <img
                                  src={require('../../assets/images/TH_TC_2ndPower_Electricity.jpg')}
                                  alt=""
                                />
                              </Box>
                              <Typography className="ColorSelectionTitle">
                                2ndPower
                              </Typography>
                            </Box>
                            <Box
                              className={`ColorSelectionContent ${
                                colorSrc ===
                                  require('../../assets/images/TH_TC_ChainReaction_ShuttleLime.jpeg') &&
                                'Active'
                              }`}
                              onClick={() =>
                                onChange({
                                  colorSrc: require('../../assets/images/TH_TC_ChainReaction_ShuttleLime.jpeg'),
                                })
                              }
                            >
                              <Box className="ColorSelectionThumbnail">
                                <img
                                  src={require('../../assets/images/TH_TC_ChainReaction_ShuttleLime.jpeg')}
                                  alt=""
                                />
                              </Box>
                              <Typography className="ColorSelectionTitle">
                                ChainReaction
                              </Typography>
                            </Box>
                            <Box
                              className={`ColorSelectionContent ${
                                colorSrc ===
                                  require('../../assets/images/TH_TC_TextureMap_MountainSoil.jpg') &&
                                'Active'
                              }`}
                              onClick={() =>
                                onChange({
                                  colorSrc: require('../../assets/images/TH_TC_TextureMap_MountainSoil.jpg'),
                                })
                              }
                            >
                              <Box className="ColorSelectionThumbnail">
                                <img
                                  src={require('../../assets/images/TH_TC_TextureMap_MountainSoil.jpg')}
                                  alt=""
                                />
                              </Box>
                              <Typography className="ColorSelectionTitle">
                                TextureMap
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
                            <Box
                              className={`ColorSelectionContent ${
                                installation === 'monolithic' && 'Active'
                              }`}
                              onClick={() =>
                                onChange({
                                  installation: 'monolithic',
                                })
                              }
                            >
                              <Box className="ColorSelectionThumbnail ColorSelectionOpacity">
                                <img
                                  src={require('../../assets/images/mono.jpg')}
                                  alt=""
                                />
                              </Box>
                              <Typography className="ColorSelectionTitle">
                                Monolithic
                              </Typography>
                            </Box>
                            {/* <Box
                            className={`ColorSelectionContent ${
                              installation === 'qt' && 'Active'
                            }`}
                            onClick={() =>
                              onChange({
                                installation: 'qt',
                              })
                            }
                          >
                            <Box className="ColorSelectionThumbnail ColorSelectionOpacity">
                              <img
                                src={require('../../assets/images/quarter-turn.png')}
                                alt=""
                              />
                            </Box>
                            <Typography className="ColorSelectionTitle">
                              Quarter Turn
                            </Typography>
                          </Box>*/}
                            <Box
                              className={`ColorSelectionContent ${
                                installation === 'brick' && 'Active'
                              }`}
                              onClick={() =>
                                onChange({
                                  installation: 'brick',
                                })
                              }
                            >
                              <Box className="ColorSelectionThumbnail ColorSelectionOpacity">
                                <img
                                  src={require('../../assets/images/brick.jpg')}
                                  alt=""
                                />
                              </Box>
                              <Typography className="ColorSelectionTitle">
                                Brick
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
                            {data.map((item) => (
                              <Box
                                id={item.src}
                                className={`ColorSelectionContent ${
                                  item.src == roomData.src && 'Active'
                                }`}
                                onClick={() => onChangeRoomScene(item)}
                              >
                                <Box className="ColorSelectionThumbnail">
                                  <img
                                    src={require(`../../assets${item.src}`)}
                                    alt={item.name}
                                  />
                                </Box>
                                <Typography className="ColorSelectionTitle">
                                  {item.name}
                                </Typography>
                              </Box>
                            ))}
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
                                value={shape}
                                label="Size"
                                placeholder="Select"
                                onChange={handleChangeSelect}
                              >
                                {/* <MenuItem value={'19X36'}>19X36</MenuItem> */}
                                <MenuItem value={'24X24'}>24X24</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    );
  },
);

export default RoomOptions;
