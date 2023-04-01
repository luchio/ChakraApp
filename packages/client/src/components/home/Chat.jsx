import {useContext} from 'react'
import {TabPanels,TabPanel, VStack} from '@chakra-ui/react'
import {FriendContext} from './Home'
import {Text} from '@chakra-ui/react'

export const Chat = () => {

  const {friendList} = useContext(FriendContext)

  return friendList.length > 0 ? ( 
    <VStack>
        <TabPanels>
            <TabPanel>Friend one</TabPanel>
            <TabPanel>Friend two</TabPanel>
        </TabPanels>
    </VStack>
  ) : (
    <VStack justify="center" pt= "5rem" w="100vh" textAlign = "center" fontSize="lg">
        <TabPanels>
          <TabPanel>
           <Text>No hay amigos... :(</Text>
          </TabPanel>
        </TabPanels>
    </VStack>
  ) 
}
