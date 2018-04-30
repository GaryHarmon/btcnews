import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

export default class NavHead extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="white">
         <Nav tabs justified >
          <NavItem>
            <NavLink href="#" active>All</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink href="#">CoinDesk</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">CCN</NavLink>
          </NavItem>
          <NavItem>
            <NavLink  href="#"> CoinTelegraph</NavLink>
          </NavItem>
          <NavItem>
            <NavLink  href="#"> AMBCYPTRO</NavLink>
          </NavItem>
          <NavItem>
            <NavLink  href="#"> REDDIT</NavLink>
          </NavItem>
          <NavItem>
            <NavLink  href="#"> COINSQUARE</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}