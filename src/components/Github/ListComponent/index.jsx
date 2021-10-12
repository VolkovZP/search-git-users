import React, { useEffect, useState } from 'react'
import style from './style.module.css'
export default function ListComponent(props) {
    const { selected } = style
    const { user, fetchFunc, setUserSelected, userSelected, tempUser } = props;

    useEffect(() => {
        fetchFunc(tempUser)
    }, [])

    useEffect(() => {
        if (userSelected) {
            document.title = userSelected
        }
    }, [userSelected])

    return (
        <ul>
            {user.map(({ login, id }) => <li className={userSelected === login ? selected : undefined} onClick={() => {
                setUserSelected(login)
            }} key={id}>{login}</li>)}
        </ul>
    )
}
