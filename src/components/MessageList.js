import Message from "./Message";

function MyMessages ({messageList}) {
    return(
        <div className='message-container'>
            {
                messageList.map((el, i) => <Message
                text={el.text} author={el.author} date={el.date}
                key={i}
                />)
            }
        </div>
    )
}

export default MyMessages
