import React from 'react';
import Header from '../shared/Header';

const BaseLayout = (props) => {
    const {classNames, children, isAuthenticated, user}=props;
    
    return (
        <React.Fragment >
        <Header isAuthenticated={isAuthenticated} user={user} />
        {props.children}

        
        
        </React.Fragment>
        )
}

export default BaseLayout;