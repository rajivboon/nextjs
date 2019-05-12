import React from 'react';
import Baselayout from '../components/layouts/Baselayout'
import BasePage from '../components/BasePage'

class About extends React.Component {
    render() {
        return(
            <Baselayout {...this.props.auth}>
                <BasePage title="I am about" > </BasePage>
            
            </Baselayout>
        )
    }
}
export default About;