import React from 'react';
import { Button } from 'reactstrap';
import Baselayout from '../components/layouts/Baselayout'


class Index extends React.Component {
    render() {

        const {isAuthenticated, user } = this.props.auth;
        return(
            <Baselayout {...this.props.auth}>
             <h1> {isAuthenticated && <span>{user.name}</span> }</h1>
             <h1> welcome site i lcccove you 
                 </h1>
                 <Button color="danger">clivk me</Button>
            </Baselayout>
            
        );
    }
}

export default Index;