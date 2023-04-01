import React from 'react'
import {Modal,ModalBody,ModalContent,ModalFooter,ModalHeader,ModalCloseButton} from '@chakra-ui/modal'
import {ModalOverlay,Button} from '@chakra-ui/react'
import { TextField } from '../TextField'
import {Formik,Form} from 'formik'
import * as Yup from "yup"

export const AddFriendModal = ({isOpen,onClose}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader>
                Agregar Amigo
            </ModalHeader>
            <ModalCloseButton/>
            <Formik
            initialValues={{friendName: ""}}
            validationSchema ={Yup.object({
                friendName: Yup.string().required("Usuario requerido")
                .min(6,"El usuario debe tener mas de 6 caracteres")
                .max(28,"El usuario debe tener menos de 28 caracteres"),
            })}
            onSubmit={(values) => {
                //alert(JSON.stringify(values,null,2));
                onClick={onClose}
                
            }}
            >
                <Form>
                    <ModalBody>
                        <TextField label="Nombre de amigo" placeholder="Ingresa el nombre de un amigo"
                        autoComplete="off" name="friendName"/>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue'  type="submit">
                        Agregar
                        </Button>
                    </ModalFooter>
                </Form>
            </Formik>
        </ModalContent>
    </Modal>
  )
}
