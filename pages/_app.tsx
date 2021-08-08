import { CacheProvider, EmotionCache } from '@emotion/react';
import { Box } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { styled, ThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useState } from 'react';
import Header from '../src/components/Header';
import Sidebar, { drawerWidth } from '../src/components/Sidebar';
import createEmotionCache from '../src/createEmotionCache';
import theme from '../src/theme';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [open, setOpen] = useState(true);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>My page</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Header setOpen={setOpen} open={open} />
          <Sidebar open={open} />
          <Main>
            <Component {...pageProps} />
          </Main>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}
