import { ChatIcon } from '@chakra-ui/icons'
import { Button, Divider, HStack, Heading, VStack,Text,Circle, useDisclosure } from '@chakra-ui/react'
import {Tab,TabList} from '@chakra-ui/tabs'
import React, { useContext } from 'react'
import {FriendContext} from './Home'
import {AddFriendModal} from './AddFriendModal'

export const Sidebar = () => {

    const {friendList,setFriendList} = useContext(FriendContext);
    const {isOpen, onOpen, onClose} = useDisclosure()
  return (
    <>
        <VStack py="1.4rem">
        <HStack justify='space-evenly' w='100%'>
            <Heading size='md'>Añadir Amigo</Heading>
            <Button onClick={onOpen}>
                <ChatIcon/>
            </Button>
        </HStack>
        <Divider/>
        <VStack as={TabList}>
            {friendList.map((friend,index) => (
                <HStack key={index} as={Tab}>
                <Circle bg={friend.connected ? "green.700" : "red.500"} w="20px" h="20px"/>
                    <Text>
                       {friend.username}
                    </Text>
                </HStack>
            ))}
            </VStack>
        </VStack>
        <AddFriendModal isOpen={isOpen} onClose={onClose}/>
    </>
  )
}
