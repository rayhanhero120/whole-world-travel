import React, { useEffect, useState } from 'react';
import OurAgency from '../OurAgency/OurAgency';

const OurAgencies = () => {
    const [ourAgencies, setourAgencies] = useState([])
    useEffect(() => {
        fetch('./agency.json')
            .then(res => res.json())
            .then(data => setourAgencies(data))
    }, [])
    return (
        <div id="agency" className="container">
            <h1 className="text-danger mt-5">Our agency</h1>

            <div className="row row-cols-1 row-cols-md-3 g-4">

                {
                    ourAgencies.map(ourAgency => <OurAgency
                        ourAgency={ourAgency}
                    ></OurAgency>)
                }

            </div>
        </div>
    );
};

export default OurAgencies;