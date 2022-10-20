import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');

    const location = useLocation();
    const from = location.state?.form?.pathname || '/';

    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                if (user?.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('OPPs..... Your Email is not varified...!!')
                }

                form.reset();
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })


    }
    return (
        <div>
            <h3 className='fs-3 fw-bold text-primary'>Please Login Here:</h3>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address: </Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <p className='fs-6 text-danger'>{error}</p>
                <div className='d-flex flex-column'>
                    <span className='mb-4'>Do not Have an Account? <Link to='/register'>Register</Link></span>
                    <Button variant="primary" type="submit">
                        Log in
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Login;