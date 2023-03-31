import { VStack,ButtonGroup,FormControl,FormLabel,Button,FormErrorMessage, Input, Heading, Text } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from "yup"
import { AccountContext } from '../AccountContext'
import { TextField } from './TextField'

export const Login = () => {
    //lo que se le pasa en el as, lo renderice como elemento form html, con los estilos de Vstack
    //Buttongroup los pone lado a lado asi no se tiene que usar css

    /*formik en vez de poner value={formik.values.username}
            onChange={formik.handleChange} onBlur={formik.handleBlur} nos permite 
            desestructurar las propiedades {...formik.getFieldsProps("nombredelinput")}*/

            /*formik tambien provee una mejor manera y mas limpia de ordenar los inputs,
            una de ellas es mediante un componente llamado <Formik></Formik> y en vez de utilizar el hook
            personalizado de formik lo pasamos como props
            formik componente tiene como children una funcion que va a devolver nuestro jsx
            lo que simplificamos: no necesitamos el onSubmit, el componente Form ya lo tiene
            */

    //yup: en required va el error de mensaje
    // const formik = useFormik({
    //     initialValues:{ username: '', password: ''},
    //     validationSchema: Yup.object({
    //         username: Yup.string().required("Usuario requerido")
    //         .min(6,"El usuario debe tener mas de 6 caracteres")
    //         .max(28,"El usuario debe tener menos de 28 caracteres"),
    //         password: Yup.string().required("Password requerido")
    //         .min(6,"El password debe tener mas de 6 caracteres")
    //         .max(28,"El password debe tener menos de 28 caracteres"),
    //     }),
    //     onSubmit: (values,actions) => {
    //         alert(JSON.stringify(values,null,2))
    //         actions.resetForm();
    //     }
    // })
    
    const [error, setError] = useState(null)
    const {setUser} = useContext(AccountContext)
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
 
            fetch("http://localhost:4000/auth/login",{
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
             setUser({...data})
             if(data.status){
                setError(data.status)
             }else if(data.loggedIn){
                 navigate('/home')
             }
            })
        }}>

        {
            
            <VStack as={Form} w={{base: '90%', md: '500px'}} m='auto' justifyContent='center' h='100vh' spacing={'1rem'}>

                <Heading>Log In</Heading>
                <Text as={'p'} color="red.500">
                  {error}
                </Text>

                <TextField name='username' label='Usuario' placeholder='Ingresa el usuario' autoComplete='off'/>
                <TextField name='password' label='Password' type='password'  placeholder='Ingresa el password' autoComplete='off'/>

                {/* <FormControl isInvalid={formik.errors.username && formik.touched.username} >
                    <FormLabel fontSize='lg'>
                        Usuario
                    </FormLabel>
                    <Input name='username' placeholder='Ingresa el nombre de usuario' autoComplete='off' size='lg' 
                    {...formik.getFieldProps('username')}/>
                    <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
                </FormControl> */}
                {/* <FormControl isInvalid={formik.errors.password && formik.touched.password}>
                    <FormLabel fontSize='lg'>
                        Contraseña
                    </FormLabel>
                    <Input name='password' type='password' placeholder='Ingresa la contraseña' autoComplete='off' size='lg' 
                    {...formik.getFieldProps('password')}/>
                    <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                </FormControl> */}

                <ButtonGroup pt='1rem'>
                    <Button colorScheme={'teal'} type='submit'>Log In</Button>
                    <Button onClick={()=>navigate('/register')}> Crear una cuenta</Button>
                </ButtonGroup>
         </VStack>
        }

   
    
    </Formik>
  )
}
