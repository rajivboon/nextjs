import React from 'react';
import Header from '../shared/Header';

const BaseLayout = (props) => {
    const {classNames, children, isAuthenticated}=props;
    
    return (
        <React.Fragment >
        <Header isAuthenticated={isAuthenticated} />
        {props.children}

        
        
        </React.Fragment>
        )
}

export default BaseLayout;