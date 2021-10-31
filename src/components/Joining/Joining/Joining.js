import React from 'react';
import { useParams } from 'react-router';

const Joining = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h2>this is joining:{serviceId}</h2>
        </div>
    );
};

export default Joining;