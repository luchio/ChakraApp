import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, useColorMode } from '@chakra-ui/react'
import React from 'react'

export const ToggleColorMode = () => {

    const {colorMode,toggleColorMode} = useColorMode(); 

  return (
    <Button onClick={() => toggleColorMode()} pos='absolute' top='0' right='0' m='1rem'>
        {colorMode === 'dark'
        ? <SunIcon color='orange.500'/> 
        :<MoonIcon color='blue.700'/>
        }
    </Button>
  )
}
