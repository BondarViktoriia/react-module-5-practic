import { getInvoiceById } from "Api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export const InvoiceDetails = () => {
    const {invoiceId} = useParams();
    const [invoice, setInvoice] = useState(null);

    useEffect(() => {
        getInvoiceById(invoiceId).then(setInvoice)
    }, [invoiceId])
    
  
    return (<>
        {invoice && (<div>
            <p>Recipient:{invoice.recipient} </p>
            <p>Account number: {invoice.account} </p>
            <p>Total due : {invoice.total} </p>
            <p>Invoice Date: {new Date(invoice.date.created).toLocaleDateString()} </p>
            <p>Due date:  {new Date(invoice.date.due).toLocaleDateString()}</p>

        </div>)}
    </>)
}