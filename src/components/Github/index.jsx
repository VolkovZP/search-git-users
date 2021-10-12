import React, { useState } from 'react'
import ListComponent from './ListComponent';
import UserInfoComponent from './UserInfoComponent';

export default function HeaderComponent() {
    const [user, setUser] = useState([]);
    const [tempUser, setTempUser] = useState('test');
    const [userSelected, setUserSelected] = useState(null);

    const fetchFunc = (link) => {
        fetch(`https://api.github.com/search/users?q=${link}`)
            .then(res => res.json())
            .then(data => setUser(data.items))
    }

    return (
        <div>
            <input value={tempUser} onChange={(e) => setTempUser(e.currentTarget.value)} type="text" placeholder='search' /><button onClick={
                () => { fetchFunc(tempUser) }
            }>find</button>
            <ListComponent user={user} tempUser={tempUser} fetchFunc={fetchFunc} userSelected={userSelected} setUserSelected={setUserSelected} />
            <UserInfoComponent userSelected={userSelected} />
        </div>
    )
}
