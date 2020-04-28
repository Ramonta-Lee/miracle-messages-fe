import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


import TextField from '@material-ui/core/TextField';
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      width: '100%',
      height: '100vh'
  },
    imgContainer: {
      width: '100%',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      paddingTop: '20%',
      alignContent: 'baseline',
    },
    imgStyling: {
      width: '44%',
    },
    h3Styling: {
      color: '#fff',
      width: '100%',
      textAlign: 'center',
      padding: '0 25%',
      marginTop: '15px',
    },
    stepper: {
      width: '100%',
      margin: '0 20%',
      background: 'transparent',
      color: 'green',
    },
    stepperSide: {
      width: '60%',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      padding: '11%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
     
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      '& button': {
        minWidth:  '100px',
        width:  'auto',
      },
    },
    button: {
      margin: '0 5px',
      backgroundColor: 'green',
      color: 'white',
      '&:hover': {
        backgroundColor: '#008000a8'
      },
    },
    leftButton: {
      margin: '0 5px',
      backgroundColor: 'white',
      border: 'solid green 1px',
      color: 'green',
      '&:hover': {
        backgroundColor: '#008000a8',
        color: 'white',
        border: 'solid #008000a8 1px',
      },
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
     
    link: {
        color: 'black',
        textDecoration: 'none',
        '&:hover': {
          color: 'green',
        }
    }
    },
      stepInner: {
        '& svg': {
          color: '#008000a8',
        }
      },
    mobileLogo: {
      display: 'none',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
      },
    },
    formContainer: {
      textAlign: 'center',
    } 
    
  }));

const AddActiveVolunteer = () => {
    const classes = useStyles();
    const history = useHistory();
    const [ activeVolunteer, setActiveVolunteer ] = useState({});
    const [ password, setPassword ] = useState({});

    const goToMap = () => {
        history.push('/')
      }


    const onChangeHandler = e => {
        setActiveVolunteer({
          ...activeVolunteer,
          [e.target.name]: e.target.value
        })
      }
    const onChangeHandlerPassword = e => {
        setPassword({
          ...password,
          [e.target.name]: e.target.value
        })
      }

      const handleSubmit = () => {
        const testVolunteer = {
            "profile": {
                "firstName": "test",
                "lastName": "test",
                "email": "test@gmail.com",
                "login": "test@gmail.com",
                "city": "lynden",
                "state": "WA",
                "countryCode": "US"
            },
            "credentials": {
                "password" : "Password1"
            }
        }
        axiosWithAuth()
          .post("https://dev-636641.okta.com/api/v1/users?activate=true", {profile: activeVolunteer, credentials: password}, {
            headers: { Authorization: "SSWS 00vNIF6IxuEoWd2IHolCX0K0iww-P0LWyudJXARNKW"} })
          .then(res => {
            console.log(res)

          })
          .catch(error => {
            console.log(error)
            console.log(error.response)
          })
    
      }


    return (
        <>
        <h1>Add Volunteer</h1>
        <div className={classes.formContainer} >
          
          <div className='textFieldContainer'>
        <TextField name='firstName' onChange={onChangeHandler} className='inputField' id="firstname" label="First Name" variant="outlined" />
        <br/>
        <TextField name='lastName' onChange={onChangeHandler} className='inputField' id="outlined-basic" type='lastname' label="Last Name" variant="outlined" />
        <br/>
        <TextField name='city' onChange={onChangeHandler} className='inputField' id="outlined-basic" type='city' label="City" variant="outlined" />
        <br/>
        <TextField name='state' onChange={onChangeHandler} className='inputField' id="outlined-basic" type='state' label="State" variant="outlined" />
        <br/>
        <TextField name='countryCode' onChange={onChangeHandler} className='inputField' id="outlined-basic" type='country' label="Country" variant="outlined" />
        <br/>
        <TextField name='email' onChange={onChangeHandler} className='inputField' id="outlined-basic" type='email' label="Email" variant="outlined" />
        <br/>
        <TextField name='login' onChange={onChangeHandler} className='inputField' id="outlined-basic" type='login' label="Login" variant="outlined" />
        <br/>
        <TextField name='password' onChange={onChangeHandlerPassword} className='inputField' id="outlined-basic" type='password' label="password" variant="outlined" />
        </ div>
              <div  className={classes.buttonContainer}>
            <Button onClick={goToMap} className={classes.leftButton}>
                  BACK
              </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                className={classes.button}
              >Complete</Button>

          </div>
          </div>
        </>
    )
}

export default AddActiveVolunteer; 