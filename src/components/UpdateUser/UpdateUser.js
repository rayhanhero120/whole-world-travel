import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const [user, setUser] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])


    const handleNameChange = e => {
        const updateName = e.target.value
        const updateUser = { name: updateName, email: user.email }
        setUser(updateUser)

    }

    const handleEmailChange = e => {
        const updateEmail = e.target.value
        const updateUser = { name: user.name, email: updateEmail }
        setUser(updateUser)
    }

    const handleUpdateOrder = e => {
        const url = `http://localhost:5000/users/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Successfully Updated')
                    setUser({})
                }
            })


        e.preventDefault()

    }


    return (
        <div>
            <h2>update:{user.name} {user.email}</h2>
            <p><small>{id}</small></p>
            <form onSubmit={handleUpdateOrder}>
                <input type="text" onChange={handleNameChange} value={user.name || ''} />
                <br />
                <input type="email" onChange={handleEmailChange} value={user.email || ''} />
                <br />
                <input type="submit" value="Update" />

            </form>
        </div>
    );
};

export default UpdateUser;