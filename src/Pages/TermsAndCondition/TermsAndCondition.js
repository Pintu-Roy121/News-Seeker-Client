import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <p>Check Terms and Condition </p>
            <span>Go Back to Registration:<Link to='/register'>Registrarion</Link></span>
        </div>
    );
};

export default TermsAndCondition;