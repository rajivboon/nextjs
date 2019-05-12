import React from 'react';
import Baselayout from '../components/layouts/Baselayout'
import BasePage from '../components/BasePage'


class Search extends React.Component {
    render() {
        return(
            <Baselayout {...this.props.auth}>
                <BasePage title="I am Search">
            
            </BasePage>
            </Baselayout>
        )
    }
}
export default Search;

    
