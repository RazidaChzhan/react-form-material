import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import rightarrow from './images/right-arrow.png'  
import RegistrationStep3 from './Registration_step_3';
import RegistrationStep2 from './Registration_step_2';
import Registration from './Registration_step_1';
import RegistrationFinish from './Registration_Finish'


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
          <div>
            <Registration/>
          </div>
      )
    case 1:
      return (
        <div>
          <RegistrationStep2/>
        </div>
    );
    case 2:
      return (
      <div>
      <RegistrationStep3/>
    </div>
      );
    case 3:
      return (
        <div>
          <RegistrationFinish/>
        </div>
    );
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

  return (
    <div className={classes.root}>
      {/* <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper> */}
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}><RegistrationFinish/></Typography>
            {/* <Button onClick={handleReset}>Reset</Button> */}
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <button className="signIn"  onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Регистрация' : 'Далее'}
                <span>
                  <img src={rightarrow} alt="rightarrow" className="rightArrow"></img>
                </span>
            </button>
              {/* <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
