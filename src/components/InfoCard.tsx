import { Box, Card, Container, Typography } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/styles';
import React from 'react';

const CardContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

const useStyles = makeStyles((theme) => {
  return {
    img: {
      display: 'block',
      padding: '25px 8px',
      borderRadius: '18px',
      backgroundColor: '#F2F1FE',
    },
    card: {
      display: 'flex',
      alignItems: 'center',
    },
    title: {
      color: '#663399',
      fontSize: '2rem',
      fontWeight: 'bold',
    },
  };
});

const InfoCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card} elevation={0} sx={{ width: 296, height: 131, ml: 20 }}>
      <CardContainer>
        <img className={classes.img} src='/static/assets/icons/leds.svg' />
        <Box sx={{ ml: 1 }}>
          <Typography>New Leds</Typography>
          <Typography className={classes.title} variant='h2'>
            205
          </Typography>
        </Box>
      </CardContainer>
    </Card>
  );
};

export default InfoCard;
