import React from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';

const MainStyles = () => {
  return (
    <GlobalStyles
      styles={{
        body: {
          fontFamily: "'Nunito Sans'",
        },
        '.Logo': {
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        '.OptionCloseIcon': {
          cursor: 'pointer',
        },
        '.MainRoomImg': {
          maxWidth: '100%',
          width: '100%',
          // Height: '100vh',
          Display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
        '.OptionSidebar': {
          background: '#fff',
          maxWidth: '450px',
          height: '100vh',
          position: 'fixed',
          top: '0',
          left: '0',
          zIndex: '99',
        },
        '.MainContainer': {
          position: 'relative',
          top: '0',
          left: '0',
        },
        '.OptionHeading': {
          minHeight: '50px',
          background: '#102F54',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          padding: '5px 20px',
          fontWeight: '600',
          marginBottom: '2px',
        },
        '.MuiButtonBase-root.MuiAccordionSummary-root': {
          background: 'RGBA(16,47,84,0.5)',
          color: '#fff',
          borderBottom: '2px solid #fff',
          padding: '5px 20px',
          minHeight: '50px',
          margin: '0px 0px',
        },
        '.MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded': {
          background: 'RGBA(16,47,84,0.8)',
          minHeight: '50px',
          margin: '0px 0px',
          padding: '5px 20px',
        },
        '.MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded .MuiAccordionSummary-content':
          {},
        '.MuiPaper-root.MuiAccordion-root.Mui-expanded': {
          margin: '0px 0px',
        },
        '.OptionAccording .MuiAccordionSummary-content.Mui-expanded': {
          margin: '12px 0px',
        },
        '.ColorSelectionContent': {
          width: '114px',
          marginRight: '15px',
          border: '2px solid #fff',
          transition: 'all 0.5s ease-in-out',
          cursor: 'pointer',
          marginBottom: '10px',
        },
        '.ColorSelectionContent:hover': {
          border: '2px solid #102F54',
        },
        '.ColorSelectionContent.Active': {
          border: '2px solid #102F54',
        },
        '.ColorSelectionOpacity img': {
          opacity: '0.5',
        },
        '.ColorSelectionContent:hover .ColorSelectionOpacity img': {
          opacity: '1',
        },
        '.ColorSelectionContent.Active .ColorSelectionOpacity img': {
          opacity: '1',
        },
        '.ColorSelectionThumbnail': {
          width: '100%',
          maxWidth: '100%',
          textAlign: 'center',
        },
        '.ColorSelectionThumbnail img': {
          maxWidth: '100%',
        },
        '.MuiTypography-root.ColorSelectionTitle': {
          color: '#102F54',
          textAlign: 'center',
          fontSize: '13px',
          paddingBottom: '5px',
        },
        '.ColorSelectionContainer': {
          display: 'flex',
          flexWrap: 'wrap',
        },
        '.expandIconWrapper': {
          color: '#fff',
        },
        '.collapsIconWrapper': {
          color: '#fff',
        },
        '.MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
          {
            borderColor: '#102F54',
            borderWidth: '2px',
          },
        '.MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-outlined.Mui-focused':
          {
            color: '#102F54',
            background: '#fff',
          },
      }}
    />
  );
};

export default MainStyles;
