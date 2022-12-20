import { Outlet } from "react-router-dom";
import {SalesMain,SalesHeader,SalesList,SalisLink } from '../components/Styled'

const navItems = [
  { href: 'analytics', text: 'Analytics' },
  { href: 'invoices', text: 'Invoices' },
  { href: 'deposits', text: 'Deposits' },
];


export const Sales = () => {
    return (
        <SalesMain>
            <SalesHeader>
                <SalesList>
                    {navItems.map(({ href, text }) => <SalisLink  to={href} key={href}>{text}</SalisLink>)}
                </SalesList>
            </SalesHeader>
            <Outlet/>
        </SalesMain>
    )
}