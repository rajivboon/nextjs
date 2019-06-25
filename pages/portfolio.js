import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { withRouter } from 'next/router';
import axios from 'axios';
import BasePage from '../components/Basepage';

class Portfolio extends React.Component {

// Search gitInitialProps next.js
    static async getInitialProps({ query }) {
        const postfolioId = query.id;
        let portfolio = {};

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postfolioId}`);
            portfolio = response.data;
        } catch (err) {
            console.error(err);
            
        }
        return {portfolio};
        
        // console.log(query);
        // return {};
    }

    render() {
        const { portfolio } = this.props;
        // debugger;
        console.log(this.props);
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage >
                <h1> {portfolio.title}</h1>
                <p>body: {portfolio.body}</p>
                <p>id: {portfolio.id} </p>
                </BasePage>
            </BaseLayout>

        )
    }
}

export default withRouter (Portfolio);