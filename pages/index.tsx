import { Box } from '@material-ui/core';
import React from 'react';
import InfoCard from '../src/components/InfoCard';

const businessInfo = [
  {
    title: 'New Leds',
    amount: '205',
    img: '/static/assets/icons/leds.svg',
  },
  {
    title: 'Sales',
    amount: '$4021',
    img: '/static/assets/icons/sales.svg',
  },
  {
    title: 'Orders',
    amount: '80',
    img: '/static/assets/icons/orders.svg',
  },
  {
    title: 'Expense',
    amount: '$1200',
    img: '/static/assets/icons/expense.svg',
  },
];

export default function Index() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        pl: 2,
      }}
    >
      {businessInfo.map((info) => (
        <InfoCard
          key={info.title}
          title={info.title}
          amount={info.amount}
          img={info.img}
        />
      ))}
    </Box>
  );
}
