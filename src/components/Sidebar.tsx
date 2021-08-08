import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { CSSObject, styled, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import theme from '../theme';

export const drawerWidth = 140;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
  display: 'none',
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    display: 'flex',
    flexDirection: 'column',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': {
        ...openedMixin(theme),
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
      },
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  })
);

const ListText = styled(ListItemText)({
  color: '#fff',
});

const ListItemWrapper = styled(Box)({
  padding: '10px 12px',
  '& :hover': {
    backgroundColor: theme.palette.primary.light,
    borderRadius: '5px',
    cursor: 'pointer',
    transition: '0.5s all ease ',
  },
});

const SidebarListItem = styled((props) => <ListItem {...props} />)({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  justifyContent: 'center',
  height: '74px',
  width: '100%',
  padding: '20px 0',
  '& .title': {
    display: 'none',
  },
  '&:hover .title': {
    display: 'block',
    transition: '.3s ease all',
  },
});

const ImageIcon = styled('img')({
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
});

const sidebarItems = [
  {
    title: 'Dashboard',
    icon: '/static/assets/icons/dashboard.svg',
  },
  {
    title: 'Table',
    icon: '/static/assets/icons/table.svg',
  },
  {
    title: 'Forms',
    icon: '/static/assets/icons/forms.svg',
  },
  {
    title: 'Notes',
    icon: '/static/assets/icons/Notes.svg',
  },
  // {
  //   title: 'Pages',
  //   icon: '/static/assets/icons/Notes.svg',
  // },
  // {
  //   title: 'Sessions',
  //   icon: '/static/assets/icons/sessions.svg',
  // },
  // {
  //   title: 'Weather',
  //   icon: '/static/assets/icons/weather.svg',
  // },
  // {
  //   title: 'Connections',
  //   icon: '/static/assets/icons/connections.svg',
  // },
  // {
  //   title: 'Rewards',
  //   icon: '/static/assets/icons/rewards.svg',
  // },
];

interface IProps {
  open: boolean;
}

export default function Sidebar({ open }: IProps) {
  return (
    <Box>
      <CssBaseline />
      <Drawer variant='permanent' open={open}>
        <DrawerHeader>
          <Typography sx={{ mx: 'auto', my: 4, fontSize: 30, fontWeight: 'bold' }}>
            Gull
          </Typography>
        </DrawerHeader>
        <List>
          {sidebarItems.map((item) => (
            <ListItemWrapper key={item.title}>
              <SidebarListItem>
                <ListItemIcon>
                  <ImageIcon src={item.icon} />
                </ListItemIcon>
                <ListText className='title' primary={item.title} />
              </SidebarListItem>
            </ListItemWrapper>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
