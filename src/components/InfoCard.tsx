import { Box, Card, Container, Typography } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/styles';
import React from 'react';
import { pxToRem } from '../utils/pxToRem';

const CardContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

interface ITitle {
  title: string;
}

const useStyles = makeStyles({
  img: {
    display: 'block',
    padding: '25px 8px',
    borderRadius: '18px',
    backgroundColor: ({ title }: ITitle) => {
      if (title === 'New Leds') {
        return '#F2F1FE';
      }
      if (title === 'Sales') {
        return '#C5DBFF';
      }
      if (title === 'Orders') {
        return '#BCDDB3';
      }
      if (title === 'Expense') {
        return '#FFF6E0';
      }
    },
  },
  card: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    color: ({ title }: ITitle) => {
      if (title === 'New Leds') {
        return '#663399';
      }
      if (title === 'Sales') {
        return '#3981F7';
      }
      if (title === 'Orders') {
        return '#5DAE49';
      }
      if (title === 'Expense') {
        return '#FFC620';
      }
    },
    fontSize: '2rem',
    fontWeight: 'bold',
  },
});

interface IProps {
  title: string;
  amount: string;
  img: string;
}

const InfoCard = ({ title, amount, img }: IProps) => {
  const classes = useStyles({ title });

  return (
    <Card
      className={classes.card}
      elevation={0}
      sx={{ width: pxToRem(200), height: pxToRem(130), mb: 2, mr: 2, flexGrow: 1 }}
    >
      <CardContainer>
        <img className={classes.img} src={img} />
        <Box sx={{ ml: 1 }}>
          <Typography>{title}</Typography>
          <Typography className={classes.title} variant='h2'>
            {amount}
          </Typography>
        </Box>
      </CardContainer>
    </Card>
  );
};

export default InfoCard;
