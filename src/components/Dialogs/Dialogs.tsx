import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import state, {DialogsType, MessagesType} from "../../redux/state";

type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message}/>)
    // let dialogsElements = state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    // let messagesElements = state.dialogsPage.messages.map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>();
    const addMessage = () => {
        let message = newMessageElement.current?.value;
        alert(message)
    }


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={style.messagesItem}>
                {messagesElements}
            </div>
            <textarea ref={newMessageElement}></textarea>
            <button onClick={addMessage}>add message</button>
        </div>
    );
};

export default Dialogs;