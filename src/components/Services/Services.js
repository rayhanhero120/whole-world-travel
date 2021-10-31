import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://ghastly-shadow-01497.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="agency" className="container">
            <h1 className="text-danger mt-5">Our Service</h1>

            <div className="row row-cols-1 row-cols-md-3 g-4">

                {
                    services.map(service => <Service
                        service={service}
                    ></Service>)
                }

            </div>
        </div>
    );
};

export default Services;