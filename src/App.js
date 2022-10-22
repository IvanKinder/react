import './App.css';
import Message from "./components/Message";
import {useState} from "react";
import MyMessages from "./components/MessageList";
import MyForm from "./components/MyForm";
import Chats from "./components/Chats";

function App() {
    const [messageList, setMessageList] = useState([])

    return (
        <>
            <div className="App">
                <div className="body-container">
                    <div>
                        <Chats/>
                    </div>
                    <div>
                        <header className="App-header">
                            <Message name={'Ivan'}/>
                        </header>
                        <div>
                            <MyForm messageList={messageList} setMessageList={setMessageList}/>
                        </div>
                        <div className="MessageList">
                            <MyMessages messageList={messageList}/>
                        </div>
                    </div></div>
            </div>
        </>
    );
}

export default App;
