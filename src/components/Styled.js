import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
display: grid;
grid-template-columns: 200px 1fr;
`
export const BarContainer = styled.header`
padding: 40px;
height: 100vh;
border-right: 1px solid black;
`
export const AppNav = styled.nav`
display: flex;
flex-direction: column;
`
export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 20 px;
  padding: 5px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  &.active {
    background-color: blue;
    color: orange;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color:red;
  }
`;

export const SalesMain = styled.main`
display: flex;
flex-direction: column;
`
export const SalesHeader = styled.header`
border-bottom:1px solid black;
padding: 20px;
`
export const SalesList = styled.ul`
display:flex;
`
export const SalisLink = styled(NavLink)`
padding: 10px;
color:black;
text-decoration: none;

&.active{
  color:orange;
}
`

export const InvoicesAside = styled.aside`
display: flex;
flex-direction: column;
border-right: 1px solid black;
padding: 8px;
`
export const InvoiceContainer = styled.div`
display: grid;
grid-template-columns: 100px 1fr;`

export const InvoiceLink = styled(NavLink)`
padding: 10px;
text-decoration: none;
color: black;
text-align: center;
&.active{
  color:white;
  border-radius: 8px;
  background-color: blue;
}

:hover:not(.active){
  color: red;
}
`