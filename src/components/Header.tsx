import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { styled } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import { drawerWidth } from './Sidebar';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#fff',
  // marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '28rem',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },
}));

interface IProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ open, setOpen }: IProps) {
  return (
    <Box sx={{ flexGrow: 1, marginLeft: '140px' }}>
      <AppBar color='transparent' elevation={0} position='fixed' open={open}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            aria-label='open drawer'
            sx={{  my: 4 }}
            onClick={() => setOpen(!open)}
          >
            <Box component='img' src='static/assets/icons/menu.png' />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <Box component='img' src='static/assets/icons/search.svg' />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size='large' sx={{ my: 4, mr: 2 }}>
              <Box component='img' src='static/assets/icons/plus.svg' />
            </IconButton>
            <IconButton sx={{ my: 4, mr: 2 }}>
              <Badge badgeContent={3} color='secondary'>
                <Box component='img' src='static/assets/icons/bell.svg' />
              </Badge>
            </IconButton>
            <IconButton edge='end'>
              <Box component='img' src='static/assets/images/profile.png' />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
