import React from 'react';
import { Link } from 'react-router-dom';
import unable from '../../images/notfound.jpg'

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '80%' }} src={unable} alt="" />
            <br />
            <Link to="/"><button>Go Back</button></Link>
        </div>
    );
};

export default NotFound;