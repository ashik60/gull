import { Box } from '@material-ui/core';
import React from 'react';
import InfoCard from '../src/components/InfoCard';

export default function Index() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexGrow: 0,
        mt: 10,
      }}
    >
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
    </Box>
  );
}
