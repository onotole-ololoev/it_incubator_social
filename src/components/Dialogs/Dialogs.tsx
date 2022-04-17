import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import state from "../../redux/state";


const Dialogs = () => {

    let dialogsElements = state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.dialogsPage.messages.map(m => <Message message={m.message}/>)
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