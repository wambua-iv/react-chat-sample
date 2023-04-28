import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react';
import { ChatList } from 'react-chat-elements';

const StyledChatList = styled(ChatList)`
    width: 94%;
    padding: 8px;
    margin: auto;
    color: #000;
    background-color: #b6efed;

    div & .rce-citem{
        height: 100px;
        display: flex;
        border-radius: 12px;
        background-color: #e8faf980;
        margin-top: 8px;
        z-index:10;
    }

    div & .rce-citem-avatar {
        width: 15%;
        height: 60%;
        margin: auto;
        margin-left: 8px;

        div > img {
            border-radius: 50%;
            width: 60px;
            

        }
    }

    div & .rce-citem-body{
        padding: 8px;

        &--top{
            display: flex;
            justify-content: space-between;
            &-title{
                font-weight: 600;
                font-size: 18px;
                margin-bottom: 12px;
            }
            &-time{
                    font-weight: 200;
                    font-size: 12px;
            }
        }
    }

`

const Sidebar = () => {
    return (
        <Box
            sx={{ backgroundColor: '#b6efed', width: '40%', height: '90vh' }}
        >
            <StyledChatList
                id={8988}
                dataSource={[
                    {
                        avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                        alt: 'kursat_avatar',
                        title: 'Kursat',
                        subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                        date: new Date('December 17, 2022 03:24:00'),
                        unread: 3,
                        id: 'my mane'
                    },
                    {
                        avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                        alt: 'kursat_avatar',
                        title: 'Kursat',
                        subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                        date: new Date(),
                        unread: 3,
                        id: 'my mane'
                    },
                    {
                        avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                        alt: 'kursat_avatar',
                        title: 'Kursat',
                        subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                        date: new Date(),
                        unread: 3,
                        id: 'my mane'
                    },
                    {
                        avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                        alt: 'kursat_avatar',
                        title: 'Kursat',
                        subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                        date: new Date(),
                        unread: 3,
                        id: 'my mane'
                    },
                    {
                        avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                        alt: 'kursat_avatar',
                        title: 'Kursat',
                        subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                        date: new Date(),
                        unread: 3,
                        id: 'my mane'
                    },
                    {
                        avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                        alt: 'kursat_avatar',
                        title: 'Kursat',
                        subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                        date: new Date(),
                        unread: 3,
                        id: 'my mane'
                    },
                    {
                        avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                        alt: 'kursat_avatar',
                        title: 'Kursat',
                        subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                        date: new Date(),
                        unread: 3,
                        id: 'my mane'
                    }
                ]}
            />
        </Box>
    )
}

export default Sidebar;
