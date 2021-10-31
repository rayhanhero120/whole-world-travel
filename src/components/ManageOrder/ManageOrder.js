import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageOrder = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    //delete an user
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure,you want to delete?')
        if (proceed) {
            const url = `http://localhost:5000/users/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingUsers = users.filter(user => user._id !== id);
                        setUsers(remainingUsers);
                    }
                })
        }

    }
    return (
        <div>
            <h2>Here is your all Orders:{users.length}</h2>
            <ul>
                {
                    users.map(user => <li
                        key={user._id}
                    >{user.name}:{user.email}
                        <Link to={`/users/update/${user._id}`}><button>update</button></Link>
                        <button onClick={() => handleDeleteOrder(user._id)}>Delete</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default ManageOrder;