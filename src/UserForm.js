import React, { useState } from 'react';

function UserForm({ onUserSubmit }) {

    const [user, setUser] = useState(
        {
            name: "", email: ""
        }
    );

    let name, value;


    const handleInputChange = (e) => {

        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]: value})


    }

    const handleSubmit = (e) => {
        // Prevent the form from submitting the default way
        e.preventDefault();

        // Pass the user data to the parent component
        onUserSubmit(user);

        // Reset the form
        setUser({ name: "", email: "" });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                name="name" // Add the "name" attribute to differentiate inputs
                value={user.name}
                onChange={handleInputChange}
            />
            <input
                type="email"
                placeholder="Email"
                name="email" // Add the "name" attribute to differentiate inputs
                value={user.email}
                onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default UserForm;
