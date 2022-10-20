import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const PrivateRoutes = ({ children }) => {

    const location = useLocation();

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Spinner animation="border" className='position-absolute start-50' variant="primary" />
    }
    if (!user) {
        return <Navigate to='/login' state={{ form: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoutes;