import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Carrousel from './Carrousel';

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: 'url(./banner2.jpg)',
  },
  bannerContent: {
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 25,
    justifyContent: 'space-around',
  },
  tagline: {
    display: 'flex',
    height: '40%',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
}));

function Banner() {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: 'bold',
              marginBottom: 15,
              fontFamily: 'Montserrat',
            }}
          >
            Crypto Hunter
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              fontWeight: 'darkgrey',
              textTransform: 'capitalize',
              fontFamily: 'Montserrat',
            }}
          >
            Get all info regarding your Crypto Currency
          </Typography>
        </div>
        <Carrousel />
      </Container>
    </div>
  );
}

export default Banner;
