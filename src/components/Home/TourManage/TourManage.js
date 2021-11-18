import React from 'react';
import { Link } from 'react-router-dom';

const TourManage = ({ tourManage }) => {
    const { _id, name, description, travel_style, service_level, trip_type, img } = tourManage
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h1 className="card-title">{name}</h1>
                    <p className="card-text">{description}</p>
                    <p className="fw-bold">Travel style: {travel_style}</p>
                    <p className="fw-bold"> Service level:{service_level}</p>
                    <p className="fw-bold"> Trip type:{trip_type}</p>
                    <Link to={`/placeOrder/${_id}`}>
                        <button className="btn btn-primary">Join {name.toLowerCase()}</button>

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TourManage;