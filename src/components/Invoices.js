import { getInvoices } from 'Api';
import { useState,useEffect } from 'react'
import {  Outlet } from 'react-router-dom';
import {InvoicesAside,InvoiceContainer,InvoiceLink} from './Styled'

export const Invoices = () => {

    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        getInvoices().then(setInvoices)
    },[])
    return (
        <InvoiceContainer>
            <InvoicesAside>
                {invoices.map(({ id }) => <InvoiceLink key={id} to={`${id}`}>{id}</InvoiceLink>)}
            </InvoicesAside>
            <Outlet/>
        </InvoiceContainer>
    )
}