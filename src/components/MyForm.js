import {useEffect, useRef, useState} from "react";
import {Button, TextField} from "@mui/material";
import Message from "./Message";
import MyMessages from "./MessageList";
import Chats from "./Chats";
import {useLocation, useNavigate, useParams} from "react-router-dom";

function MyForm({chatsList, setChatsList, messageList, setMessageList}) {
    let {id} = useParams(),
        contact = undefined
    const {state} = useLocation(),
        navigate = useNavigate()

    if (state) {
        id = state.id
    }

    if (chatsList) {
        chatsList.forEach((el) => {
            if (parseInt(el.id) === parseInt(id)) {
                contact = el.name
            }
        })}

    const emptyMsg = {
            text: '',
            author: '',
            date: new Date()
        },
        [messageBody, setMessageBody] = useState(emptyMsg),
        robotMsg = {
            text: `Hello, ${messageList[messageList.length - 1] ? messageList[messageList.length - 1].author : 'User'}! I am ${contact}`,
            author: contact,
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
        if (contact === undefined) {
            navigate('/404')
        }
        if (messageList[messageList.length - 1] && ![contact, ''].includes(messageList[messageList.length - 1].author)) {
            setTimeout(() => {
                setMessageBody(robotMsg)
                setMessageList(prevState => [...prevState, robotMsg])
                setMessageBody(emptyMsg)
            }, 500)
        }
        nameFieldRef.current.children[1].children[0]?.focus()
    }, [messageList])

    return (
        <div className="body-container">
            <Chats chatsList={chatsList} setChatsList={setChatsList} messageList={messageList} setMessageList={setMessageList}/>
            <div>
                <header className="App-header">
                    <Message name={'Ivan'}/>
                </header>
                <div>
                    <form onSubmit={submitForm} style={{margin: '2vh 0 0 0'}}>
                        <TextField ref={nameFieldRef} style={fieldsStyle} label="Имя" variant="outlined" value={author}
                                   onChange={(e) => {
                                       setMessageBody(prevState => ({...prevState, author: e.target.value}))
                                   }}/>
                        <TextField style={fieldsStyle} label="Текст" variant="filled" value={text} onChange={(e) => {
                            setMessageBody(prevState => ({...prevState, text: e.target.value}))
                        }}/>
                        <TextField style={fieldsStyle} variant="outlined" value={date} onChange={(e) => {
                            setMessageBody(prevState => ({...prevState, date: e.target.value}))
                        }}/>
                        <Button type="submit" variant="contained" size="large"
                                style={{margin: '0.5vh 0 0 0.5vw'}}>Отправить</Button>
                    </form>
                </div>
                <div className="MessageList">
                    <MyMessages messageList={messageList}/>
                </div>
            </div>
        </div>
    )
}

export default MyForm
