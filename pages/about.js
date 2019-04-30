import React from 'react';
import Baselayout from '../components/layouts/Baselayout'
import BasePage from '../components/BasePage'

class About extends React.Component {
    render() {
        return(
            <Baselayout {...this.props.auth}>
            <BasePage> </BasePage>
            <h1>I am about</h1>
            </Baselayout>
        )
    }
}
export default About;