import React from 'react';
import style from './../Dialogs.module.css'
import {Link} from "react-router-dom";

type DialogType = {
    name: string
    id: number
}
const DialogItem = (props: DialogType) => {
    let path = "/profile/" + props.id
    return (
        <div>
            <Link to={path}>
                {props.name}
            </Link>
        </div>
    );
};

export default DialogItem;