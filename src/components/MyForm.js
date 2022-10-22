import {useEffect, useRef, useState} from "react";
import {Button, TextField} from "@mui/material";

function MyForm ({messageList, setMessageList}) {
    const emptyMsg = {
        text: '',
        author: '',
        date: new Date()
    },
        [messageBody, setMessageBody] = useState(emptyMsg),
        robotMsg = {
        text: `Hello, ${messageList[messageList.length - 1] ? messageList[messageList.length - 1].author : 'User'}! I am Robot`,
        author: 'Robot',
        date: new Date()
    },
        {text, author, date} = messageBody,
        submitForm = (e) => {
            e.preventDefault()
            if (text && author) {
                setMessageList(prevState => [...prevState, messageBody])
                setMessageBody(emptyMsg)
            }
        },
        nameFieldRef = useRef(null),
        fieldsStyle = {
            margin: '0 0 0 0.5vw'
        }

    useEffect(() => {
        if (messageList[messageList.length - 1] && !['Robot', ''].includes(messageList[messageList.length - 1].author)) {
            setTimeout(() => {
                setMessageBody(robotMsg)
                setMessageList(prevState => [...prevState, robotMsg])
                setMessageBody(emptyMsg)
            }, 500)
        }
        nameFieldRef.current.children[1].children[0]?.focus()
    }, [messageList])

    return(
        <form onSubmit={submitForm}>
            <TextField ref={nameFieldRef} style={fieldsStyle} label="Имя" variant="outlined" value={author} onChange={(e) => {setMessageBody(prevState => ({...prevState, author: e.target.value}))}}/>
            <TextField style={fieldsStyle} label="Текст" variant="filled" value={text} onChange={(e) => {setMessageBody(prevState => ({...prevState, text: e.target.value}))}}/>
            <TextField style={fieldsStyle} variant="outlined" value={date} onChange={(e) => {setMessageBody(prevState => ({...prevState, date: e.target.value}))}}/>
            <Button type="submit" variant="contained" size="large" style={{margin: '0.5vh 0 0 0.5vw'}}>Отправить</Button>
        </form>
    )
}

export default MyForm
