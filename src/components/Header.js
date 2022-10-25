import RouterComponent from "./RouterComponent";
import {useState} from "react";

function Header () {
    const
        [chatsList, setChatsList] = useState([
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
                id: 7
            },
            {
                name: 'Ivan',
                id: 8
            },
            {
                name: 'Dmitry',
                id: 9
            },
            {
                name: 'Alexander',
                id: 10
            },
            {
                name: 'Marina',
                id: 11
            },
            {
                name: 'John',
                id: 12
            },
            {
                name: 'Petr',
                id: 13
            },
            {
                name: 'Kirill',
                id: 14
            },
            {
                name: 'Ivan',
                id: 15
            },
            {
                name: 'Dmitry',
                id: 16
            },
            {
                name: 'Alexander',
                id: 17
            },
            {
                name: 'Marina',
                id: 18
            },
            {
                name: 'John',
                id: 19
            },
            {
                name: 'Petr',
                id: 20
            },
            {
                name: 'Kirill',
                id: 21
            },
            {
                name: 'Ivan',
                id: 22
            },
            {
                name: 'Dmitry',
                id: 23
            },
            {
                name: 'Alexander',
                id: 24
            },
            {
                name: 'Marina',
                id: 25
            },
            {
                name: 'John',
                id: 26
            },
            {
                name: 'Petr',
                id: 27
            },
            {
                name: 'Kirill',
                id: 28
            },
            {
                name: 'Ivan',
                id: 29
            },
            {
                name: 'Dmitry',
                id: 30
            },
            {
                name: 'Alexander',
                id: 31
            },
            {
                name: 'Marina',
                id: 32
            },
            {
                name: 'John',
                id: 33
            },
            {
                name: 'Petr',
                id: 34
            },
            {
                name: 'Kirill',
                id: 35
            },
            {
                name: 'Ivan',
                id: 36
            },
            {
                name: 'Dmitry',
                id: 37
            },
            {
                name: 'Alexander',
                id: 38
            },
            {
                name: 'Marina',
                id: 39
            },
            {
                name: 'John',
                id: 40
            },
            {
                name: 'Petr',
                id: 41
            }
        ]),
        [messageList, setMessageList] = useState([])
    return(
        <div>
            <RouterComponent chatsList={chatsList} setChatsList={setChatsList} messageList={messageList} setMessageList={setMessageList}/>
        </div>
    )
}

export default Header
