import { getCustomerById } from "Api";
import { useEffect,useState } from "react"
import { useParams,Link, useLocation } from "react-router-dom"

 const CustomerDetail = () => {
    const {customerId}= useParams()
    const [customer, setCustomer] = useState(null);
    const location = useLocation();


    useEffect(() => {
        getCustomerById(Number(customerId)).then(setCustomer)
    },[customerId])

    if (!customer) {
        return
    }

    return <main>
        <Link to={location.state?.from ?? '/customers'}>Back to customers list</Link>
       <p> id:{customer.id}</p>
       <p> UserName: {customer.name}</p>
    </main>
}

export default CustomerDetail;