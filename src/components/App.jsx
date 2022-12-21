import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
// import { Sales } from 'pages/Sales';
import { Invoices } from './Invoices';
import {InvoiceDetails} from './InvoiceDetails'
// import Customers from 'pages/Customers';
import  CustomerDetail from 'pages/CustomerDetails';
import { lazy } from 'react';

const Sales = lazy(() => import('pages/Sales').then(module => ({
  ...module,
  default:module.Sales
})))

const Customers = lazy(()=> import ('pages/Customers'))

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to='dashboard'/>} />
          <Route path="dashboard" element={<div>Dashboard</div>} />
          <Route path="sales" element={<Sales />}>
            <Route index element={<div> Sales index route</div>} />
            <Route path="analytics" element={<div>analytics</div>} />
            <Route path="invoices" element={<Invoices />}>
               <Route path=":invoiceId" element={<InvoiceDetails/>}></Route>
            </Route>
             <Route path="deposits" element={<div>deposits</div>}  />
          </Route> 
          <Route path="reports" element={<div>reports</div>} />
          <Route path="feedback" element={<div>feedback</div>} />
          <Route path="customers" element={<Customers />} />
          <Route path='customers/:customerId' element={<CustomerDetail/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
