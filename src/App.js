import React from 'react';
import {Provider} from 'react-redux';
import store from './store/index.js';
import RestaurantScreen from './components/RestaurantScreen';
<<<<<<< HEAD

const App = () => {
  return (
    <Provider store={store}>
      <RestaurantScreen />
=======
import {createMuiTheme} from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import {ThemeProvider} from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static ">
          <Toolbar>
            <Typography variant="h6">Opinion Ate</Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <RestaurantScreen />
        </Container>
      </ThemeProvider>
>>>>>>> 099b9fb9a7af0feb6c728e98b249f6419c032ed7
    </Provider>
  );
};

export default App;
