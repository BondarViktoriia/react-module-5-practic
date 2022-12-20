import { AppNav, BarContainer,NavItem } from './Styled'
import {
  BsStack,
  BsWalletFill,
  BsBriefcaseFill,
  BsChatLeftTextFill,
  BsPersonLinesFill,
} from 'react-icons/bs';

const navItems = [
  { href: 'dashboard', text: 'Dashboard', icon: BsStack },
  { href: 'sales', text: 'Sales', icon: BsWalletFill },
  { href: 'reports', text: 'Reports', icon: BsBriefcaseFill },
  { href: 'feedback', text: 'Feedback', icon: BsChatLeftTextFill },
  { href: 'customers', text: 'Customers', icon: BsPersonLinesFill },
];

export const AppBar = () => {
    return (
        <BarContainer>
            <AppNav>
                {navItems.map(({ href, text, icon: Icon }) => <NavItem  to={href} key={href}>
                    <Icon size='16px'/>
                    {text}</NavItem>)}
            </AppNav>
        </BarContainer>
    )
}