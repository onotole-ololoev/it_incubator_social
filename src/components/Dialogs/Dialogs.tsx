import React from 'react';
import style from './Dialogs.module.css'
import {Link} from "react-router-dom";

type DialogType = {
    name: string
    id: string
}
const Dialog = (props: DialogType) => {
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
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <Dialog name={'Ivan'} id={'1'}/>
                <Dialog name={'John'} id={'2'}/>
                <Dialog name={'Alex'} id={'3'}/>
                <Dialog name={'Misha'} id={'4'}/>
                <Dialog name={'Bob'} id={'5'}/>
            </div>
            <div className={style.messagesItem}>
                <Message message={'Yo!!! How are you doing, man????'}/>
                <Message message={'Sorrry... I cant'}/>
                <Message message={'Were you on the vacation last month?'}/>
            </div>

        </div>
    );
};

export default Dialogs;