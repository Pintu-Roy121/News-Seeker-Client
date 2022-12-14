import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Contexts/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName)
    const photoURLRef = useRef(user?.photoURL)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(photoURLRef.current.value);
    }

    const handleChange = (event) => {
        setName(event.target.value);
    }

    return (
        <div>
            <h4 className='fs-2 text-info'>Edit Profile: </h4>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL:</Form.Label>
                    <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="photoURL" placeholder="PhotoURL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Name:</Form.Label>
                    <Form.Control onChange={handleChange} defaultValue={name} type="text" placeholder="name" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Profile;