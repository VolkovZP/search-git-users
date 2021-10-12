import React, { useState, useEffect } from 'react'


export default function UserInfoComponent(props) {
    const { userSelected } = props
    const [userDetails, setUserDetais] = useState([]);



    useEffect(() => {
        if (userSelected) {
            fetch(`https://api.github.com/users/${userSelected}`)
                .then(res => res.json())
                .then(data => setUserDetais(data))
        }

    }, [userSelected])

    return (
        <div>
            <h2>UserName</h2>
            {userDetails && <div>
                <img src={userDetails.avatar_url} />
                <br />
                {userDetails.login} followers : {userDetails.followers}
            </div>}
        </div >
    )
}
