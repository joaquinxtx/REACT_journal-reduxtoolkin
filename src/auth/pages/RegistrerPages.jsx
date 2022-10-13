import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useMemo, useState } from "react";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";

const formData = {
  email:'',
  password:'',
  displayName:''
}

const formValidations = {
  email:[(value) => value?.includes('@'), 'El Email debe tener @.'],
  password:[(value) => value?.length >= 6, 'El password debe tener mas de 6 caracteres.'],
  displayName:[(value)=> value?.length >= 1, 'El nombre es obligatorio.']
}

export const RegistrerPages = () => {

  const dispatch = useDispatch()

  const [formSubmited, setFormSubmited] = useState(false)

  const{status,errorMessage }=useSelector(state => state.auth);

  const isCheckingAuthentication = useMemo(()=>status === 'checking',[status])

  const {displayName,email,password,onInputChange,formState,displayNameValid,emailValid,passwordValid,isFormValid}=useForm(formData,formValidations)
  
  
  
  const onSubmit = (event)=>{
    event.preventDefault();
    setFormSubmited(true)

    if (!isFormValid)return;
    dispatch(startCreatingUserWithEmailPassword(formState))
  }
  return (
    <AuthLayout title="Crear Cuenta">
      <h1></h1>
        <form 
        className='animate__animated animate__fadeIn animate__faster'
        onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
              label='Nombre Completo'
              type='Text'
              placeholder='Escrible tu nombre'
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmited}
              helperText={displayNameValid}/>

            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
              label='correo'
              type='email'
              placeholder='Correo@google.com'
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmited}
              helperText={emailValid} />

            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
              label='contraseña'
              type='Password'
              placeholder='Contraseña'
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmited}
              helperText={passwordValid} />

            </Grid>

            <Grid container spacing={2} sx={{mb:2 ,mt:1}} >
              <Grid item 
              xs={12} 
              sm={12}
              display={!!errorMessage?'':'none'}>
                <Alert severity="error">{errorMessage} </Alert>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Button 
                disabled={isCheckingAuthentication}
                variant='contained' 
                fullWidth
                type='submit'
                sx={{color:'white'}}
                >
                  Crear cuenta
                </Button>
              </Grid>
              

            </Grid>

            <Grid container direction='row' justifyContent='end' >
              <Typography sx={{mr:1}} >¿Ya tienes Cuenta?</Typography>
              <Link component={RouterLink} color='inherit' to='/auth/login' >
                ingresar
              </Link>

            </Grid>

          </Grid>
        </form>
    </AuthLayout>
  )
}
