import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react';
import { Navbar } from 'react-chat-elements';

const StyledNavbar = styled(Navbar)`
    display: flex;
    justify-content: space-between;

    div & .rce-navbar-item__left{
        width: 40%;
        background-color: #b6efed;
    }

    div & .rce-navbar-item__center {
        width: 60%;
        background-color: #e8faf980;
    }
`

const TopNav = () => {
    const centered: boolean = true;
    return (
        <Box sx={{ height: '6vh' }}>
            <StyledNavbar
                left={
                    <Box sx={{ width: '40%', }}>
                        <Box component='img'
                            src='https://avatars.githubusercontent.com/u/80540635?v=4'
                            sx={{ width: '50px', p: .6, borderRadius: '50%', }} />
                    </Box>}
                center={centered ?
                    (<Box sx={{}}>
                        <Box
                            component='img'
                            src='https://avatars.githubusercontent.com/u/41473129?v=4'
                            sx={{ width: '50px', p: .6, borderRadius: '50%', ml: 4 }} />
                    </Box>
                    ) : (false)}
            />
        </Box>
    )
}
export default TopNav;