import React from 'react';
import { Button } from 'reactstrap';
import Baselayout from '../components/layouts/Baselayout'

class Index extends React.Component {
    render() {
        return(
            <Baselayout {...this.props.auth}>
             <h1>
                 welcome site i love you
                 </h1>
                 <Button color="danger">clivk me</Button>
            </Baselayout>
            
        );
    }
}

export default Index;