import { useEffect, useState } from 'react';
import {
     Collapse,
     Navbar,
     NavbarToggler,
     NavbarBrand,
     Nav,
     UncontrolledDropdown,
     DropdownToggle,
     DropdownMenu,
     DropdownItem,
     NavbarText,
} from 'reactstrap';
import { Link } from 'react-router-dom';

//CSS import
import './Header.css';
import { useCookies } from 'react-cookie';

function Header(props) {

     const [isOpen, setIsOpen] = useState(false);
     const [token, setToken, removeToken] = useCookies(['jwt-token']);

     const toggle = () => setIsOpen(!isOpen);

     useEffect(() => {
          // console.log(token);
     }, [token]);

     return (
          <div >
               <Navbar {...props} >
                    <NavbarBrand href="/" id="title">
                         <Link to="/">Shop Cart</Link>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                         <Nav className="ms-auto" navbar>
                              <UncontrolledDropdown nav inNavbar style={{ marginRight: '2rem' }}>
                                   <DropdownToggle nav caret>
                                        Options
                                   </DropdownToggle>
                                   <DropdownMenu right>
                                        <DropdownItem>Cart</DropdownItem>
                                        <DropdownItem>Setings</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem id="login">
                                             {token['jwt-token'] ? <Link onClick={() => {
                                                  removeToken('jwt-token');
                                             }} to="/signin">Logout</Link> : <Link to="/signin">SignIn</Link>}
                                        </DropdownItem>
                                   </DropdownMenu>
                              </UncontrolledDropdown>
                              <NavbarText>Username</NavbarText>
                         </Nav>
                    </Collapse>
               </Navbar>
          </div>
     );
}

export default Header;