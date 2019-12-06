import React from 'react';
import Link from '@material-ui/core/Link';

import Grid from '@material-ui/core/Grid';

import './App.css';

export default function RegistrationFinish () {
   
      return (
        <div>
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <hr></hr>
            </Grid>   
        </Grid>

      <Grid container spacing={1}>
        <Grid item xs={4}>
          <hr className="hr"/>    
        </Grid>
        <Grid item xs={4}>
          <p className="orText">Поздравляем!</p>    
        </Grid>
        <Grid item xs={4}>
          <hr className="hr"/>    
        </Grid>
      </Grid> 

      <Grid container spacing={1}>
        <p>Вы зарегистрировались на портале <span className="university"><Link>"Твой университет"</Link></span></p>
        <br></br>
        <p>В целях безопасности вам нужно подтвердить свой email адрес.
            Перейдите по ссылке в письме, отправленном на адрес, указанный при регистрации.</p>
        <br></br>
        <p>После этого вы получите доступ к курсам в личном кабинете!</p>
      </Grid>
     
    </div>
    );
  }    

  