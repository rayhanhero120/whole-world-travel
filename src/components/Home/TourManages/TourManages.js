import React, { useEffect, useState } from 'react';
import TourManage from '../TourManage/TourManage';

const TourManages = () => {
    const [tourManages, setTourManages] = useState([])
    useEffect(() => {
        fetch('https://ghastly-shadow-01497.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setTourManages(data))
    }, [])
    return (
        <div id="exotic" className="container">
            <h1 className="text-danger mt-5">Go Exotic Places</h1>

            <div className="row row-cols-1 row-cols-md-3 g-4">

                {
                    tourManages.map(tourManage => <TourManage
                        tourManage={tourManage}
                    ></TourManage>)
                }

            </div>
        </div>

    );
};

export default TourManages;