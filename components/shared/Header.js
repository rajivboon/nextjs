import React from 'react';
import Link from 'next/link';
import auth0 from '../../services/auth0';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem 
    
} from 'reactstrap';

const Login = () => {
    return (
        <span onClick={auth0.login} className="nav-link port-navbar-link clickable"> login </span>
    )
}

const Logout = () => {
    return (
        <span onClick={auth0.logout} className="nav-link port-navbar-link clickable"> logout </span>
    )
}

const BsnavLinks = (props) => {
   const { route, title } = props;
   return (
       <Link href={route}>
           <a className="nav-link port-navbar-likn ">{title} </a>
       </Link>
   )
}

export default class Header extends React.Component {


    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const { isAuthenticated, user, className } = this.props;
        
        return (
            <div>
                <Navbar className={`port-navbar port-nav-base absolute ${className}`}  color="transparent" dark expand="md">
                    <NavbarBrand className="port-navbar-brand " href="/">Quick marriage</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            
                            {/* <Link href="/about">
                                <a className="nav-link">About</a>
                            </Link> */}
                            <NavItem className="port-navbar-item">
                            <BsnavLinks route="/" title="Home" />
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <BsnavLinks route="/about" title="About" />
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                {/* <BsnavLinks route="/blogs" title="Matches" /> */}
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Matches
                </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            Who Viewed My Profile
                  </DropdownItem>
                                        <DropdownItem>
                                            New Matches
                  </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Premium Members
                  </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <BsnavLinks route="/portfolios" title="Search" />
                            </NavItem>

                            <NavItem className="port-navbar-item">
                                <BsnavLinks route="/cv" title="Contact" />
                            </NavItem>

                            { !isAuthenticated &&
                                <NavItem className="port-navbar-item">
                                <Login />
                            </NavItem>}

                            {isAuthenticated &&
                                <NavItem className="port-navbar-item">
                                <Logout />
                                </NavItem>}
                            {isAuthenticated &&
                                <NavItem className="port-navbar-item">
                                    <span> {user.name} </span>
                                </NavItem>}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}