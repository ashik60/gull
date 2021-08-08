import { Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react';

const Page = () => {
  const router = useRouter();
  const { asPath } = router;
  const pathName = asPath.split('/')[1];
  return (
    <Typography sx={{ ml: 2, fontSize: 20 }}>
      This is {pathName} page dummy content.
    </Typography>
  );
};

export default Page;
