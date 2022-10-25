import Chats from "./Chats";

function BodyContainer ({chatsList, setChatsList, messageList, setMessageList}) {

    return(
        <div>
            <div>
                <div>
                    <Chats chatsList={chatsList} setChatsList={setChatsList} messageList={messageList} setMessageList={setMessageList}/>
                </div>
            </div>
        </div>
    )
}

export default BodyContainer
