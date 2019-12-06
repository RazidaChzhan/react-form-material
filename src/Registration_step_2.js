import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles  } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import InputLabel from "@material-ui/core/InputLabel";


import './App.css';
import facebook from './images/facebook-logo.png';
import google from './images/Google.svg';
import vkontakte from './images/vk-logo.png';

import InputBase from '@material-ui/core/InputBase';

import {purple, grey } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';


import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const PurpleRadio = withStyles({
  root: { 
    color: grey[500] , 
    '&$checked': {
      color: purple[800] ,
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);


const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
  },
}));

export default function RegistrationStep2 () {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = event => {
    setAge(event.target.value);
  };
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  const [value, setValue] = React.useState('simpleUser');
  const handleChangeRadio = event => {
    setValue(event.target.value);
  };
        return (
        <div>
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <p>Зерегистрироваться через:</p>
            </Grid>   
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <button className="google">
                <img className="google-img" src={google} alt="goog"></img>
                  Google
                </button>
              </Grid>
              <Grid item xs={4}>
                <button className="facebook">
                <img src={facebook} alt="facebook"></img>
                  Facebook
                </button>
              </Grid>
              <Grid item xs={4}>
                <button className="vkontakte">
                <img className="vkontakte-img" src={vkontakte} alt="vkontakte"></img>
                  ВКонтакте
                </button>
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={3}>
              <hr className="hr"/>    
            </Grid>
            <Grid item xs={6}>
              <p className="orText">или создать новый аккаунт</p>    
            </Grid>
            <Grid item xs={3}>
              <hr className="hr"/>    
            </Grid>
          </Grid> 

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="city"
              label="Населенный пункт"
              name="city"
              autoComplete="city"
              autoFocus
            />
            
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                Я студент
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}
                onChange={handleChange}
                labelWidth={labelWidth}
              >
                {/* <MenuItem value="">
                  <em>Я студент</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </FormControl>

            <div className="radiobuttons">
              <FormControl component="fieldset" className={classes.formControl}>
                <RadioGroup aria-label="userType" name="userType" value={value} onChange={handleChangeRadio}>
                  <FormControlLabel value="simpleUser" control={<PurpleRadio/>} label="Обычный пользователь" />
              <FormControlLabel value="groupLider" control={<PurpleRadio />} label="Лидер группы"/>
                </RadioGroup>
              </FormControl>
            </div>
          </form>
        </Grid>
      </Grid>
    </div>
       );
  }    
