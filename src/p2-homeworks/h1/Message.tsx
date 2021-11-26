import React from 'react';
import s from "./Message.module.css";

export type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

export function Message(props: PropsType) {
    return (
        <div className={s.message}>
            <img className={s.img} src={props.avatar} alt="avatar"/>
            <div className={s.angle}/>

            <div className={s.textMessage}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>

        </div>
    )
}


