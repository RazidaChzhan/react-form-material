import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import './App.css';
import facebook from './images/facebook-logo.png';
import google from './images/Google.svg';
import vkontakte from './images/vk-logo.png';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
 
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },  
}));

export default function Authorization (){
  const classes = useStyles();
    return (      
        <div>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <p>Авторизуйтесь в системе 
            <br></br>для доступа к образовательным курсам</p>
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
        <Grid item xs={4}>
          <hr className="hr"/>    
        </Grid>
        <Grid item xs={4}>
          <p className="orText">или</p>    
        </Grid>
        <Grid item xs={4}>
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
            id="email"
            label="Введите E-mail"
            name="email"
            autoComplete="email"
            autoFocus
            />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
            />            
          </form>
        </Grid>
      </Grid>    

      <Grid container spacing={1}>
        <Grid item xs={5}></Grid>
        <Grid item xs={3}>
          <div style={{paddingTop: 15}}>
            <a href="#" className="forgotPassword">
              Забыли пароль?
            </a>
          </div>      
        </Grid>
        <Grid item xs={4}>
          <button className="signIn">
            Войти
          </button>
        </Grid>
      </Grid>               
  </div>
  );
}
