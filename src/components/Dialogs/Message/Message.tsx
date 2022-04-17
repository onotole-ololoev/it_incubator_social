import React from "react";

type MessageType = {
    message: string
}
const Message = (props: MessageType) => {
    return (
        <div>
            {props.message}
        </div>
    );
};

export default Message;