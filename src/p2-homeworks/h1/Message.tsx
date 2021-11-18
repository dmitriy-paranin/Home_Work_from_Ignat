import React from 'react';
import s from "./Message.module.css";




type PropsType = {
    avatar:any
    name:string
    message:string
    time:string
}

export function Message(props: PropsType) {
    return (
        <div className={s.message}>
            <img className={s.img} src={props.avatar} alt=""/>

            <div className={s.textMessage}>
                <div className={s.name}>{props.name}</div>
                <div>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>

        </div>
    )
}


