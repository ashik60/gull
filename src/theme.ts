import { createTheme } from '@material-ui/core/styles';

// function pxToRem(value: number): string {
//   return `${value / 16}rem`;
// }

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#663399',
      light: '#7D48B1',
    },
    background: {
      default: '#F1F3F4',
    },
  },
  typography: {
    fontFamily: 'Nunito Sans',
    h2: {
      fontSize: '30px',
      fontWeight: 'bold',
    },
  },
  shape: {
    borderRadius: '1rem',
  },
});

export default theme;
