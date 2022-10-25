import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Button} from "@mui/material";
import Home from "./Home";
import BodyContainer from "./BodyContainer";
import Profile from "./Profile";
import MyForm from "./MyForm";
import NotFound404 from "./NotFound404";

export default function RouterComponent({chatsList, setChatsList, messageList, setMessageList}) {
    const headerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, auto)',
        listStyleType: 'none'
    }

    return (
        <BrowserRouter>
            <ul style={headerStyle}>
                <li>
                    <Button variant="outlined"><Link to="/">Home</Link></Button>
                </li>
                <li>
                    <Button variant="outlined"><Link to="/profile">Profile</Link></Button>
                </li>
                <li>
                    <Button variant="outlined"><Link to="/chats">Chats</Link></Button>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/chats" element={<BodyContainer chatsList={chatsList} setChatsList={setChatsList} messageList={messageList} setMessageList={setMessageList}/>}/>
                <Route path="/chat">
                    <Route path=":id" element={
                        <MyForm chatsList={chatsList} setChatsList={setChatsList} messageList={messageList} setMessageList={setMessageList}/>
                    }/>
                </Route>
                <Route path="404" element={<NotFound404/>}/>
                <Route path="*" element={<NotFound404/>}/>
            </Routes>
        </BrowserRouter>
    );
}
