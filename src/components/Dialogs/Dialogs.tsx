import React from 'react';
import style from './Dialogs.module.css'
import {Link} from "react-router-dom";

type DialogType = {
    name: string
    id: number
}
const DialogItem = (props: DialogType) => {
    return (
        <div>
            <Link to={"/profile/" + props.id}>
                {props.name}
            </Link>
        </div>
    );
};

type MessageType = {
    message: string
}
const Message = (props: MessageType) => {
    return (
        <div>
            Yo!!! How are you doing, man????
        </div>
    );
};


const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Don'},
        {id: 3, name: 'Denis'},
        {id: 4, name: 'Di'},
        {id: 5, name: 'Dimas'},
    ]
    let messagesData = [
        {id: 1, message: 'Hi!!!!'},
        {id: 2, message: 'Hi!!!!'},
        {id: 3, message: 'Hi!!!!s'},
        {id: 4, message: 'Hi!!!!'},
        {id: 5, message: 'Hi!!!!s'},
    ]
    let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messagesData.map(m => <Message message={m.message}/>)
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={style.messagesItem}>
                {messagesElements}
            </div>

        </div>
    );
};

export default Dialogs;