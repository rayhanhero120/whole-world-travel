import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PlaceOrder = () => {
    const { serviceId } = useParams()
    const [service, setservice] = useState({})
    useEffect(() => {
        fetch(`https://ghastly-shadow-01497.herokuapp.com/singleService/${serviceId}`)
            .then(res => res.json())
            .then(data => setservice(data))

    }, [])

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth()
    const onSubmit = data => {
        fetch('https://ghastly-shadow-01497.herokuapp.com/order', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Your Order Successfully')
                    reset()
                }
            })
    }
    return (
        <div>
            <div>
                <img src={service?.img} alt="" />
            </div>
            <div>
                <h1 className="card-title">{service?.name}</h1>
                <p className="card-text">{service?.description}</p>
                <p className="fw-bold">Travel style: {service?.travel_style}</p>
                <p className="fw-bold"> Service level:{service?.service_level}</p>
                <p className="fw-bold"> Trip type:{service?.trip_type}</p>
            </div>
            <h2 className="text-danger mt-5"> Fill the form for your Order</h2>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="Name" defaultValue={service?.name} {...register("name", { required: true })} />
                <br />
                <input placeholder="Email" defaultValue={user.email} {...register("email", { required: true })} />
                <br />

                <input placeholder="number" defaultValue="" {...register("number")} />
                <br />
                <input placeholder="address" defaultValue="" {...register("address")} />
                <br />
                <input placeholder="img" defaultValue={service?.img} {...register("img", { required: true })} />
                <br />

                {errors.email && <span className="error">This field is required</span>}
                <br />
                <input type="Submit" />
            </form>
        </div>
    );
};

export default PlaceOrder;