import React from 'react';

const OurAgency = ({ ourAgency }) => {
    const { agency, img, description } = ourAgency
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{agency}</h5>
                    <p className="card-text">{description}</p>

                </div>
            </div>
        </div>
    );
};

export default OurAgency;