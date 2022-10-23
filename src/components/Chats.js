import {Avatar, List, ListItemButton, ListItemAvatar, ListItemText} from "@mui/material";
import {Link, Navigate, useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";

function Chats ({chatsList, setChatsList, messageList, setMessageList}) {

    const listStyle = {
            margin: '3vh 0 0 2vw',
            overflow: 'auto',
            maxHeight: '80vh',
            maxWidth: '20vw'
        },
        navigate = useNavigate(),
        onChatClick = (e, chatId) => {
            navigate(`/chat/${chatId}`, { state: { id: chatId, chatsList: chatsList, messageList: messageList, setMessageList: setMessageList} })
        }

    return(
        <List sx={listStyle}>
            {
                chatsList.map((el) =>
                    <ListItemButton  key={el.id} onClick={(e) => {
                        onChatClick(e, el.id);}}>
                        <ListItemAvatar>
                            <Avatar>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={el.name} secondary={el.id}/>
                    </ListItemButton >)
            }
        </List>
    )
}

export default Chats
