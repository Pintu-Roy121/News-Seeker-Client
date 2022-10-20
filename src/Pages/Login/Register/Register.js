import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);

    const { createUserWithEmail, updateUserProfile, emailVarification } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoURL, email, password);

        createUserWithEmail(email, password)
            .then(result => {
                // const user = result.user;
                form.reset();
                navigate('/');
                setError('');
                handleUpdateProfile(name, photoURL);
                handleEmailVerification();
                toast.success('Please verify your Email')
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleTermsCondition = (event) => {
        setAccepted(event.target.checked);
        // console.log(accepted);
    }

    const handleEmailVerification = () => {
        emailVarification()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }


    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(result => { })
            .catch(error => { setError(error); })
    }

    return (
        <div>
            <h3 className='text-success'>Please Register Here: </h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name :</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL : </Form.Label>
                    <Form.Control name='photoURL' type="photo URL" placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address : </Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password : </Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <p className='fs-6 text-danger'>{error}</p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleTermsCondition}
                        type="checkbox"
                        label={<>Accept <Link to='/terms'>Accept Terms and Condition</Link></>}
                    />
                </Form.Group>
                <div className='d-flex flex-column'>
                    <span className='mb-4'>Already Have an Account? <Link to='/login'>Login</Link></span>
                    <Button variant="primary" type="submit" disabled={!accepted}>
                        Register
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Register;