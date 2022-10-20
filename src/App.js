import './App.css';
import Message from "./components/Message";
import {useState} from "react";
import MyMessages from "./components/MessageList";
import MyForm from "./components/MyForm";

function App() {
    const [messageList, setMessageList] = useState([])

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <Message name={'Ivan'}/>
                </header>
                <div>
                    <MyForm messageList={messageList} setMessageList={setMessageList}/>
                </div>
                <div className="MessageList">
                    <MyMessages messageList={messageList}/>
                </div>
            </div>
        </>
    );
}

export default App;
