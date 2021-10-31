import React, { useRef } from 'react';


const AddUser = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const handleAddUser = e => {
        const name = nameRef.current.value
        const email = emailRef.current.value

        const newUser = { name, email }
        fetch('https://ghastly-shadow-01497.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('added successfully')
                    e.target.reset()
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <h2>please add your order </h2>

            <form onSubmit={handleAddUser}>
                <input type="text" ref={nameRef} />
                <br />
                <input type="email" name="" id="" ref={emailRef} />
                <br />
                <input type="submit" value="Order" />


            </form>

        </div>
    );
};

export default AddUser;