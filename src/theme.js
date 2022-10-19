import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff0000',
      contrastText: '#fff',
    },
    secondary: {
      main: '#FFFF00',
      contrastText: '#000',
    },
  },
});

export default theme;
