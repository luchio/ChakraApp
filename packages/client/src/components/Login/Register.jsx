import { Button, ButtonGroup, Heading, VStack } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Form, Formik } from 'formik';
import React from 'react'
import { TextField } from './TextField';
import * as Yup from "yup"
import { useNavigate } from 'react-router-dom';

export const Register = () => {

  const navigate = useNavigate();
  return (
    <Formik
    initialValues={ {username: '', password: ''}}
        validationSchema = {Yup.object({
            username: Yup.string().required("Usuario requerido")
            .min(6,"El usuario debe tener mas de 6 caracteres")
            .max(28,"El usuario debe tener menos de 28 caracteres"),
            password: Yup.string().required("Password requerido")
            .min(6,"El password debe tener mas de 6 caracteres")
            .max(28,"El password debe tener menos de 28 caracteres"),
        })}
        onSubmit= {(values,actions) => {
           const vals = {...values}
           actions.resetForm();

           fetch("http://localhost:4000/auth/register",{
            method:'POST',
            credentials:'include',
            headers:{
              "Content-type":"application/json",
            },
            body: JSON.stringify(vals)
           }).catch(err=>{
            return;
           }).then(res=>{
            if(!res || !res.ok || res.status >= 400){
              return;
            }
            return res.json();
           }).then(data=>{
            if(!data) return
            console.log(data);
           })

        }}>

        {
            
            <VStack as={Form} w={{base: '90%', md: '500px'}} m='auto' justifyContent='center' h='100vh' spacing={'1rem'}>

                <Heading>Registro</Heading>

                <TextField name='username' label='Usuario' placeholder='Ingresa el usuario' autoComplete='off'/>
                <TextField name='password' label='Password' placeholder='Ingresa el password' autoComplete='off'/>
                <ButtonGroup pt='1rem'>
                    <Button colorScheme={'teal'} type='submit'>Registrase</Button>
                    <Button onClick={()=>navigate('/')} leftIcon={<ArrowBackIcon />} > Volver</Button>
                </ButtonGroup>
         </VStack>
        }

   
    
    </Formik>
  )
}
