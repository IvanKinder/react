import {useState} from "react";
import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";

function Chats ({messageList}) {
    const [chatsList, setChatsList] = useState([
        {
            name: 'Kirill',
            id: 0
        },
        {
            name: 'Ivan',
            id: 1
        },
        {
            name: 'Dmitry',
            id: 2
        },
        {
            name: 'Alexander',
            id: 3
        },
        {
            name: 'Marina',
            id: 4
        },
        {
            name: 'John',
            id: 5
        },
        {
            name: 'Petr',
            id: 6
        },
        {
            name: 'Kirill',
            id: 0
        },
        {
            name: 'Ivan',
            id: 1
        },
        {
            name: 'Dmitry',
            id: 2
        },
        {
            name: 'Alexander',
            id: 3
        },
        {
            name: 'Marina',
            id: 4
        },
        {
            name: 'John',
            id: 5
        },
        {
            name: 'Petr',
            id: 6
        },
        {
            name: 'Kirill',
            id: 0
        },
        {
            name: 'Ivan',
            id: 1
        },
        {
            name: 'Dmitry',
            id: 2
        },
        {
            name: 'Alexander',
            id: 3
        },
        {
            name: 'Marina',
            id: 4
        },
        {
            name: 'John',
            id: 5
        },
        {
            name: 'Petr',
            id: 6
        },
        {
            name: 'Kirill',
            id: 0
        },
        {
            name: 'Ivan',
            id: 1
        },
        {
            name: 'Dmitry',
            id: 2
        },
        {
            name: 'Alexander',
            id: 3
        },
        {
            name: 'Marina',
            id: 4
        },
        {
            name: 'John',
            id: 5
        },
        {
            name: 'Petr',
            id: 6
        },
        {
            name: 'Kirill',
            id: 0
        },
        {
            name: 'Ivan',
            id: 1
        },
        {
            name: 'Dmitry',
            id: 2
        },
        {
            name: 'Alexander',
            id: 3
        },
        {
            name: 'Marina',
            id: 4
        },
        {
            name: 'John',
            id: 5
        },
        {
            name: 'Petr',
            id: 6
        },
        {
            name: 'Kirill',
            id: 0
        },
        {
            name: 'Ivan',
            id: 1
        },
        {
            name: 'Dmitry',
            id: 2
        },
        {
            name: 'Alexander',
            id: 3
        },
        {
            name: 'Marina',
            id: 4
        },
        {
            name: 'John',
            id: 5
        },
        {
            name: 'Petr',
            id: 6
        }
    ]),
        listStyle = {
            margin: '10vh 0 0 2vw',
            overflow: 'auto',
            maxHeight: '80vh'
        }

    return(
        <List sx={listStyle}>
            {
                chatsList.map((el, i) =>
                    <ListItem key={i}>
                        <ListItemAvatar>
                            <Avatar>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={el.name} secondary={el.id}/>
                    </ListItem>)
            }
        </List>
    )
}

export default Chats
