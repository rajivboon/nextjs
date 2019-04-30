import React from 'react';
import Baselayout from '../components/layouts/Baselayout'
import BasePage from '../components/BasePage'


class Search extends React.Component {
    render() {
        return(
            <Baselayout {...this.props.auth}>
            <BasePage>
            <h1>I am Search</h1>
            </BasePage>
            </Baselayout>
        )
    }
}
export default Search;