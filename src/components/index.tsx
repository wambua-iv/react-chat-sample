import { Box, Container } from '@mui/material';
import React from 'react';
import Sidebar from './Sidebar';
import TopNav from './Navbar';


const ChatPage = () => {
    return (
        <Container maxWidth='xl'>
            <Box sx={{ backgroundColor: '#9cd4d2', borderRadius: '24px', overflow: 'hidden'}}>
                <TopNav />
                <Box className='aside'>
                    <Sidebar />
                </Box>
                <Box className='chat-area'></Box>
            </Box>
            
        </Container>
    )
}
export default ChatPage;