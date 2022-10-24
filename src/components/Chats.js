import {Avatar, Button, IconButton, List, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";
import {useNavigate} from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

function Chats({chatsList, setChatsList, messageList, setMessageList}) {

    const listStyle = {
            margin: '3vh 0 0 2vw',
            overflow: 'auto',
            maxHeight: '80vh',
            maxWidth: '20vw'
        },
        navigate = useNavigate(),
        onChatClick = (e, chatId) => {
        setMessageList([])
            navigate(`/chat/${chatId}`)
        },
        onDelChatClick = (e, chatId) => {
            setChatsList(prevState => {
                const newState = [...prevState]
                newState.forEach((el) => {
                    if (el.id === chatId) {
                        newState.splice(newState.indexOf(el), 1)
                    }
                })
                return newState;
            })
            navigate('/chats')
        },
        onAddChatClick = () => {
            setChatsList(prevState => {
                return [
                    {
                        name: 'New User',
                        id: prevState.length + 1
                    },
                    ...prevState
                ];
            })
            navigate('/chats')
        }

    return (
        <div className="left-panel">
            <List sx={listStyle}>
                {
                    chatsList.map((el) =>
                        <ListItemButton key={el.id}>
                            <ListItemAvatar onClick={(e) => {
                                onChatClick(e, el.id);
                            }}>
                                <Avatar>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={el.name} secondary={el.id} onClick={(e) => {
                                onChatClick(e, el.id);
                            }}/>
                            <IconButton aria-label="delete" onClick={(e) => {
                                onDelChatClick(e, el.id)
                            }}>
                                <DeleteIcon/>
                            </IconButton>
                        </ListItemButton>)
                }
            </List>
            <Button sx={{maxWidth: '150px', marginLeft: '6vw'}} variant="contained" startIcon={<PersonAddAlt1Icon />} onClick={() => {
                onAddChatClick()
            }}>
                Add new
            </Button>
        </div>
    )
}

export default Chats
