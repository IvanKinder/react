import {useEffect, useState} from "react";

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
        }

    useEffect(() => {
        if (messageList[messageList.length - 1] && !['Robot', ''].includes(messageList[messageList.length - 1].author)) {
            setTimeout(() => {
                setMessageBody(robotMsg)
                setMessageList(prevState => [...prevState, robotMsg])
                setMessageBody(emptyMsg)
            }, 500)
        }
    })

    return(
        <form onSubmit={submitForm}>
            <input placeholder='Имя' value={author} onChange={(e) => {setMessageBody(prevState => ({...prevState, author: e.target.value}))}}/>
            <input placeholder='Текст' value={text} onChange={(e) => {setMessageBody(prevState => ({...prevState, text: e.target.value}))}}/>
            <input placeholder='Дата' value={date} onChange={(e) => {setMessageBody(prevState => ({...prevState, date: e.target.value}))}}/>
            <button type="submit">Отправить</button>
        </form>
    )
}

export default MyForm
