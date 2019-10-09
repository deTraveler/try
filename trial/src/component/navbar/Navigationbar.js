import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class Navigationbar extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Home</NavbarBrand>
                </Navbar>
            </div>
        )
    }
}

export default Navigationbar;