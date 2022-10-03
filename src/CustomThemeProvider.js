import { createTheme, ThemeProvider } from '@mui/material';

const GREY_COLOR = '#2f4f4f';

const theme = createTheme({
  palette: {
    primary: {
      main: GREY_COLOR,
    },
  },
});

function CustomThemeProvider(props) {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default CustomThemeProvider;
