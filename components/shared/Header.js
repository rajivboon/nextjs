import React from 'react';
import Links from 'next/link';
import auth0 from '../../services/auth0';   
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

  
    const BsNavLink = (props) => {
        const {route, title,} = props;
        return (
            <Links href={route}>
            <a className= "port-navbar-link"> {title} </a>
                </Links>
        )
    }

    const Login = () => {
        return(
            <a onClick={auth0.login} className="port-navbar-link clickable">Login</a> 
        )
    }

    const Logout = () => {
        return(
            <a onClick={auth0.logout} className="port-navbar-link clickable ">Logout</a> 
        )
    }

  export default class Example extends React.Component {
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
        const {isAuthenticated, user}=this.props;
      console.log(user , "header");

      return (
        <div>
          <Navbar className= " port-nav port-default" color="danger" text="white" light expand="md">
            <NavbarBrand className= "port-navbar-brand" href="/">Quick Marriage</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <BsNavLink route='/' title="Home" /> 
                <BsNavLink route='/about' title="About" />
                <BsNavLink route='/search' title="Search" />
                 { !isAuthenticated &&
                     <Login />
                 } 
                 { isAuthenticated &&
                     <Logout />
                }
                {isAuthenticated &&
                  <span className="nav-link"> {user.name}</span>
                } 
              {/* <Login /> */}
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }
// export default Header;