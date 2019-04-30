import React from 'react';
import Baselayout from '../components/layouts/Baselayout';
import BasePage from '../components/BasePage';
import auth0Client from '../services/auth0';
import { withRouter } from 'next/router';

class Callback extends React.Component {

    async componentDidMount() {
        await auth0Client.handleAuthentication();
        this.props.router.push('/');
        
    }
    // componentDidMount() {
    //     auth0Client.handleAuthentication().then(() => {
    //         //redirect
    //     }).catch(err => console.log(err));
    // }

    render() {
        return(
            <Baselayout>
            <BasePage>
            <h1>I am Callback</h1>
            </BasePage>
            </Baselayout>
        )
    }
}
export default withRouter (Callback);