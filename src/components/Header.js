import {
  AppBar,
  Container,
  createTheme,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import { makeStyles } from '@material-ui/core/styles/';

const useStyles = makeStyles({
  title: {
    flex: 1,
    color: 'gold',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
});

const darkTheme = createTheme({
  palette: {
    main: '#fff',
    type: 'dark',
  },
});

const Header = () => {
  const classes = useStyles();

  const history = useHistory();

  const { setCurrency } = CryptoState();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => history.push('/')}
              className={classes.title}
              variant="h6"
            >
              CriptoHunter
            </Typography>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
              }}
              onChange={(e) => setCurrency(e.target.value)}
              defaultValue="USD"
            >
              <MenuItem value={'USD'}>USD</MenuItem>
              <MenuItem value={'EUR'}>EUR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
