import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Authorization from './Authorization';
import HorizontalLabelPositionBelowStepper from './Stepper';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createMuiTheme({
    palette: {
      primary: { main: '#2FA2BC'}, // Purple and green play nicely together.
      secondary: { main: '#222222'},
    },
  });  
  

  return (
    <div className={classes.root}>
      
       <ThemeProvider theme={theme}>
      <AppBar position="static" color="#ffffff">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Авторизация" {...a11yProps(0)} />
          <Tab label="Регистрация" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
       <Authorization/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HorizontalLabelPositionBelowStepper/>       
      </TabPanel>  
      </ThemeProvider>   
         
    </div>
  );
}












