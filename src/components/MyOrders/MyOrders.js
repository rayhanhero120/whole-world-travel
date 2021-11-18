import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";


const MyOrders = () => {
    const { user } = useAuth()
    const [myOrders, setMyOrders] = useState([])
    const [cancel, setCancel] = useState(false)

    useEffect(() => {
        fetch(`https://ghastly-shadow-01497.herokuapp.com/myOrders/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))

    }, [cancel])
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure,you want to delete?')
        if (proceed) {
            fetch(`https://ghastly-shadow-01497.herokuapp.com/deleteMyOrder/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainingUsers = myOrders.filter(service => service.id !== id)
                        setCancel(remainingUsers)
                    }
                })
        }
    }
    return (
        <div>
            <h1>there is order</h1>
            {myOrders?.map((service) => (
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
                    <Button style={{
                        backgroundColor:
                            'red'
                    }} onClick={() => handleDelete(service?._id)}>Delete</Button>
                </div>
            ))}
        </div>
    );
};
export default MyOrders;