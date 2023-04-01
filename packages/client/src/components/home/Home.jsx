import { Grid, GridItem, Tabs } from '@chakra-ui/react'
import React, { createContext,useState } from 'react'
import { Sidebar } from './Sidebar'
import {Chat} from './Chat'
import useSocketSetup from '../../hooks/useSocketSetUp';

export const FriendContext = createContext();

export const Home = () => {

    const [friendList, setFriendList] = useState([
        {
            username: "Luis Gumiel",
            connected: false,
        },
        {
            username: "Jose Pardo",
            connected: true,
        },
        {
            username: "Jose Jose",
            connected: true,
        },
    ]);

    useSocketSetup();


  return (
    <FriendContext.Provider value={{friendList,setFriendList}}>
    <Grid templateColumns='repeat(10,1fr)' h='100vh' as={Tabs}>
        <GridItem colSpan="3" borderRight='1px solid gray'>
            <Sidebar/>
        </GridItem>
        <GridItem colSpan="7">
            <Chat/>
        </GridItem>
    </Grid>
    </FriendContext.Provider>
  )
}
