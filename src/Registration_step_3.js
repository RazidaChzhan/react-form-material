import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import './App.css';
import facebook from './images/facebook-logo.png';
import google from './images/Google.svg';
import vkontakte from './images/vk-logo.png';

import 'date-fns';
 
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
   instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function RegistrationStep3() {
 const classes = useStyles();
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
          <Grid container spacing={1}>
          <Grid item xs={6}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Введите E-mail"
            name="email"
            autoComplete="email"
            autoFocus
            />  
          </Grid>
          <Grid item xs={6}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Введите телефон"
            name="phone"
            autoComplete="phone"
            autoFocus
            />  
          </Grid>
          </Grid>
          <div style={{paddingTop: 20}}>
               <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Введите пароль"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              </div>
              <div style={{paddingTop: 20}}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Повторите пароль"
                type="password"
                id="password"
                autoComplete="current-password"
              />     
              </div>       
           <div style={{paddingTop: 20}}>
           <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Согласен на обработку персональных данных в соответствии с политикой конфидинциальности"
              />
            </Grid>
           </div>
            
        </form>
        </Grid>
      </Grid>
      
    </div>
    );
  }    

  