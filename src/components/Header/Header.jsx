import { useState } from 'react';
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

function Header(props) {
     const [isOpen, setIsOpen] = useState(false);

     const toggle = () => setIsOpen(!isOpen);

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
                                             <Link to="/signin">Logout</Link>
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