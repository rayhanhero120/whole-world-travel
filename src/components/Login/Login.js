import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.form || '/home'


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })

    }

    return (
        <div>
            <h2>please login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-warning" >Google sign in</button>

        </div>
    );
};

export default Login;